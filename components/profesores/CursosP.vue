<template>
  <div class="cursos_de_profesor">
    <div class="contenedor_de_cursos">
      <p class="titulo ulia">tutorías de la ulia</p>
      <ListaTargetas :lista="listPopulares" />
    </div>
    <div class="contenedor_de_cursos">
      <p class="titulo">tutorías para la up</p>
      <ListaTargetas :lista="listPopulares" />
    </div>
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
/* variables */
:root {
  --tamano-de-logo-de-univercidad: 45px;
}

/* mixins */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.cursos_de_profesor {
  .contenedor_de_cursos {
    margin-bottom: 50px;

    .titulo {
      font-size: 25px;
      margin-bottom: 30px;
    }

    .ulia {
      margin-left: 60px;
      position: relative;

      &::after {
        @include affter();
        background-image: url(/univercidades/logo1.svg);
        background-size: cover;
        width: var(--tamano-de-logo-de-univercidad);
        height: var(--tamano-de-logo-de-univercidad);

        left: -60px;
        top: 3px;
      }
    }
  }
}
</style>
