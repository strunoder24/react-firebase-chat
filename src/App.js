import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'

export default function () {
    let page = routes.map(route => (
        <Route path={route.url}
               component={route.component}
               exact={route.exact}
               key={route.url}
        />
    ));

    return (
        <Router>
            <Switch>
                { page }
            </Switch>
        </Router>
    );
}