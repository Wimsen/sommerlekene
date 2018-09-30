import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./containers/about";
import Users from "./containers/users";

const App = () => (
    <div>
        <header>
            <Link to="/">Deltakere</Link>
            <Link to="/about-us">About</Link>
        </header>

        <main>
            <Route exact path="/" component={Users} />
            <Route exact path="/about-us" component={About} />
        </main>
    </div>
);

export default App;
