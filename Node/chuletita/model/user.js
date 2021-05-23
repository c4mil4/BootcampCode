const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


let Schema = mongoose.Schema;

const validRoles = {
    values: ["ADMI", "USER"],
    message: "{VALUE} is not a valid role"
}

let userSchema = new Schema({
    username: {
        type: String,
        required : [true, "User is required"]
    },
    email: {
        type: String,
        unique: true,
        requiered: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role:{
        //Not required if omitted
        type: String,
        default: "USER",
        enum: validRoles
    },
    active: {
        type: Boolean,
        default: true

    }
});

userSchema.methods.toJSON = function() {
    const user = this;

    const userObject = user.toObject(); //user.toObject();

    delete userObject.password;
    delete userObject.role;

    return userObject; 
}


userSchema.plugin(uniqueValidator, {message: "{PATH should be unique"});
module.exports = mongoose.model("User", userSchema);