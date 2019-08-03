import React from "react";
import { Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import ButtonAppBar from "./containers/appbar";
import About from "./containers/about";
import Users from "./containers/users";
import Games from "./containers/games";
import Game from "./containers/game";
import Match from "./containers/match";

const App = () => (
    <React.Fragment>
        <CssBaseline />
        <ButtonAppBar />
        <main>
            <Grid container justify="center">
                <Grid item xs={12} md={6}>
                    <Route exact path="/" component={About} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/games" component={Games} />
                    <Route exact path="/games/:id" component={Game} />
                    <Route exact path="/games/:gameId/matches/:matchId" component={Match} />
                </Grid>
            </Grid>
        </main>
    </React.Fragment>
);

export default App;
