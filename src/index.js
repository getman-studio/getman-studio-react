import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';

import * as serviceWorker from './serviceWorker';

import { HashRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/admin" component={Admin} />
        </Switch>
    </Router>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
