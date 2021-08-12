import React from "react";
import { Switch, Route } from "react-router-dom";
import JobsDesc from "./components/pages/JobsDesc";
import JobsDenied from "./components/pages/JobsDenied";

const Router = () => {
    return (
        <Switch>
            <Route path="/">
                <JobsDesc />
            </Route>
            <Route path="/denied">
                <JobsDenied />
            </Route>
        </Switch>
    );
};

export default Router;
