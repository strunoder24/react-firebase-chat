import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '~/layouts/default'
import routes from '~/routes'
import '~/styles/styles.scss'

export default class extends React.Component {
    render(){
        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact}
                          key={route.url}
            />
        });

        return (
            <Router>
                <Layout>
                    <Switch>
                        { routesComponents }
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

