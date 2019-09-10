import Chat from '~p/Chat';


let router = [
    {
        name: 'home',
        url: '/',
        component: Chat,
        exact: true
    },
];

let routesMap = {};

router.forEach((route) => {
    routesMap[route.name] = route.url
});

let urlBuilder = function(name, params) {
    if (!routesMap.hasOwnProperty(name)) {
        return null
    }

    let url = routesMap[name];
// eslint-disable-next-line
    for (let key in params) {
        url = url.replace(':' + key, params[key]);
    }

    return url
};


export default router;
export { routesMap, urlBuilder };