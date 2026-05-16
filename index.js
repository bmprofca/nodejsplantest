const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
    console.log("Checked at", new Date().toISOString());
    return res.json({
        id: uuidv4(),
        health: "OK"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});