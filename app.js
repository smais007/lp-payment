import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to API Server");
});

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
