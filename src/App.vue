<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title site-name header-button">
        <a href="/" class="site-name__link">AdamLeis.com</a>
      </h1>
      <!-- TODO: consider adding portfolio search -->
      <!-- portfolio-search here? -->

      <!-- TODO: add functionality to buttons -->
      <!-- TODO: add dialog content that shows for contact/about me -->
      <md-button>
        <md-icon>mail</md-icon>
        <span class="button-text">Contact</span>
      </md-button>
      <md-button>
        <md-icon>info</md-icon>
        <span class="button-text">About Me</span>
      </md-button>
    </md-toolbar>

    <my-portfolio></my-portfolio>

    <div id="contact-dialog" class="dialog-content"></div>
    <div id="about-dialog" class="dialog-content"></div>
  </div><!-- End #app -->
</template>
<!--

-->
<script>
import Portfolio from './Portfolio.component.vue';

export default {
  name: 'app',
  components: {
    'my-portfolio': Portfolio
  },
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
  line-height: 2;
}
.site-name__link {
  color: white !important;
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
  display: flex;
}

.main-body {

}
.button-text {
  display: none;
}
@media screen and (min-width: 500px) {
  .button-text {
    display: inline-block;
  }
}
@media screen and (max-width: 400px) {
  .md-button {
    min-width: 40px;
    padding: 0 0.25em;
  }
}
</style>
