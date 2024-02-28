<template>
  <div id="app">
    <!-- <h1>versão inicial</h1> -->
    <header-component />
    <content-component />
    <footer-component />
  </div>
</template>

<script>

 import HeaderComponent from './components/Template/HeaderComponent.vue';
 import ContentComponent from './components/Template/ContentComponent.vue';
 import FooterComponent from './components/Template/FooterComponent.vue';
 
 export default {
  name: "App",
  components: {
  HeaderComponent, 
  ContentComponent, 
  FooterComponent}
 }

</script>

<style scoped>

  * {
    font-family: sans-serif;
  }
  body {
    margin: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 70px 1fr 100px;
    grid-template-areas: 'header header header'
                         'content content content'
                         'footer footer footer';
  }

</style>