"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
    pins: {
        type: Array,
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 1
        },
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        },
        description: {
            type: String
        },
    }
}, {
    timestamps: true,
});
const User = mongoose_1.default.model('User', userSchema);
exports.User = User;
//# sourceMappingURL=User.js.map