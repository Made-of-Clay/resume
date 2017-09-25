<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <header class="main-header main-container-layout">
        <h1 class="md-title site-name">AdamLeis.com</h1>
      </header>
    </md-toolbar>

    <router-view></router-view>
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
