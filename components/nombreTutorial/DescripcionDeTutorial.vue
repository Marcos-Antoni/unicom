<template>
  <div class="contenedor_descripcion_de_tutorial">
    <h2>Tutoria Historia y globalización</h2>
    <p class="descripcion_de_tutorial">
      Delicioso pan con palta, verduras y pollo para que acompañe tu tarde de
      estudio y no te quedes con hambre, disponible y con el sabor de casa :)
    </p>

    <Puntuacion :votos="240" />
  </div>
</template>

<script>
import Puntuacion from "../globales/Puntuacion";

export default {
  components: { Puntuacion }
};
</script>

<style lang="scss">
.contenedor_descripcion_de_tutorial {
  margin-top: 25px;

  .descripcion_de_tutorial {
    margin-bottom: 5px;
  }
}
</style>
