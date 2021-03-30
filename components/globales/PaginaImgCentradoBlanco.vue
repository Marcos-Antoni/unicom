<template>
  <div class="contenedor_pagina_img_centrado_blanco">
    <FondoGris :img="fondo" />

    <div class="centrar_contenedor">
      <ContenedorBlanco class="contenedor_de_contenido">
        <slot></slot>
      </ContenedorBlanco>
    </div>
  </div>
</template>

<script>
import FondoGris from "./FondoGris";
import ContenedorBlanco from "./ContenedorBlanco";

export default {
  components: {
    FondoGris,
    ContenedorBlanco
  },

  props: ["fondo"]
};
</script>

<style lang="scss">
// mixins
@mixin centrar {
  display: flex;
  justify-content: center;
}

.contenedor_pagina_img_centrado_blanco {
  height: auto;

  .centrar_contenedor {
    height: auto;
    @include centrar;

    .contenedor_de_contenido {
      width: 95%;
      border-radius: 20px;
      margin-top: -150px;

      @media screen and (max-width: 500px) {
        width: 100%;
        box-shadow: none;
      }
    }
  }
}
</style>
