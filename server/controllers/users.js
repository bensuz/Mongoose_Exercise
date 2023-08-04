const User = require("../models/users");

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log("create new user working:", newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message, errors: error.errors });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log("User found", users);
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.errors });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User.find({ _id: id });
        console.log("user found:", users);
        if (users.length === 0) {
            res.status(404).json({ message: "User not found" });
        }
        res.json(users[0]);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.errors });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            timeStamps: true,
        });
        if (!updatedUser) {
            res.status(404).json({ message: "No User Found" });
        }
        res.json(updatedUser);
        console.log("updated user:", updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.errors });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findOneAndDelete({ _id: id });
        if (!deletedUser) {
            res.status(400).json({ message: "User Not Found" });
        }
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.errors });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
