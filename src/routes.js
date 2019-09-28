import React from 'react'
import loadable from '@loadable/component'

import Loading from '~c/loaders/ScriptLoading'

const Root = loadable(() => import('~p'), {
    fallback: <Loading />,
});
const Auth = loadable(() => import('~p/Users/Auth'), {
    fallback: <Loading />,
});

let routes = [
    {
        name: 'home',
        url: '/',
        component: Root,
        exact: true
    },
    {
        name: 'signin',
        url: '/signin',
        component: Auth,
        exact: true
    },

    {
        name: 'signon',
        url: '/signon',
        component: Auth,
        exact: true
    }
];

//Мапер по названиям роутов.
let routesMap = {};
routes.forEach((route) => {
    routesMap[route.name] = route.url
});

//Улучшенная версия мапера выше, которая позволяет передавать параметры
const urlBuilder = function(name, params) {
    if (!routesMap.hasOwnProperty(name)) {
        return null
    }

    let url = routesMap[name];

    for (let key in params) {
        url = url.replace(':' + key, params[key]);
    }

    return url
};


export default routes;
export { routesMap, urlBuilder };