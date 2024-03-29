const express = require("express");

const app = express();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is running"));

// Define Routes
app.use("/api/characters", require("./routes/api/characters"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));