const express = require("express");
const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
    console.log("Checked at", new Date().toISOString());
    return res.json({
        health: "OK"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});