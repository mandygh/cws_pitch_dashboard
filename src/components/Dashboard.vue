<template>

  <div id="wrapper">
    <div id="up">
      <div id="left" class="small-column">
        <div class="" v-if="data"> asdas {{ data.Play }}</div>
      </div>
      <div id="middle" v-if="data" class="small-column"> <StrikeZone/> </div>
      <div id="right" v-if="data" class="small-column"> <BaseballField/> </div>
    </div>
    <div id="down">
      <PlayVideo/>
    </div>
  </div>
</template>


<script>
import {mapState} from "vuex";
import PlayVideo from "@/components/PlayVideo";
import StrikeZone from "@/components/StrikeZone";
import BaseballField from "@/components/BaseballField";

export default {
  name: "dashboard",
  computed: mapState(['data']),
  components: {
    BaseballField,
    StrikeZone,
    PlayVideo
  },
  created() {
    this.$store.dispatch('loadData');
  }
};
</script>


<style lang="scss" scoped>
@import 'src/styles/dashboard';
</style>
