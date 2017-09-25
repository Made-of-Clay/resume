"use strict";

import Vue from 'vue';
import VueMaterial from 'vue-material';
import Router from 'vue-router';
import App from './App.vue';

import Home from './Home.component.vue';
import Portfolio from './Portfolio.component.vue';

Vue.use(Router);
let router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/portfolio/:category',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/portfolio',
            redirect: '/portfolio/all'
        }
    ]
});

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'indigo',
  accent: 'deep-orange',
  warn: 'red',
  background: 'white'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
