<template>
  <div class="populares">
    <v-container>
      <form class="formulario-de-populares">
        <v-row>
          <v-col cols="12" md="6" class="formulario-parte-1-populares">
            <v-text-field
              class="input"
              :label="ejemplo_Iput"
              :placeholder="ejemplo_Iput"
              solo
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="formulario-parte-2-populares">
            <div class="rango">
              <input
                class="rango-de-precios"
                type="range"
                min="0"
                max="100"
                value="0"
              />
            </div>
            <div class="select">
              <selectV class="contenido-select" />
            </div>
          </v-col>
        </v-row>
      </form>

      <ListaTargetas class="lista-de-populares" :lista="listPopulares" />
    </v-container>
  </div>
</template>
<script>
import ListaTargetas from "../globales/ListaTargetas";
import selectV from "../globales/selectV";
import { mapState } from "vuex";

export default {
  components: { ListaTargetas, selectV },
  name: "Popular",

  computed: {
    ...mapState(["listPopulares"])
  },

  data() {
    return {
      ejemplo_Iput: "Buscar productos clases o lo que prefieras :)"
    };
  }
};
</script>

<style lang="scss">
@mixin ordenar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.populares {
  width: 100%;
  margin-top: 20px;

  .formulario-de-populares {
    width: 100%;
    height: auto;
    @include ordenar();

    .formulario-parte-1-populares {
      height: 100px;
      @include ordenar;

      .input {
        height: 50%;
        margin-top: -12px;
      }
    }

    .formulario-parte-2-populares {
      height: 100px;
      @include ordenar;

      .rango {
        width: 50%;
        @include ordenar;
        justify-content: flex-end;

        .rango-de-precios {
          position: relative;
          appearance: none;
          width: 90%;
          height: 5px;
          background: #d3d3d3;
          outline: none;
          opacity: 0.7;

          &::-webkit-slider-thumb {
            appearance: none;
            height: var(--tamano-de-pelota-del-rango);
            width: var(--tamano-de-pelota-del-rango);
            border-radius: 50%;
            background-color: #000;
          }

          &:hover {
            opacity: 1;
          }

          &::after {
            @include affter();
            background-image: url(/dolar.svg);
            background-size: var(--tamano-del-dolar-del-rango);
            width: var(--tamano-del-dolar-del-rango);
            height: 26px;
            top: -12px;
            left: -18px;
          }
        }
      }

      .select {
        width: 45%;
        @include ordenar;
      }
    }
  }

  .lista-de-populares {
    padding-top: 20px;
  }
}
</style>
