<template>
  <div class="puntuacion">
    <div class="contenedor_de_estrellas" @mouseleave="no_toca_estrella()">
      <button
        v-for="i in 5"
        :key="i"
        class="boton_estrella"
        :style="
          `background-image: url(${
            verPuntuacion >= i
              ? `/estrella_ensendida.svg`
              : `/estrella_apagada.svg`
          }) ;`
        "
        @mouseenter="tocar_estrella(i)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      puntuacion: 3,
      activar_estrellas: false
    };
  },

  methods: {
    tocar_estrella(numero_de_estrella) {
      this.activar_estrellas = numero_de_estrella;
    },

    no_toca_estrella() {
      this.activar_estrellas = false;
    }
  },

  computed: {
    verPuntuacion() {
      if (this.activar_estrellas) {
        return this.activar_estrellas;
      } else {
        return this.puntuacion;
      }
    }
  }
};
</script>

<style lang="scss">
:root {
  --tamano-de-estrella: 30px;
  --tamano-de-estrella-seleccionada: 35px;
  --tiempo-animacion: 0.3s;
}
.puntuacion {
  .contenedor_de_estrellas {
    width: 175px;
    height: 40px;

    display: flex;
    align-items: center;

    .boton_estrella {
      background-size: var(--tamano-de-estrella);
      width: var(--tamano-de-estrella);
      height: var(--tamano-de-estrella);
      margin-left: 5px;
      border: none;
      outline: none;

      transition: width var(--tiempo-animacion);
      transition: height var(--tiempo-animacion);
      transition: background-size var(--tiempo-animacion);

      &:hover {
        background-image: url(/estrella_ensendida.svg);

        background-size: var(--tamano-de-estrella-seleccionada);
        width: var(--tamano-de-estrella-seleccionada);
        height: var(--tamano-de-estrella-seleccionada);
        margin-left: 0px;
      }
    }
  }
}
</style>
