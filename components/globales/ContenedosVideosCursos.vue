<template>
  <ContenedorBlanco class="lista_videos" scroll>
    <ul v-for="(parte, numero) in curso" :key="numero" class="lista_videos_ul">
      <li class="lista_video_titulo">{{ parte.titulo }}</li>
      <li
        v-for="(video, numero) in parte.videos"
        :key="numero"
        class="lista_videos_contenido"
        :class="
          `
          ${video.porsentage == `tarea` ? `tarea` : `reproducir`}
        `
        "
        :style="` --porsentage-de-video:${video.porsentage}%`"
      >
        {{ video.nombre }}
        <img
          :src="video.disponible ? `/chequear.svg` : `/candado.svg`"
          :class="video.disponible ? `chequar` : `candado`"
        />
        <div
          v-if="video.porsentage != `tarea`"
          class="porsentage_de_video"
          :style="`width:${video.porsentage}%`"
        ></div>
      </li>
    </ul>
  </ContenedorBlanco>
</template>

<script>
import ContenedorBlanco from "./ContenedorBlanco";

export default {
  components: { ContenedorBlanco },

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
  --tamano-contenido: 90%;

  @media screen and (max-width: 1170px) {
    --tamano-contenido: 100%;
  }
}

/* mixins */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.lista_videos {
  color: #000;
  border-radius: 5px 10px;
  width: var(--tamano-contenido);
  height: 608px;

  @media screen and (max-width: 960px) {
    box-shadow: none;
    max-height: 160px;
  }

  .lista_videos_ul {
    margin-bottom: 10px;

    transition-duration: 0.3s;

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
      position: absolute;

      background-size: var(--tamano-de-boton-de-chequesito);
      width: var(--tamano-de-boton-de-chequesito);
      height: var(--tamano-de-boton-de-chequesito);

      right: 10px;
      top: 25%;
    }

    .candado {
      position: absolute;
      background-size: var(--tamano-de-boton-de-candado);
      width: var(--tamano-de-boton-de-candado);
      height: var(--tamano-de-boton-de-candado);

      right: 10px;
      top: 25%;
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

      .porsentage_de_video {
        position: absolute;
        height: 2px;
        background-color: #1c8635;

        bottom: 0;
        left: 0;
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
      width: 93%;
      transition-duration: 0.3s;
    }
  }
}
</style>
