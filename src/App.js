import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'
import { observer } from 'mobx-react';

import firebase from 'firebase'

// export default function () {
//     let page = routes.map(route => (
//         <Route path={route.url}
//                component={route.component}
//                exact={route.exact}
//                key={route.url}
//         />
//     ));
//
//     return (
//         <Router>
//             <Switch>
//                 { page }
//             </Switch>
//         </Router>
//     );
// }

class App extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('hey im logged');
            } else {
                console.log('Im ninja');
            }
        })
    }

    render(){
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
}

export default observer(App);