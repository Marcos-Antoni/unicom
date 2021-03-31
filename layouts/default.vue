<template>
  <div class="contenedor">
    <HeaderV class="header" />

    <IniciarCecion />
    <SubMenuDecompras />

    <BotonDeCarrito />
    <nuxt class="nuxt" />
  </div>
</template>

<script>
import HeaderV from "../components/header/HeaderV";
import IniciarCecion from "../components/header/IniciarCesion";
import BotonDeCarrito from "../components/carritoAnclado/BotonDeCarrito";
import SubMenuDecompras from "../components/carritoAnclado/SubMenuDecompras";
import { mapState } from "vuex";

export default {
  components: { HeaderV, IniciarCecion, BotonDeCarrito, SubMenuDecompras },

  computed: {
    ...mapState(["login", "activar_menu_compras"])
  }
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

/* estilos */
* {
  @include contenido();
  h1 {
    @include titulo;
  }
  h2 {
    @include titulo;
  }
  h3 {
    @include titulo;
  }
  list-style-type: none;

  button {
    border: none;
    outline: none;
    font-family: "Galano";
  }

  // .row {
  //   max-width: 100vw;
  // }
}
.titulo {
  @include titulo;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  div {
    height: 100%;
    div {
      height: 100%;
      .contenedor {
        height: 100%;
        width: 100%;
      }
    }
  }
}

.contenedor {
  position: relative;

  .nuxt {
    margin: 0;
    height: 90%;
    z-index: 1;

    transition-duration: 0.5s;
  }

  .header {
    width: 100vw;
    transition-duration: 0.5s;
  }
}
</style>
