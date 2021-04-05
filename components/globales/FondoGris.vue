<template>
  <div
    class="Descripcion"
    :class="!oof_affters && `on_affters`"
    :style="
      `
      background-image:${img ? img : `none`}
      background:${color ? color : `#fff`}
      `
    "
  >
    <div class="contenido">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: { color: String, img: String, oof_affters: Boolean },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.Descripcion {
  height: 250px;
  width: auto;
  background-size: 100% 100%;
  // background-repeat: no-repeat;
  z-index: 1;
  position: relative;

  display: flex;
  justify-content: center;

  .contenido {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 97%;
  }
}

.on_affters {
  &::after {
    @include affter();
    background-image: url("/figuraIntegracion1.svg");
    width: 75px;
    height: 76px;
    top: 75px;
    left: 0px;
  }

  &::before {
    @include affter();
    background-image: url("/pelotas.svg");
    width: 33px;
    height: 54px;
    top: 75px;
    right: 0;
  }
}
</style>
