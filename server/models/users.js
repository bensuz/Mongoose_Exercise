const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: [true, "Name is Required!"] },
        email: {
            type: String,
            unique: true,
            required: [true, "Email is Required!"],
        },
        age: { type: Number, min: 18 },
        phoneNumber: {
            type: String,
            unique: true,
            required: [true, "Phone Number is Required"],
        },
        isActive: { type: Boolean, default: true },
    },
    {
        timeStamps: true,
    }
);
const model = mongoose.model("User", userSchema);
module.exports = model;
