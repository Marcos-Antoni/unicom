<template>
  <div class="integracion">
    <v-container>
      <h2>Nuevos <span>Lanzamientos </span></h2>
      <ListaTargetas class="nuevos" :lista="listNuevos" />
    </v-container>
  </div>
</template>

<script>
import ListaTargetas from "../globales/ListaTargetas";
export default {
  components: { ListaTargetas },
  computed: {
    listNuevos() {
      return this.$store.getters.listaNuevos;
    }
  }
};
</script>

<style lang="scss">
.integracion {
  padding-left: 30px;
  position: relative;

  h2 {
    span {
      color: #da0a0a;
      font-family: "Galano";
    }
  }

  .nuevos {
    margin-top: 10px;
  }
}
</style>
