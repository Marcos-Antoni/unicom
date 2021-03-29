<template>
  <div class="contenedor_blanco" :class="scroll && `scroll`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    scroll: Boolean
  }
};
</script>

<style lang="scss">
.contenedor_blanco {
  background: #fff;
  padding: 10px;
  width: 100%;
  box-shadow: #ccc 0px 0px 20px;
  z-index: 10;
}

.scroll {
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
    height: 10px;
    width: 100%;

    &:hover,
    &:active {
      background-color: #bebebe;
    }
  }
}
</style>
