"use strict";

import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueLazyLoad from 'vue-lazyload';
import VueTouch from 'vue-touch';

import App from './App.vue';

Vue.use(VueMaterial);
Vue.use(VueLazyLoad);
Vue.use(VueTouch, { name: 'v-touch' });

Vue.material.registerTheme('default', {
  primary: 'indigo',
  accent: 'deep-orange',
  warn: 'red',
  background: 'white'
});

new Vue({
  el: '#app',
  render: h => h(App),
});
