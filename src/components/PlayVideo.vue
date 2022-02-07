<template>
  <div>
    <video-player :options="videoOptions"/>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  name: "VideoExample",
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        fluid:true,
        sources: [
          {
            src:
                "https://user-images.githubusercontent.com/4574699/122467083-b0446280-cf7f-11eb-8de4-fafc31252f87.mp4",
            type: "video/mp4"
          }
        ]
      }
    };
  }
};
</script>



