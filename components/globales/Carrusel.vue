<template>
  <vue-glide :breakpoints="objeto" class="carrusel">
    <vue-glide-slide
      v-for="(dato, numero) in datos"
      :key="numero"
      class="dato_de_lista"
    >
      <div class="contenedor_de_dato">
        <slot name="contenido" v-bind:contenido="dato"> {{ numero }}</slot>
      </div>
    </vue-glide-slide>

    <template slot="control">
      <button
        class="boton_moverce_carrusel_menor boton_moverce_carrusel"
        data-glide-dir="<"
      >
        <v-icon class="icono">mdi-chevron-left</v-icon>
      </button>

      <button
        class="boton_moverce_carrusel_mallor boton_moverce_carrusel"
        data-glide-dir=">"
      >
        <v-icon class="icono">mdi-chevron-right</v-icon>
      </button>
    </template>
  </vue-glide>
</template>

<script>
export default {
  data() {
    return {
      objeto: {
        1904: {
          perView: 4
        },
        960: {
          perView: 2
        },
        600: {
          perView: 1
        }
      }
    };
  },
  props: { datos: Array },
  methods: {}
};
</script>

<style lang="scss">
@mixin posicion {
  position: absolute;
  top: 63px;
}

.carrusel {
  position: relative;

  .dato_de_lista {
    .contenedor_de_dato {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .boton_moverce_carrusel {
    outline: none;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    .icono {
      color: #000;
    }
  }

  .boton_moverce_carrusel_menor {
    @include posicion();
    left: var(--posicion-de-boton-de-carrusel);
  }

  .boton_moverce_carrusel_mallor {
    @include posicion();
    right: var(--posicion-de-boton-de-carrusel);
  }
}
</style>
