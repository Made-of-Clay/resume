import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vuex from 'vuex';
import storeObj from './store';

import app from './app';

Vue.use(Vuex);
const store = new Vuex.Store(storeObj);

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
    store,
    render: h => h(app),
});
