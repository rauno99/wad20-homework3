<template>
  <div id="app">
    <router-view /> <!-- Asukoht kus routed valikut näen -->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

html {
  background-color: #0277bd;
}

</style>
