<template>
  <transition
    :enter-active-class="`${tipo_de_animacion}_de_entrada`"
    :leave-active-class="`${tipo_de_animacion}_de_salida`"
  >
    <div v-show="on_off" class="PantallaNegra" @click="salir">
      <div
        class="contenedor-Pantalla"
        :style="
          `
      width: ${x};
      height: ${y};
      `
        "
        @click="noSalir"
      >
        <div class="salir">
          <button @click="salir"></button>
        </div>

        <slot> </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["x", "y", "on_off", "tipo_de_animacion"],

  data() {
    return {
      comprobante: true,
      animacion1: "entrada1",
      animacion2: "entrada2",

      promesa: new Promise(res =>
        setTimeout(() => {
          console.log("funciona");
          res();
        }, 1000)
      )
    };
  },

  async created() {
    await this.promesa;
  },

  methods: {
    salir() {
      if (this.comprobante) {
        this.$emit("salir");
      }
      this.comprobante = true;
    },

    async noSalir() {
      this.comprobante = !this.comprobante;
    }
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --lugar-de-entrada: 250vh;
  --tamano-de-boton-de-salir-pantalla-negra: 30px;
  --tamano-de-contenedor-de-salir-pantalla-negra: 50px;
}
/* animaciones */
// color
@keyframes color {
  from {
    background: rgba(0, 0, 0, 0);
  }

  to {
    background: rgba(0, 0, 0, 0.432);
  }
}
// alto
@keyframes bajar {
  from {
    margin-top: var(--lugar-de-entrada);
  }

  to {
    margin-top: 0%;
  }
}
@keyframes subir {
  from {
    margin-bottom: 0%;
  }

  to {
    margin-bottom: var(--lugar-de-entrada);
  }
}
// lados
@keyframes lados {
  from {
    width: 0;
  }

  to {
    width: 500px;
  }
}

.arriba_de_entrada {
  animation-duration: 0.25s;
  animation-name: color;
  background: #0000006e;

  .contenedor-Pantalla {
    animation-duration: 0.25s;
    animation-name: bajar;
  }
}

.arriba_de_salida {
  animation: color reverse 0.25s;
  background: #00000000;

  .contenedor-Pantalla {
    animation-duration: 0.25s;
    animation-name: subir;
  }
}

.lados_de_entrada {
  animation-duration: 0.25s;
  animation-name: color;
  background: #0000006e;

  .contenedor-Pantalla {
    animation-duration: 0.25s;
    animation-name: lados;
  }
}

.lados_de_salida {
  animation: color reverse 0.25s;
  background: #00000000;

  .contenedor-Pantalla {
    animation: lados reverse 0.25s;
  }
}

/* mixn */
@mixin centrar {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* inicio */
.PantallaNegra {
  height: 100vh;
  width: 100vw;
  background: #0000006e;

  position: fixed;
  top: 0;

  @include centrar();

  z-index: 20;

  .contenedor-Pantalla {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    align-items: center;

    .salir {
      position: absolute;
      width: var(--tamano-de-contenedor-de-salir-pantalla-negra);
      height: var(--tamano-de-contenedor-de-salir-pantalla-negra);

      top: 5px;
      right: 20px;

      @include centrar();

      button {
        background-image: url(/salir.svg);
        background-size: cover;
        width: var(--tamano-de-boton-de-salir-pantalla-negra);
        height: var(--tamano-de-boton-de-salir-pantalla-negra);

        transition-duration: 0.3s;

        &:hover {
          --tamano-de-boton-de-salir-pantalla-negra: 40px;
        }

        &:active {
          --tamano-de-boton-de-salir-pantalla-negra: 30px;
        }
      }
    }
  }
}
</style>
