import express from "express";

import robin from "roundrobin";

import { generalError } from "./common";
import { getAllTeams } from "../db/team";
import { getGame, getAllGames, getStandings, createGame } from "../db/game";
import { getMatchesByGame, getMatchByGameAndId, createMatchesForGame, setWinnerByTypeAndId } from "../db/match";

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
        const createdGame = await createGame(game);
        const teams = await getAllTeams();

        if (game.type == "Serie") {
            const matches = [];
            const matchIndices = robin(teams.length);
            for (const round of matchIndices) {
                for (const [homeTeamIndex, awayTeamIndex] of round) {
                    const match = {
                        game_id: createdGame.id,
                        team1_id: teams[homeTeamIndex - 1].id,
                        team2_id: teams[awayTeamIndex - 1].id
                    };
                    matches.push(match);
                }
            }
            await createMatchesForGame(game, matches);
            res.status(200).send(JSON.stringify({ status: "success" }));
        }
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});

gameRouter.get("/:gameId/", async (req, res) => {
    try {
        const gameId = parseInt(req.params.gameId);
        const game = await getGame(gameId);
        if (!game) return res.status(404).send(JSON.stringify({ message: "Gren finnes ikke " }));

        const matches = await getMatchesByGame(game);
        res.status(200).send(JSON.stringify({ game: game, matches: matches }));
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});

gameRouter.get("/:gameId/standings", async (req, res) => {
    try {
        const gameId = parseInt(req.params.gameId);
        const standings = await getStandings(gameId);
        res.status(200).send(JSON.stringify(standings));
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});

gameRouter.get("/:gameId/matches/:matchId", async (req, res) => {
    try {
        const gameId = parseInt(req.params.gameId);
        const matchId = parseInt(req.params.matchId);
        const game = await getGame(gameId);
        if (!game) return res.status(404).send(JSON.stringify({ message: "Gren finnes ikke " }));

        const selectedMatch = await getMatchByGameAndId(game, matchId);
        res.status(200).send(JSON.stringify(selectedMatch));
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});

gameRouter.post("/:gameId/matches/:matchId", async (req, res) => {
    try {
        const gameId = parseInt(req.params.gameId);
        const matchId = parseInt(req.params.matchId);
        const winnerId = parseInt(req.body.winnerId);
        const game = await getGame(gameId);
        if (!game) return res.status(404).send(JSON.stringify({ message: "Gren finnes ikke " }));

        const selectedMatch = await setWinnerByTypeAndId(game.type, matchId, winnerId);
        res.status(200).send(JSON.stringify(selectedMatch));
    } catch (e) {
        console.log(e);
        res.status(500).send(JSON.stringify(generalError));
    }
});
