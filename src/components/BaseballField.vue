<template>
  <div id="field" >{{ message}}</div>
  <!-- Canvas -->

  <!-- Add Rectangle Button -->
</template>

<script>
import {mapState} from "vuex";


export default {
  name: 'Baseball-field',
  computed: mapState(['data']),

  setup() {
    return {
      message: 'Baseball field',
      vueCanvas: null,
      rectWidth: 50
    }

  },
  mounted() {
   // var c = document.getElementById("d");
    //var ctx = c.getContext("2d");
    //this.vueCanvas = ctx;
    //this.drawRect()
    

  },
  methods: {
    drawRect() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);

      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();

      this.vueCanvas.beginPath();
      this.vueCanvas.arc(59, 50, 2, 0, 2 * Math.PI);
      this.vueCanvas.stroke();

    },
    addWidth() {
      this.rectWidth += 10
      this.drawRect()
    },
    subWidth() {
      this.rectWidth -= 10
      this.drawRect()
    }
  }

}
</script>

<style>

#field {
  background-image:  url("../images/baseballField.png");
  height: 250px;
  width: 300px;
  background-size: cover;
  background-position: center;
}

</style>



