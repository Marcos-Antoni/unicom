<template>
  <div class="Decripcion_curso">
    <div class="curso_titulo">
      <h2>Curso Calculo 3 - INTRODUCCIÓN</h2>
      <p>
        Aprende todo lo necesario para el curso de cálculo 3, te daremos todas
        las fijas, el momento es ahora !
      </p>
      <Puntuacion />
    </div>
    <div class="material_del_curso">
      <h3>Recursos de la clase</h3>
      <p>
        El Airbus A380 —denominado A3XX durante gran parte de su etapa de
        desarrollo— es un avión tetrarreactor fabricado por la empresa
        paneuropea Airbus, subsidiaria del grupo EADS. Se trata de la primera
        aeronave con dos cubiertas a lo largo de todo su fuselaje, a diferencia
        del Boeing 747 en el que, aunque también posee dos, la cubierta superior
        abarca solamente la parte delantera del fuselaje. Posee una capacidad
        máxima de 853 pasajeros —en una hipotética configuración de alta
        densidad de clase turista—, convirtiéndose
      </p>

      <img
        :src="`/cursos/documento${i}.png`"
        class="imagenes_del_curso"
        v-for="i in 2"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import Puntuacion from "../globales/Puntuacion.vue";
export default {
  components: { Puntuacion },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
:root {
  --tamano-de-fotos-de-contenido: 210px;
}

.Decripcion_curso {
  .curso_titulo {
    h2 {
      font-size: 30px;
    }

    p {
      width: 50%;
      margin-bottom: 3px;
    }
  }

  .material_del_curso {
    margin-left: 20px;
    margin-top: 20px;
    height: auto;

    h3 {
      margin-bottom: 10px;
      font-size: 25px;
    }

    p {
      width: 70%;
      margin-bottom: 25px;
    }

    .imagenes_del_curso {
      background-size: var(--tamano-de-fotos-de-contenido);
      width: 140px;
      height: var(--tamano-de-fotos-de-contenido);
      margin-left: 30px;
    }
  }
}
</style>
