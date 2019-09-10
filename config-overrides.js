module.exports = function override(config, env) {
    //Алиасы для более удобного импорта
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.resolve.alias['~c'] = path.resolve(__dirname, 'components');
    config.resolve.alias['~s'] = path.resolve(__dirname, 'store');
    config.resolve.alias['~p'] = path.resolve(__dirname, 'pages');
    config.resolve.alias['~h'] = path.resolve(__dirname, 'helpers');

    return config;
};