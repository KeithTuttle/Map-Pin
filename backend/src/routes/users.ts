import express from 'express';
import { QueryOptions } from 'mongoose';
import { User } from '../models/User';


const usersRouter = express.Router();

// get all users
usersRouter.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('ERROR: ' + err));
});


// add user
usersRouter.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

// get user by id
usersRouter.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

// get user by username
usersRouter.route('/username/:username').get((req, res) => {
    User.findOne({username: req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

// delete user by id
usersRouter.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

//update a user
usersRouter.route('/update/:id').post((req, res) => {
    var options: QueryOptions ={
        upsert: false,
        new: true
    };
    User.findByIdAndUpdate(req.params.id, req.body, options, function(err, user) {
        if(err){
            res.send(err)
        }
        else {
            // get back the new user
            // to get back the old record, remove the 'new' from options or set to false
            res.json(user);
        }
    });
});

// GET request
usersRouter.route('/update/username/:username').get((req, res) => {
    User.updateOne({username: req.params.username}, {$set: {"username": req.body.username}}, { upsert: true, new: true }, (err) => {
        if(err){
            res.send(err);
        }
        else{
            // can pass a user object next to error to recieve an object
            //nModified set to 1 means it was successful
            res.send("Updated User");
        }
    });
});


export {usersRouter};