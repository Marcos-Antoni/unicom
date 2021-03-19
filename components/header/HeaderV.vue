<template>
  <header class="arriba">
    <v-row class="contenedor-arriba">
      <v-col cols="12" class="oferta-limitada-header">
        <h2>¡OFERTAS! - Quedan 17 horas con 34 minutos</h2>
      </v-col>

      <v-col cols="2" class="columna-titulo">
        <h1><span class="h1_span">UN</span>icom</h1>
      </v-col>

      <v-col cols="10" class="columnas-login">
        <button
          class="boton login"
          @click="
            () => {
              loguiar();
            }
          "
        >
          Iniciar cecion
        </button>
        <button class="boton registro">
          Regístrate
        </button>
      </v-col>
    </v-row>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loguiar() {
      const { commit } = this.$store;

      commit("on_of_login");
    }
  }
};
</script>

<style lang="scss">
// variables
:root {
  --color-de-oferta-degradado: linear-gradient(
    89.43deg,
    #ff4d00 1.15%,
    #ffb800 76.51%
  );

  --color-boton-registro-amarillo: #ffb800;
  --letra-naranja: #ff4c00;
  --height-header: 50px;

  --letra-header: #000;
  --fondo-header: #000;

  --antes-x: 125px;
  --antes-y: 60%;
  --despues-x: 135px;
  --despues-y: 70%;

  --margen-botones-header: 20px;
  --margen-h1-header: 20px;

  --tamano-de-h1-header: 25px;
  --tamano-de-h2-ofertas-header: 17px;

  @media screen and (max-width: 500px) {
    --margen-botones-header: 1px;
    --margen-h1-header: 5px;
    --antes-x: 100px;
    --despues-x: 110px;
    --tamano-de-h1-header: 21px;
  }

  @media screen and (max-width: 372px) {
    --tamano-de-h2-ofertas-header: 13px;
  }
}

// animaciones

/* @keyframes quitar-colores {
  from {
    color: var(--letra-header);
    background-color: var(--fondo-header);
  }

  to {
    color: var(--fondo-header);
    background-color: var(--letra-header);
  }
} */

// mixin
@mixin pading-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.arriba {
  height: 85px;
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  display: block;
  background: #fff;
  box-shadow: 0 1px 10px #ccc;
  z-index: 15;

  .contenedor-arriba {
    width: 100%;
    margin: 0;

    .col {
      padding-bottom: 0;
    }

    .oferta-limitada-header {
      background: var(--color-de-oferta-degradado);
      height: 35px;
      width: 100vw;
      padding: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        font-size: var(--tamano-de-h2-ofertas-header);
      }
    }

    .columna-titulo {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and(max-width:500px) {
        padding: 0px;
      }

      height: var(--height-header);
      @include pading-0();

      h1 {
        font-size: var(--tamano-de-h1-header);
        margin-left: var(--margen-h1-header);

        .h1_span {
          color: var(--letra-naranja);
          font-family: "Galano";
        }
      }
      .logo {
        padding-left: 10px;
      }
    }

    .columnas-login {
      height: var(--height-header);
      @include pading-0();

      @media screen and(max-width:500px) {
        padding-right: 2px;
      }

      display: flex;
      align-items: center;
      justify-content: flex-end;

      .boton {
        height: var(--antes-y);
        width: var(--antes-x);
        margin-right: var(--margen-botones-header);

        border: none;
        outline: none;

        -webkit-transition-duration: 0.3s;

        &:hover {
          width: var(--despues-x);
          height: var(--despues-y);
        }
      }

      .registro {
        --letra-header: #000;
        --fondo-header: var(--color-boton-registro-amarillo);

        background-color: var(--fondo-header);
        font-family: "Galano";
        font-weight: bold;
        color: var(--letra-header);

        &:hover {
          --letra-header: var(--color-boton-registro-amarillo);
          --fondo-header: #000;
        }

        &:active {
          --letra-header: #000;
          --fondo-header: var(--color-boton-registro-amarillo);
        }
      }

      .login {
        --letra-header: #888888;
        --fondo-header: #fff;

        color: var(--letra-header);
        background-color: var(--fondo-header);

        &:hover {
          --letra-header: #fff;
          --fondo-header: #888888;
        }

        &:active {
          --letra-header: #888888;
          --fondo-header: #fff;
        }
      }
    }
  }
}
</style>
