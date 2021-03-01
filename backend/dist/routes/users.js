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
    const newUser = new User_1.User({ username });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('ERROR: ' + err));
});
//# sourceMappingURL=users.js.map