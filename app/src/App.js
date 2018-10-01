import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import ButtonAppBar from "./containers/appbar";
import About from "./containers/about";
import Users from "./containers/users";

const App = () => (
    <React.Fragment>
        <CssBaseline />
        <ButtonAppBar />
        <main>
            <Route exact path="/" component={About} />
            <Route exact path="/users" component={Users} />
        </main>
    </React.Fragment>
);

export default App;
