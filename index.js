import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/health", (req, res) => {
    res.json({ status: "XYL" });
});

app.listen(4100, () => {
    console.log("Server is running on port 4100");
});