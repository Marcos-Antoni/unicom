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
        @click="click_estrella(i)"
      ></button>
    </div>
    <p class="votos_de_puntuacion">{{ votos }} {{ calificacion }}</p>
  </div>
</template>

<script>
export default {
  props: {
    votos: Number
  },

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

    click_estrella(numero_de_estrella) {
      this.puntuacion = numero_de_estrella;
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
    },

    calificacion() {
      if (this.votos <= 1) {
        return "calificación";
      } else {
        return "calificaciones";
      }
    }
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-estrella: 30px;
  --tamano-de-estrella-seleccionada: 35px;
  --tiempo-animacion: 0.3s;
}

.puntuacion {
  display: flex;
  align-items: flex-end;

  .votos_de_puntuacion {
    margin-left: 10px;
  }

  .contenedor_de_estrellas {
    width: 185px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .boton_estrella {
      background-size: var(--tamano-de-estrella);
      width: var(--tamano-de-estrella);
      height: var(--tamano-de-estrella);
      // margin-left: 5px;
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
      &:active {
        --tamano-de-estrella-seleccionada: 30px;
      }
    }
  }
}
</style>
