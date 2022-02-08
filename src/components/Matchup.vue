<template>
  <div class="col-title"> <div class="text-highlight">Matchup</div></div>

  <div class="matchup">

    <div>
      <ul>
        <li><span class="label">Pitcher:</span>  {{ pitcher.fullName }}</li>
        <li><span class="label">Position:</span>  {{ pitcher.primaryPosition.name }}</li>
        <li><span class="label">Pitch Hand:</span> {{ data.gameEvent.pitch_hand }}</li>
      </ul>
    </div>
    <hr>
    <div>
      <ul>
        <li><span class="label">Batter:</span> {{ batter.fullName }}</li>
        <li><span class="label">Position:</span>  {{ batter.primaryPosition.name }}</li>
        <li><span class="label">Stance:</span>  {{ data.gameEvent.bat_side}}</li>
      </ul>
    </div>

  </div>
  <!-- Canvas -->

  <!-- Add Rectangle Button -->
</template>

<script>
//import Vue from "vue";

import {mapState} from "vuex";
import {get} from "axios";

const statsAPI = "https://statsapi.mlb.com/api/v1/people/"


export default {
  name: 'Matchup',
  computed: mapState(['data', 'pitcher', 'batter']),

  setup() {
    return {
      message: 'Baseball field',
    }

  },
  mounted() {
    this.getPitcherInfo()
    this.getBatterInfo()


  },
  methods: {
    getPitcherInfo() {


      get(statsAPI + this.data.gameMetaData.FPitcherID).then(result => {
        this.pitcher = result.data.people[0]
        console.log(this.pitcher)
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },

    getBatterInfo() {

      get(statsAPI + this.data.gameMetaData.FBatterID).then(result => {
        this.batter = result.data.people[0]
        console.log(this.batter)
      }).catch(error => {
        throw new Error(`API ${error}`);
      });

    }

  }

}
</script>

<style>

#field {
  background-image: url("../images/baseballField.png");
  height: 250px;
  width: 300px;
  background-size: cover;
  background-position: center;
}

.matchup {
  display: flex;
  grid-gap: 1rem;
}

</style>



