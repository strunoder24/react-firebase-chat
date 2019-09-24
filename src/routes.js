import React from 'react'
import loadable from '@loadable/component'

import Loading from '~c/loaders/ScriptLoading'

const Chat = loadable(() => import('~p/Chat'), {
    fallback: <Loading />,
});

let routes = [
    {
        name: 'chat',
        url: '/',
        component: Chat,
        exact: true
    },
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