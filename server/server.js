import "@babel/polyfill";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import { dbFindOne } from "./db/db";

import userRouter from "./routes/user";
import gameRouter from "./routes/game";

let port = process.env.NODE_ENV === "production" ? 8080 : 8079;
const app = express();

if (process.env.NODE_ENV == "production") app.use(morgan("combined"));
else app.use(morgan("dev"));

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/games", gameRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(process.env.PORT || port);
console.log("Server started");
