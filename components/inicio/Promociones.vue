<template>
  <v-container class="promocion" fluid>
    <v-container>
      <h2>Algunas <span>promociones</span></h2>

      <v-row class="contenedor-list-promociones">
        <v-col
          cols="12"
          sm="6"
          class="targeta"
          v-for="fondo in fondos"
          :key="fondo"
        >
          <v-card
            class="contenedor-de-targeta"
            :style="`background-image:url(${fondo})`"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fondos: ["/promocones/fondo1.svg", "/promocones/fondo2.svg"]
    };
  }
};
</script>

<style lang="scss">
:root {
  --imagenes: auto;
  --height: 250px;

  @media screen and (max-width: 845px) {
    --imagenes: 100%;
    --height: 150px;
  }
}

@mixin boton {
  font-family: "Galano";
  font-weight: bold;
}

@mixin flex {
  display: flex;
  justify-content: center;
}

.promocion {
  margin-bottom: 10px;

  h2 {
    span {
      font-family: "Galano";
      color: var(--color-azul);
    }
  }

  .contenedor-list-promociones {
    margin-top: 20px;

    .targeta {
      @include flex();

      .contenedor-de-targeta {
        width: 400px;
        height: var(--height);
        background-size: 100% var(--imagenes);
      }
    }
  }
}
</style>
