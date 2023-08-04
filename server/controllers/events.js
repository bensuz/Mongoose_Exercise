const Event = require("../models/events");

const createEvent = async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.errors });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(201).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.erros });
    }
};

const getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const events = await Event.find({ _id: id });
        if (events.length === 0) {
            res.status(404).json({ message: "Event not found" });
        }

        res.status(201).json(events[0]);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.errors });
    }
};

const updateEvent = async (req, res) => {
    try {
        const { id, body } = req.params;
        const updatedEvent = Event.findOneAndUpdate(
            { _id: id },
            body,
            {
                new: true,
            },
            { timeStamps: true }
        );
        if (!updatedEvent) {
            res.status(404).json({ message: "User not found" });
        }
        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.errors });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = Event.findOneAndDelete({ _id: id });
        if (!deletedEvent) {
            res.status(404).json({ message: "Event not found" });
        }
        res.json(deletedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message, error: error.errors });
    }
};

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};
