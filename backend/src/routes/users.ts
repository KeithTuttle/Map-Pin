import express from 'express';
import { QueryOptions } from 'mongoose';
import { User, IUser } from '../models/User';
import argon2 from 'argon2';
import { UserWithErrorMessage } from '../models/UserWithErrorMesage'


const usersRouter = express.Router();

// get all users
usersRouter.route('/').get((req, res) => {
    console.log("getting users 1");
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('ERROR: ' + err));
});


// add user
usersRouter.route('/add').post(async(req, res) => {
    console.log("adding user");
    const username = req.body.username;
    const password = await argon2.hash(req.body.password);
    const newUser = new User({username, password});

    //TODO: Verify that the username does not exist already, allow for same passwords
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
    console.log("getting users");
    User.findOne({username: req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('ERROR: ' + err));
});

// get user by username and password
usersRouter.route('/login').post(async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);

    User.findOne({username: username}, async function(err: Error, user: IUser){
        if(err) {
            console.log(err);
            var message = "An error occured";
            var response = new UserWithErrorMessage(null, message);
            return res.json(response);
        }
        if(!user) {
            console.log("user not found");
            var message = "Username does not exist";
            var response = new UserWithErrorMessage(null, message);
            return res.json(response);
        }
        const valid = await argon2.verify(user.password, password);
        if(!valid){
            console.log("pw not found");
            var message = "Password is incorrect";
            var response = new UserWithErrorMessage(null, message);
            return res.json(response);
        }
        var response = new UserWithErrorMessage(user, "");
        return res.json(response);
    })
});

// delete user by id
usersRouter.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
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
    console.log("getting users");
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