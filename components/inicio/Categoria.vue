<template>
  <div class="categoria">
    <v-container>
      <h2>Categorias <span>conocidas</span></h2>
      <v-row class="lista-de-categorias">
        <v-col
          cols="12"
          sm="6"
          md="3"
          class="unidad-de-categorias"
          v-for="(categoria, numero) in listCategorias"
          :key="numero"
        >
          <v-card
            class="targeta-unidad-categoria"
            :class="!categoria.disponible && `no-siponible`"
            :style="`background-image: url(${categoria.img});`"
          >
            <div
              class="nombre-categoria"
              :style="
                `border-left: solid 8px ${colores[categoria.univercidad - 1]};`
              "
            >
              <p>{{ categoria.nombre }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["listCategorias"])
  },

  data() {
    return {
      colores: ["#ffb800", "#0028bf", "#ff4d00"]
    };
  }
};
</script>

<style lang="scss">
@mixin cuadricula {
  background-image: url(/fondo1.svg);
  height: 100px;
  width: 50px;
}

@mixin affter {
  position: absolute;
  display: block;
  content: "";
  z-index: 1;
}

@mixin flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.categoria {
  position: relative;

  h2 {
    span {
      font-family: "Galano";
      color: #ff4d00;
    }
  }

  &::after {
    @include affter;
    @include cuadricula;
    top: 50px;
    left: 0%;
  }

  &::before {
    @include affter;
    @include cuadricula;
    bottom: 0;
    right: -11px;
  }

  .lista-de-categorias {
    margin-top: 20px;

    .unidad-de-categorias {
      height: 300px;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      z-index: 3;

      .targeta-unidad-categoria {
        width: 90%;
        height: 100%;
        position: relative;
        background-size: 100% 100%;
        box-shadow: -2px -1px 12px #0000001a;

        .nombre-categoria {
          position: absolute;
          bottom: 0;
          background-color: #fff;
          height: 50px;
          width: 90%;
          border-radius: 0;

          @include flex();

          p {
            font-family: "Galano";
          }
        }
      }

      .no-siponible {
        &::after {
          @include affter;
          content: "No disponible por cobid-19";
          font-family: "Galano";
          font-size: 12px;
          background-color: #ffff;
          width: 90%;
          height: 25px;
          right: 0;
          top: -25px;
          box-shadow: -2px -1px 12px #0000001a;

          @include flex;
        }
      }
    }
  }
}
</style>
