<template>
<div class ="container">
  <div class="row" id="front-banner"> <span>SOX</span> </div>
  <div class="row" id="back-banner"></div>


  <div class="row" id="dash-wrapper"><Dashboard/></div>
</div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  }
}
</script>

<style lang="scss">

#front-banner{
  width: 900px;
  height: 50px;
  position: absolute;
  background-color:#2c3e50;

  span{
    width: fit-content;
    height: fit-content;
    font-size: 35px;
    color: white;
  }

}
#back-banner{
  top:10px;
  bottom: 10px;
  //z-index: 8;
  //max-width: 400px;
  height: 56px;
  width: 900px;
  background-color: #b70c00;
  border-radius: 5px;
}

#dash-wrapper{
  max-width: 900px;

}
body {
  background-color: lightgray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
  font-size: .94em;
}


</style>
