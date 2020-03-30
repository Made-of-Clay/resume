import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import app from './app';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    // options
});

new Vue({
    el: '#app',
    vuetify,
    render: h => h(app),
});
