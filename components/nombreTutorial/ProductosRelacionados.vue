<template>
  <div class="contenedor_productos_relacionados">
    <h2>Productos relacionados</h2>
    <ListaTargetas class="lista-de-populares" :lista="listPopulares" />
  </div>
</template>

<script>
import ListaTargetas from "../globales/ListaTargetas";
import { mapState } from "vuex";

export default {
  components: { ListaTargetas },

  computed: {
    ...mapState(["listPopulares"])
  }
};
</script>

<style lang="scss">
.contenedor_productos_relacionados {
}
</style>
