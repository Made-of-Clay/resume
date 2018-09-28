import Vue from 'vue';

import app from './app';

console.log('main is running');

new Vue({
    el: '#app',
    render: h => h(app),
});
