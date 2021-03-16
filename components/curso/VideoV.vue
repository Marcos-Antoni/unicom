<template>
  <div class="reproductor" id="rep">
    <client-only class="contenedor-vimeo">
      <vimeo-player
        :key="1"
        ref="player"
        class="vimeo"
        :video-id="video"
        :player-width="width"
        :player-height="height"
        :events-to-emit="[]"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: "76979871",
      width: 0,
      height: 0
    };
  },

  created() {
    if (process.client) {
      const rep = document.querySelector("#rep");
      const width = rep.clientWidth;
      const height = rep.clientHeight;

      this.width = width;
      this.height = height;
      window.addEventListener("resize", this.tamano);
    }
  },

  methods: {
    tamano() {
      const vimeo = document.querySelector(".vimeo iframe");
      const rep = document.querySelector("#rep");
      const width = rep.clientWidth;
      const height = rep.clientHeight;

      vimeo.width = width;
      vimeo.height = height;
    }
  },

  computed: {}
};
</script>

<style lang="scss">
:root {
  --tamano-video-height: 400px;
  --tamano-video-width: 100%;

  @media screen and (max-width: 500px) {
    --tamano-video-height: 200px;
  }
}
.reproductor {
  width: var(--tamano-video-width);
  height: var(--tamano-video-height);
}
</style>
