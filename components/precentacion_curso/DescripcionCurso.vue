<template>
  <div class="contenido_del_curso">
    <div class="descripcion_del_curso">
      <h2>Curso Calculo 3</h2>
      <p>
        Aprende todo lo necesario para el curso de cálculo 3, te daremos todas
        las fijas, el momento es ahora !
      </p>
      <Puntuacion :votos="240" />
    </div>

    <ContenedosVideosCursos :curso="curso" class="lista_de_videos_curso" />
  </div>
</template>

<script>
import ContenedosVideosCursos from "../globales/ContenedosVideosCursos";
import Puntuacion from "../globales/Puntuacion";

export default {
  components: { ContenedosVideosCursos, Puntuacion },

  props: { curso: Array }
};
</script>

<style lang="scss">
.contenido_del_curso {
  padding-top: 30px;
  margin-bottom: 20px;

  .descripcion_del_curso {
    margin-bottom: 20px;
    width: 100%;
    p {
      margin-bottom: 5px;
    }
  }

  .lista_de_videos_curso {
    width: 100%;
  }
}
</style>
