<template>
  <div class="container">
    <div class="row" id="front-banner"><span>SOX</span></div>
    <div class="row" id="back-banner"></div>


    <div class="row" id="dash-wrapper">
      <Dashboard/>
    </div>

    <hr style="color: #b70c00">
    <hr style="color: #2c3e50">
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

<style lang="scss" scoped>

#front-banner {
  height: 50px;
  max-width: 900px;
  background-color: #2c3e50;
  border-bottom: 5px solid #b70c00;

  border-radius: 5px;
  //display: table;

  span {
    width: fit-content;
    height: fit-content;
    font-size: 35px;
    color: white;
  }

}

#dash-wrapper {
  max-width: 900px;

}

.container {
  max-width: 900px;
}

</style>
