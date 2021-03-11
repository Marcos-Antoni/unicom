<template>
  <div class="usuarisos">
    <v-container>
      <h2 class="h2_usuarios">Tutores <span> famosos</span></h2>
      <Carrusel :datos="listProfesores">
        <template #contenido="{contenido} ">
          <Profesores :profesor="contenido" />
        </template>
      </Carrusel>
    </v-container>
  </div>
</template>

<script>
import Carrusel from "../globales/Carrusel";
import Profesores from "../globales/Profesores";
import { mapState } from "vuex";

export default {
  components: { Carrusel, Profesores },
  computed: {
    ...mapState(["listProfesores"])
  }
};
</script>

<style lang="scss">
@mixin cuadricula {
  height: var(--tamano-de-cuadricula);
  width: var(--tamano-de-cuadricula);
}

@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.usuarisos {
  height: 100%;
  position: relative;

  &::after {
    @include affter();
  }

  .h2_usuarios {
    margin-bottom: 20px;

    span {
      color: #6686ff;
      font-family: "Galano";
    }
  }
}
</style>
