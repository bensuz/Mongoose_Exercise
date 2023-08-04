const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log(
            "connection:",
            process.env.MONGO_DB_ATLAS_CONNECTION_STRING
        );
        await mongoose.connect(process.env.MONGO_DB_ATLAS_CONNECTION_STRING);
        console.log("mongodb connected");
    } catch (error) {
        console.log("connection error", error);
        process.exit(1);
    }
};

module.exports = connectDB;
