<template>
  <div>
    <div class="row">
      <div class="col-title">
        <div class="text-highlight">Pitch location</div>
      </div>
    </div>

    <div class="row">
      <canvas id="ca"></canvas>
    </div>

    <div class="row">
      <ul>
        <li><span class="label">Pitch type:</span> {{ data.gameEvent.pitch_type }}</li>
        <li><span class="label">Velocity:</span> {{ extraData.velo }}</li>
        <li><span class="label">Spin rate:</span> {{ extraData.spin }}</li>
      </ul>
    </div>

  </div>


</template>

<script>
import {mapState} from "vuex";


export default {
  name: 'Strike-zone',
  computed: mapState(['data', 'extraData']),

  setup() {
    return {
      message: 'Vue + ss API',
      vueCanvas: null,
      rectWidth: 50,
      dashPattern: [1, 5],
    }

  },
  mounted() {
    let c = document.getElementById("ca");
    c.height = 200;
    c.width = 200;
    let ctx = c.getContext("2d");
    ctx.translate(-50, 0) //Decrease to left, Increase Up
    this.vueCanvas = ctx;
    this.drawRect()


  },
  methods: {
    drawRect() {

      const startingX = 100;
      const startingY = 20;
      const outerZoneAdded = 15

      let endX = startingX + 100
      let endY = startingY + 120

      // CLEAR CANVAS
      this.vueCanvas.clearRect(0, 50, 0, 300);
      // STRIKE ZONE BORDER
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(startingX, startingY, 100, 120);
      this.vueCanvas.strokeStyle = 'lightblue'
      this.vueCanvas.stroke();

      // VERTICAL LINES
      this.drawLines(startingX + 33, startingY - outerZoneAdded, startingX + 33, endY + outerZoneAdded)
      this.drawLines(startingX + 66, startingY - outerZoneAdded, startingX + 66, endY + outerZoneAdded)

      // HORIZONTAL LINES
      this.drawLines(startingX - outerZoneAdded, startingY + 40, endX + outerZoneAdded, startingY + 40)
      this.drawLines(startingX - outerZoneAdded, startingY + 80, endX + outerZoneAdded, startingY + 80)

      // SET BALL POSITION
      this.setBall(startingX, endX, startingY, endY)

    },
    calcDistFromCenter(first, end) {
      return (end - first) / 2;

    },
    getPointPosition(xMiddle, realXCenter, percentage) {
      let steps = xMiddle * percentage / 100;
      return realXCenter + steps

    },

    drawLines(moveToX, moveToY, lineToX, lineToY) {
      this.vueCanvas.beginPath();
      this.vueCanvas.moveTo(moveToX, moveToY);
      this.vueCanvas.lineTo(lineToX, lineToY);
      this.vueCanvas.strokeStyle = 'black';
      this.vueCanvas.setLineDash(this.dashPattern);
      this.vueCanvas.stroke();
    },

    setBall(startingX, endX, startingY, endY) {
      let xMiddle = this.calcDistFromCenter(startingX, endX)
      let yMiddle = this.calcDistFromCenter(startingY, endY)
      let realXCenter = startingX + xMiddle;
      let realYCenter = startingY + yMiddle;

      //Get pitch location
      function getStrikeZoneInfo(data) {
        return data.type_id == 1126;
      }

      let strikeZoneData = this.data.measurements.statistics.filter(getStrikeZoneInfo)[0];
      // DRAW BALL POSITION
      this.drawBall(this.getPointPosition(xMiddle, realXCenter, strikeZoneData.relative_x_pct), this.getPointPosition(yMiddle, realYCenter, strikeZoneData.relative_z_pct * -1), 3, 0, 2 * Math.PI);

    },

    drawBall(x, y, r, startAngle, endAngle) {
      this.vueCanvas.beginPath();
      this.vueCanvas.arc(x, y, r, startAngle, endAngle);
      this.vueCanvas.strokeStyle = 'red';
      this.vueCanvas.fillStyle = 'red';
      this.vueCanvas.fill();
      this.vueCanvas.setLineDash([]);
      this.vueCanvas.stroke();
    }

  }

}
</script>

<style lang="scss" scoped>
.col-title {
  margin-top: 10px;
}
</style>



