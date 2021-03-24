"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = require("../models/User");
const usersRouter = express_1.default.Router();
exports.usersRouter = usersRouter;
usersRouter.route('/').get((req, res) => {
    User_1.User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('ERROR: ' + err));
});
usersRouter.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User_1.User({ username, password });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('ERROR: ' + err));
});
usersRouter.route('/:id').get((req, res) => {
    User_1.User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('ERROR: ' + err));
});
usersRouter.route('/username/:username').get((req, res) => {
    User_1.User.findOne({ username: req.params.username })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('ERROR: ' + err));
});
usersRouter.route('/:id').delete((req, res) => {
    User_1.User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('ERROR: ' + err));
});
usersRouter.route('/update/:id').post((req, res) => {
    var options = {
        upsert: false,
        new: true
    };
    User_1.User.findByIdAndUpdate(req.params.id, req.body, options, function (err, user) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(user);
        }
    });
});
usersRouter.route('/update/username/:username').get((req, res) => {
    User_1.User.updateOne({ username: req.params.username }, { $set: { "username": req.body.username } }, { upsert: true, new: true }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Updated User");
        }
    });
});
//# sourceMappingURL=users.js.map