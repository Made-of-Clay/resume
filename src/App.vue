<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <header class="main-header main-container-layout">
        <h1 class="md-title site-name">Adam Leis</h1>
      </header>
    </md-toolbar>

    <div class="main-body main-container-layout">
      <div>
        <p>if touch screen - use hamburger</p>
        <p>if !touch && screen width < 900 - use hamburger</p>
        <p>if !touch && screen width > 900 - use fancy thing</p>
      </div>
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <md-icon>home</md-icon>
      <md-icon class="md-primary">home</md-icon>
      <md-icon class="md-accent">home</md-icon>
      <md-icon class="md-warn">home</md-icon>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>

  </div><!-- End #app -->
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.site-name {
  flex: 1;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.main-container-layout {
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
}

.main-header {

}

.main-body {

}
</style>
