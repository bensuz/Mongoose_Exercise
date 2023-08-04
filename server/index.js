require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const connectDB = require("./config/db");

const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");

const PORT = process.env.PORT || 8000;
const path = require("path");
app.use(cors());

app.use("/api/users", usersRouter);
app.use("/api/events", eventsRouter);

if (process.env.NODE_ENV === "production") {
    const buildPath = path.join(__dirname, "../client/dist");
    app.use(express.static(buildPath));
    app.get("*", (req, res) =>
        res.sendFile(path.join(buildPath, "index.html"))
    );
}
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
});
