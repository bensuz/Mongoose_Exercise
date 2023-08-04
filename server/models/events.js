const mongoose = require("mongoose");

const eventsSchema = mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    description: { type: String, reqired: [true, "Description is required"] },
    location: { type: String, required: [true, "Location is required"] },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Organizer is required"],
    },
    attendees: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const model = mongoose.Model("Events", userSchema);
module.exports = model;
