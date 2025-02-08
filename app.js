import express from "express";
import { PORT } from "./config/env.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to API Server");
});

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});

export default app;
