<template>
  <div class="lista_videos">
    <ul v-for="(parte, numero) in curso" :key="numero" class="lista_videos_ul">
      <li class="lista_video_titulo">{{ parte.titulo }}</li>
      <li
        v-for="(video, numero) in parte.videos"
        :key="numero"
        class="lista_videos_contenido"
        :class="
          `
          ${video.disponible ? `chequar` : `candado`}
          ${video.porsentage == `tarea` ? `tarea` : `reproducir`}
        `
        "
      >
        {{ video.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    curso: Array
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --color-cursos: #f3f3f3;
  --color-cursos-seleccionado: #d3d3d3;
  --tamano-de-boton-de-reproducuir: 40px;
  --tamano-de-boton-de-chequesito: 30px;
  --tamano-de-boton-de-candado: 30px;
}

/* mixins */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.lista_videos {
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  width: 90%;

  .lista_videos_ul {
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .lista_video_titulo {
      font-weight: bold;
      font-family: "Galano";
      margin-bottom: 5px;
      margin-top: 5px;
    }

    .chequar {
      &::before {
        @include affter();
        background-image: url(/chequear.svg);
        background-size: var(--tamano-de-boton-de-chequesito);
        width: var(--tamano-de-boton-de-chequesito);
        height: var(--tamano-de-boton-de-chequesito);

        right: 10px;
        top: 25%;
      }
    }

    .candado {
      &::before {
        @include affter();
        background-image: url(/candado.svg);
        background-size: var(--tamano-de-boton-de-candado);
        width: var(--tamano-de-boton-de-candado);
        height: var(--tamano-de-boton-de-candado);

        right: 10px;
        top: 25%;
      }
    }

    .reproducir {
      padding-left: 75px;
      padding-bottom: 2px;

      &::after {
        @include affter();
        background-image: url(/reproducir.svg);
        background-size: var(--tamano-de-boton-de-reproducuir);
        width: var(--tamano-de-boton-de-reproducuir);
        height: var(--tamano-de-boton-de-reproducuir);

        left: 10px;
      }
    }

    .tarea {
      padding-left: 10px;
      padding-bottom: 0;

      &::after {
        @include affter();
        background-color: var(--color-morado);
        width: 5px;
        height: 100%;

        left: 0px;
      }
    }

    .lista_videos_contenido {
      background-color: var(--color-cursos);
      height: 52px;
      margin-bottom: 20px;
      cursor: pointer;
      position: relative;
      font-size: 18px;

      display: flex;
      align-items: center;

      &:hover {
        background-color: var(--color-cursos-seleccionado);
        font-size: 19px;
      }
    }

    li {
      width: 90%;
    }
  }
}
</style>
