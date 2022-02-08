<template>

  <div id="wrapper">
    <div class="up" v-if="stateFinal">
      <div class="small-column-grid">
        <div class="small-column" v-if="stateFinal">
          <Matchup/>
        </div>
        <div class="small-column">
          <PlayVideo/>
        </div>
      </div>
      <div v-if="stateFinal" class="small-column">
        <StrikeZone/>
      </div>
      <div v-if="data" class="small-column">
        <BaseballField/>
      </div>
    </div>

  </div>
</template>


<script>
import {mapState} from "vuex";
import PlayVideo from "@/components/PlayVideo";
import StrikeZone from "@/components/StrikeZone";
import BaseballField from "@/components/BaseballField";
import Matchup from "@/components/Matchup";

export default {
  name: "dashboard",
  computed: mapState(['data', 'stateFinal']),
  components: {
    BaseballField,
    StrikeZone,
    PlayVideo,
    Matchup
  },
  created() {
    this.$store.dispatch('loadData');
  }
};
</script>


<style lang="scss" scoped>
@import 'src/styles/dashboard';
</style>
