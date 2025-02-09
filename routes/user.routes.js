import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", (req, res) => res.send({ title: "GET  users details" }));

userRouter.post("/", (req, res) => res.send({ title: "CREATE new user" }));

userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE users" }));

userRouter.delete("/:id", (req, res) => res.send({ title: "DELET user" }));

export default userRouter;
