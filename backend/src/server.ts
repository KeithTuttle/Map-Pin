import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ATLAS_URI } from './constants';
import { usersRouter } from './routes/users';

const main = async () => {
    //env variables
    require('dotenv').config();

    // create express server and setup port
    const app = express();
    const port = process.env.PORT || 5000;

    //middleware and allow to parse json
    app.use(cors());
    app.use(express.json());

    const uri = ATLAS_URI;
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established!");
    });

    // routers
    app.use('/users', usersRouter);

    //starts server and listens
    app.listen(port, () => {
        console.log(`server started on port: ${port}`);
      });
    
  };
  
  main().catch((err) => {
    console.error(err);
  });
  