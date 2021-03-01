import express from 'express';
import { User } from '../models/User';


const usersRouter = express.Router();

usersRouter.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

usersRouter.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

export {usersRouter};