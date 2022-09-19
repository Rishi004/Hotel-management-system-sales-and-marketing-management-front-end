import React from "react";
import { Current, Bygone, Home, BygoneTableEdit } from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Index() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/current" component={Current} />
                    <Route exact path="/bygone" component={Bygone} />
                    <Route
                        exact
                        path="/bygone-edit"
                        component={BygoneTableEdit}
                    />
                </Switch>
            </Router>
        </>
    );
}

export default Index;
