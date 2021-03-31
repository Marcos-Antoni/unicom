<template>
  <div
    class="sub_conten_de_boton_carrito"
    :style="activar_menu_compras && `right:523px`"
  >
    <div class="conten_de_boton_carrito" @click="mover">
      <button class="boton_carrito"></button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["activar_menu_compras"])
  },

  methods: {
    mover() {
      this.$store.commit("on_of_menu_carrito");
    }
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-boto-de-carrito-de-pantalla: 40px;
  --tamano-de-fondo-de-carrito-de-pantalla: 60px;
  --tamano-de-contenedor-de-boton-carrito: 80px;
}

/* mixin */
@mixin centrar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sub_conten_de_boton_carrito {
  position: fixed;
  @include centrar();

  height: var(--tamano-de-contenedor-de-boton-carrito);
  width: var(--tamano-de-contenedor-de-boton-carrito);

  transition-duration: 0.25s;

  right: 25px;
  bottom: 50px;
  z-index: 15;

  @media screen and (max-width: 500px) {
    right: 0px;
    bottom: 25px;
  }

  .conten_de_boton_carrito {
    background-color: var(--color-de-fonde-boton-azul);
    height: var(--tamano-de-fondo-de-carrito-de-pantalla);
    width: var(--tamano-de-fondo-de-carrito-de-pantalla);
    border-radius: 50%;
    cursor: pointer;

    @include centrar();

    transition-duration: 0.3s;

    .boton_carrito {
      background-image: url(/carrito/carrito.svg);
      background-size: cover;
      width: var(--tamano-de-boto-de-carrito-de-pantalla);
      height: var(--tamano-de-boto-de-carrito-de-pantalla);

      filter: invert(1);

      transition-duration: 0.3s;
    }

    &:hover {
      --tamano-de-boto-de-carrito-de-pantalla: 50px;
      --tamano-de-fondo-de-carrito-de-pantalla: 70px;
      background-color: #ffffff3f;
      border: solid 2px #ccc;

      .boton_carrito {
        filter: invert(0);
      }
    }

    &:active {
      --tamano-de-boto-de-carrito-de-pantalla: 35px;
      border: solid 5px #ccc;
    }
  }
}
</style>
