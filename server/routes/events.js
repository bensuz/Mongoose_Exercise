const express = require("express");
const router = express.Router;

const {
    createEvent,
    getAllEvents,
    getEventByID,
    updateEvent,
    deleteEvent,
} = require("../controllers/events");

router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
