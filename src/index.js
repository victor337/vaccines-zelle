const express = require("express");
const vaccinesManager = require('./utils/vaccines_manager.js');

const app = express();
const PORT = 3000;

app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
    console.log("Shutting down server...");
    server.close(() => {
        console.log("Server closed.");
        process.exit(0);
    });
});

app.get("/vaccines", (req, res) => {
    return res.send(vaccinesManager.getAllVaccines());
});

app.get("/vaccines/:id", (req, res) => {
    const id = req.params.id;

    return res.send(vaccinesManager.getVaccineById(id));
});
