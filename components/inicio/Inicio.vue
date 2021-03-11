<template>
  <div class="inicio">
    <v-row no-gutters class="contenedor-columnas">
      <v-col cols="12" md="6" class="columna1">
        <div class="titulo">
          <h2>
            Tu solucion <span class="morado1">Univercitaria</span> <br />Para
            <span class="morado2">todos</span>
          </h2>
          <p>
            Disponible a tus horas y donde prefieras
          </p>
        </div>

        <v-form class="formulario ">
          <v-text-field
            class="input"
            :label="ejemplo_Iput"
            :placeholder="ejemplo_Iput"
            solo
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-form>

        <div class="univercidades">
          <img
            v-for="i in 3"
            :src="`/univercidades/univercidad${i}.svg`"
            :key="i"
            class="img-univercidades"
            width="125px"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Inicio",
  data() {
    return {
      /* priemra-bista */
      ejemplo_Iput: "Busca tu curso"
    };
  }
};
</script>

<style lang="scss">
/* mixins */
@mixin centro {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.inicio {
  position: relative;
  height: auto;

  &::after {
    @include affter();
    background-image: url(/fondo1.svg);
    width: 50px;
    height: 93px;
    bottom: 0;
  }

  &::before {
    @include affter();
    background-image: url(/inicio/mas.svg);
    background-size: var(--tamano-de-mas-de-inicio);
    width: var(--tamano-de-mas-de-inicio);
    height: var(--tamano-de-mas-de-inicio);
    top: 15px;
    left: 50%;
  }

  .contenedor-columnas {
    height: 100%;
    position: relative;

    .columna1 {
      @include centro();
      justify-content: center;
      z-index: 3;

      .titulo {
        @include centro();
        width: 90%;
        height: auto;

        p {
          width: var(--tamano-de-titulo-e-input);
          -webkit-text-stroke: 0.5px #fff;
          font-size: 18px;
          font-weight: bold;
        }

        h2 {
          width: var(--tamano-de-titulo-e-input);
          font-size: var(--tamano-de-titulo-de-inicio);
          line-height: 40px;
          -webkit-text-stroke: 1px #fff;
          .morado1 {
            color: var(--color-morado);
          }

          .morado2 {
            color: var(--color-morado-2);
          }
        }

        span {
          font-family: "Galano";
        }
      }

      .formulario {
        @include centro();
        position: relative;
        height: auto;
        width: 90%;
        margin-top: 20px;

        .input {
          width: var(--tamano-de-titulo-e-input);
          .v-input__control input {
            max-width: 70%;
          }
        }

        .select-formulario {
          width: 30%;
        }
      }

      .univercidades {
        display: flex;
        justify-content: space-between;
        height: auto;
        width: 90%;
        margin-top: -40px;
      }
    }

    &::after {
      @include affter();
      background-image: url(/inicio/personas.svg);
      background-size: var(--tamano-de-img-de-inicio);
      width: var(--tamano-de-img-de-inicio);
      height: var(--tamano-de-img-de-inicio);
      right: var(--margen-de-img-de-inicio);
      z-index: 1;
    }
  }
}
</style>
