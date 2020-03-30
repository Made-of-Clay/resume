import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import app from './app';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#da1e33',
                secondary: '#626366',
                accent: '#af182a'
            },
        },
    }
});

new Vue({
    el: '#app',
    vuetify,
    render: h => h(app),
});
