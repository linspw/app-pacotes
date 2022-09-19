<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './pages/home-page.vue';
// import TravelCard from './modules/travels/travel-card.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    // TravelCard,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
