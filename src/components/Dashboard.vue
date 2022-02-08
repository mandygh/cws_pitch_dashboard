<template>

  <div class="container" v-if="stateFinal">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="small-column">
            <Matchup/>
          </div>
        </div>
        <div class="row">
          <div class="small-column">
            <PlayVideo/>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="small-column" id="pitch-location">
          <StrikeZone/>
        </div>
      </div>
      <div class="col">
        <div class="small-column">
          <BaseballField/>
        </div>
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
  computed: mapState(['stateFinal']),
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


<style lang="scss" scoped></style>
