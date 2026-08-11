import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/health", (req, res) => {
    res.json({ status: "UP" });
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});