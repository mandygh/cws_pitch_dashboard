<template>

  <div id="wrapper">w
    <div id="up">
      <div id="left" class="small-column">
        <div class="" v-if="data"> asdas {{ data.Play }}</div>
      </div>
      <div id="middle" class="small-column">
        <div class="" v-if="data"> asdas {{ data.Play }}</div>
      </div>
      <div id="right" class="small-column">
        <div class="" v-if="data"> asdas {{ data.Play }}</div>
      </div>
    </div>
    <div id="down">
      <PlayVideo/>
    </div>
  </div>
</template>


<script>
import {mapState} from "vuex";
import PlayVideo from "@/components/PlayVideo";

export default {
  name: "dashboard",
  computed: mapState(['data']),
  components: {
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
