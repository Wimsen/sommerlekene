import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";

let port = process.env.NODE_ENV === "production" ? 8080 : 8079;
const app = express();

if (process.env.NODE_ENV == "production") app.use(morgan("combined"));
else app.use(morgan("dev"));

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
    res.status(200).send(
        JSON.stringify({
            data: [1, 2, 3]
        })
    );
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(process.env.PORT || port);
console.log("Server started");
