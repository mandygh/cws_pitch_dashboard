<template>
  <div class="col-title">
    <div class="text-highlight">Field Output</div>

  </div>
  <canvas id="field"></canvas>

  <div>
    <ul class="horizontal-list">
      <li><span class="label">EV:</span>
        <div class="horizontal-text-value">{{ extraData.ev }}</div>
      </li>
      <li><span class="label">LA:</span>
        <div class="horizontal-text-value">{{ extraData.la }}</div>
      </li>
      <li><span class="label">Hit type:</span>
        <div class="horizontal-text-value">{{ extraData.hitType }}</div>
      </li>
      <li><span class="label">Result:</span>
        <div class="horizontal-text-value">{{ data.gameEvent.event[1].typ }}</div>
      </li>
    </ul>
  </div>

  <!-- Canvas -->

  <!-- Add Rectangle Button -->
</template>

<script>
import {mapState} from "vuex";


export default {
  name: 'Baseball-field',
  computed: mapState(['data', 'extraData']),

  setup() {
    return {
      message: 'Baseball field',
      vueCanvas: null,
      rectWidth: 50
    }

  },
  mounted() {
    let c = document.getElementById("field");
    c.height = 600;
    c.width = 700;
    let ctx = c.getContext("2d");
    ctx.translate(350, 370)
    this.vueCanvas = ctx;

    this.drawRect()


  },
  methods: {
    drawRect() {

      this.vueCanvas.clearRect(0, 0, 400, 200);
      const landingSpot = this.data.ballPositionalData.HitSegment.LandingData.Position
      this.drawLines(5, 130, landingSpot.X, -landingSpot.Y)

      let statistics = this.data.measurements.statistics;
      let map = {};

      for (let i = 0; i < statistics.length; i++) {

        let data = statistics[i];

        if (data.type_id == 1059) {
          map[data.target_id] = {"distance": data.value}
        }
        if (data.type_id == 1061) {
          map[data.target_id]["angle"] = data.value
        }
      }

      //this.drawPoint(5, 130, 5, 1, 3 * Math.PI)

      for (const key in map) {

        let coords = this.getCoordinates(map[key].distance, map[key].angle)
        //console.log(coords);
        this.drawPoint((coords[0]), -1 * coords[1], 5, 1, 3 * Math.PI)
      }


    },
    drawPoint(x, y, r, startAngle, endAngle) {
      //console.log("Plotting "+ x + " " + y)
      this.vueCanvas.beginPath();
      this.vueCanvas.arc(x, y, r, startAngle, endAngle);
      this.vueCanvas.strokeStyle = 'black';
      this.vueCanvas.fillStyle = 'black';
      this.vueCanvas.fill();
      this.vueCanvas.setLineDash([]);
      this.vueCanvas.stroke();
    },

    drawBall(x, y, r, startAngle, endAngle) {
      // console.log("Plotting "+ x + " " + y)
      this.vueCanvas.beginPath();
      this.vueCanvas.arc(x, y, r, startAngle, endAngle);
      this.vueCanvas.strokeStyle = 'red';
      this.vueCanvas.fillStyle = 'red';
      this.vueCanvas.fill();
      this.vueCanvas.setLineDash([]);
      this.vueCanvas.stroke();
    },

    drawLines(moveToX, moveToY, lineToX, lineToY) {
      this.vueCanvas.beginPath();
      this.vueCanvas.moveTo(moveToX, moveToY);
      this.vueCanvas.lineTo(lineToX, lineToY);
      this.vueCanvas.strokeStyle = 'red';
      this.vueCanvas.lineWidth = 3;
      //this.vueCanvas.setLineDash(this.dashPattern);
      this.vueCanvas.stroke();
    },


    getCoordinates(p, a) {
      //console.log("Distance "+ p + " Angle" + a)

      if (a < 0) {
        return [p * Math.cos(Math.PI / 2 - a), p * Math.sin(Math.PI / 2 - a)];
      } else {
        return [-p * Math.cos(Math.PI / 2 - a), p * Math.sin(Math.PI / 2 - a)];
      }
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

.horizontal-elems {
  display: flex;
}

</style>



