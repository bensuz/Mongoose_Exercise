require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const usersRouter = require("./routes/users");
const PORT = process.env.PORT || 8000;
const path = require("path");
app.use(cors());
app.use(express.json);
app.use("/api/users", usersRouter);

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
