import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'

Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'indigo',
  accent: 'amber',
  warn: 'red',
  background: 'white'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
