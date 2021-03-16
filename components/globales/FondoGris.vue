<template>
  <div class="Descripcion" :style="`background:${color ? color : `#fff`}`">
    <div class="contenido">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: ["color"],

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
  width: 100%;
  max-width: 100vw;
  background-color: #f8f8f8;
  z-index: 1;

  display: flex;
  justify-content: center;

  &::after {
    @include affter();
    background-image: url("/figuraIntegracion1.svg");
    width: 75px;
    height: 250px;
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

  .contenido {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 97%;
  }
}
</style>
