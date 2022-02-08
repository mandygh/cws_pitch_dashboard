<template>
  <div id="banner">    <p id="text">White Sox</p>
  </div>
  <Dashboard/>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">

body {background-color:lightgray;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: .94em;

  #banner {
    background-color: #2c3e50;
    color: azure;
    height: 30px;
    text-align: left;
    p{
      color: white;
      padding: 5px 0px 0px 30px;
    }



  }



}


</style>
