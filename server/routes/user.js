import express from "express";

import { getAllUsers, createUser } from "../db/user";
import { generalError } from "./common";

const userRouter = express.Router();
export default userRouter;

userRouter.get("/", async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(JSON.stringify(users));
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});

userRouter.post("/", async (req, res) => {
    try {
        const user = req.body;
        const status = await createUser(user);
        res.status(200).send(JSON.stringify({ status: "success" }));
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});
