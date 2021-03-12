import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
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

const User = mongoose.model('User', userSchema);

export {User};