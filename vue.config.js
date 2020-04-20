// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
    transpileDependencies: [
        "vuetify"
    ],
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Victorious - The Victory Tracker';
                return args;
            });
    }
};