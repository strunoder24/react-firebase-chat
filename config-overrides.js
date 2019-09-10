const path = require('path');

module.exports = function override(config, env) {
    //Алиасы для более удобного импорта
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    config.resolve.alias['~c'] = path.resolve(__dirname, 'src/components');
    config.resolve.alias['~s'] = path.resolve(__dirname, 'src/store');
    config.resolve.alias['~p'] = path.resolve(__dirname, 'src/pages');
    config.resolve.alias['~h'] = path.resolve(__dirname, 'src/helpers');

    return config;
};