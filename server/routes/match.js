// import express from "express";
//
// import { getMatch } from "../db/match";
// import { generalError } from "./common";
//
// const matchRouter = express.Router();
// export default matchRouter;
//
// matchRouter.get("/:type/:id", async (req, res) => {
//     try {
//         let id = parseInt(req.params.id);
//         let type = req.params.type;
//         const match = await getMatch(type, id);
//         res.status(200).send(JSON.stringify(match));
//     } catch (e) {
//         console.log(e);
//         res.status(500).send(JSON.stringify(generalError));
//     }
// });
