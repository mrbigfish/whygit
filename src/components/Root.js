import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageLayout from "../containers/PageLayout";

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={PageLayout} />
        </Router>
    </Provider>
);

export default Root;
