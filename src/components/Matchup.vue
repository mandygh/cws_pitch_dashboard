<template>
  Matchup
  <div class="matchup" v-if="stateFinal">

    <div>
      <ul>
        <li>Pitcher: {{ pitcher.fullName }}</li>
        <li>Position: {{ pitcher.primaryPosition.name }}</li>
        <li>Pitch hand: {{ data.gameMetaData.FThrows }}</li>
      </ul>
    </div>

    <hr>

    <div>
      <ul>
        <li>Batter: {{ batter.fullName }}</li>
        <li>Position: {{ batter.primaryPosition.name }}</li>
        <li>Stance: {{ data.gameMetaData.FStance }}</li>
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
  computed: mapState(['data', 'pitcher', 'batter', 'stateFinal']),

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


ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.matchup {
  display: flex;
  grid-gap: 1rem;
}

</style>



