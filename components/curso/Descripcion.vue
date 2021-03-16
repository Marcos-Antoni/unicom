<template>
  <div class="Decripcion_curso">
    <div class="curso_titulo">
      <h2>Curso Calculo 3 - INTRODUCCIÓN</h2>
      <p class="descripcion_p">
        Aprende todo lo necesario para el curso de cálculo 3, te daremos todas
        las fijas, el momento es ahora !
      </p>
      <Puntuacion :votos="250" />
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
/* variables */
:root {
  --tamano-de-fotos-de-contenido: 210px;
  --tamano-de-foto-de-univercidad: 50px;
  --tamano-de-titulo-de-video: 30px;
  --alinear-text: none;
  --width-titulo: 50%;
  --width-descripcion: 70%;
  --margin-left-titulo: 0;
  --quitar-margin-de-h: 0;
  --after-univercidad-top: 28%;
  --after-univercidad-right: -65px;

  @media screen and (max-width: 960px) {
    --width-titulo: 90%;
  }

  @media screen and (max-width: 520px) {
    --tamano-de-titulo-de-video: 27px;
    --width-titulo: 90%;
  }
  @media screen and (max-width: 500px) {
    --alinear-text: center;
    --width-titulo: 90%;
    --width-descripcion: 100%;
    --margin-left-titulo: 20px;
    --quitar-margin-de-h: -20px;
    --after-univercidad-top: 60px;
    --after-univercidad-right: 0px;
  }
  @media screen and (max-width: 471px) {
    --after-univercidad-top: -64px;
    --after-univercidad-right: -44px;
  }
}

/* mixins */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.Decripcion_curso {
  .curso_titulo {
    margin-left: var(--margin-left-titulo);

    h2 {
      font-size: var(--tamano-de-titulo-de-video);
      text-align: var(--alinear-text);
      margin-left: var(--quitar-margin-de-h);
    }

    .descripcion_p {
      position: relative;
      width: var(--width-titulo);
      margin-bottom: 3px;

      &::after {
        @include affter();
        background-image: url(/cursos/academia.svg);
        background-size: var(--tamano-de-foto-de-univercidad);
        width: var(--tamano-de-foto-de-univercidad);
        height: var(--tamano-de-foto-de-univercidad);

        right: var(--after-univercidad-right);
        top: var(--after-univercidad-top);
      }
    }
  }

  .material_del_curso {
    margin-left: 20px;
    margin-top: 20px;
    height: auto;

    h3 {
      margin-bottom: 10px;
      font-size: 25px;
      text-align: var(--alinear-text);
      margin-left: var(--quitar-margin-de-h);
    }

    p {
      width: var(--width-descripcion);
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
