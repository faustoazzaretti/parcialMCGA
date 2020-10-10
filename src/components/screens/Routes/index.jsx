import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from '../Home/index';
import ListCount from '../ListCounts/index';

const Routes = () => {
    return (
        <>
        <BrowserRouter>
            <Redirect exact from="/" to="/home" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/listCount" component={ListCount} />
        </BrowserRouter>
        </>
    );
};

export default Routes;