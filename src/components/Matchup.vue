<template>
  <div class="row">
    <div class="col-title">
      <div class="text-highlight">Matchup</div>
    </div>
  </div>
  <div id="matchup">
    <div class="column">
      <ul>
        <li><span class="label">Pitcher: </span>{{ pitcher.fullName }}</li>
        <li><span class="label">Position:</span> {{ pitcher.primaryPosition.name }}</li>
        <li><span class="label">Pitch Hand:</span> {{ data.gameEvent.pitch_hand }}</li>
      </ul>
    </div>
    <hr>
    <div class="column">
      <ul>
        <li><span class="label">Batter:</span> {{ batter.fullName }}</li>
        <li><span class="label">Position:</span> {{ batter.primaryPosition.name }}</li>
        <li><span class="label">Stance:</span> {{ data.gameEvent.bat_side }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Matchup',
  computed: mapState(['data', 'pitcher', 'batter'])
}
</script>

<style lang="scss" scoped>

#matchup {
  display: inline-flex;
  grid-gap: 10px;
  padding: 1px;
}

</style>



