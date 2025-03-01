const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String
        // required: true (Not required when using passport-local-mongoose)
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."]
    },
    fullname: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: ""
    },
    contact: {
        type: Number
    },
    boards: {
        type: Array,
        default: []
    },
    googleId: { 
        type: String, 
        default: null 
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
}, { timestamps: true });

UserSchema.plugin(plm);

module.exports = mongoose.model("User", UserSchema);
