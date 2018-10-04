import express from "express";

import { getAllGames, createGame } from "../db/game";
import { generalError } from "./common";

const gameRouter = express.Router();
export default gameRouter;

gameRouter.get("/", async (req, res) => {
    try {
        const games = await getAllGames();
        res.status(200).send(JSON.stringify(games));
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});

gameRouter.post("/", async (req, res) => {
    try {
        const game = req.body;
        const status = await createGame(game);
        res.status(200).send(JSON.stringify({ status: "success" }));
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});
