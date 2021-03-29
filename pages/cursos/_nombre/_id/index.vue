<template>
  <div class="curso">
    <FondoGris class="fondo" :color="color" />
    <div id="contenedor">
      <div class="sub-contenedor">
        <v-row class="contenedor-cols">
          <v-col class="col1" cols="12" md="8">
            <section class="video">
              <VideoV />
            </section>
          </v-col>
          <v-col class="col2" cols="12" md="4">
            <section class="carrusel_de_videos">
              <ListaDeVideos :curso="ListaCurso" />
            </section>
          </v-col>
          <v-col cols="12" md="8" class="col3">
            <section class="descripcion_del_curso">
              <Descripcion />
            </section>
          </v-col>
        </v-row>
      </div>
    </div>

    <!--  <section id="datos">
      <Datos :datos="dataSet" />
    </section>-->

    <footer>
      <footer-v />
    </footer>
  </div>
</template>

<script>
import VideoV from "../../../../components/curso/VideoV";
import Datos from "../../../../components/globales/Datos";
import FooterV from "../../../../components/header/FooterV.vue";
import FondoGris from "../../../../components/globales/FondoGris";
import Descripcion from "../../../../components/curso/Descripcion";
import ListaDeVideos from "../../../../components/curso/ListaDeVideos";
import { mapState } from "vuex";

export default {
  components: {
    Datos,
    VideoV,
    FooterV,
    FondoGris,
    ListaDeVideos,
    Descripcion
  },

  data() {
    return {
      id: this.$route.params.id,
      color: "#363636"
    };
  },

  created() {
    if (process.client) {
      window.onscroll = e => {
        // console.log(window.scrollY);
      };
    }
  },

  computed: {
    ...mapState({
      ListaCurso: "ListaCurso"
    })
  },

  methods: {}
};
</script>

<style lang="scss">
/* variables */
:root {
  --margen-col-1-top: 120px;
  --margen-col-2-top: 120px;
  --tamano-de-affter: 97%;
  --left-after: 20px;
  --tamano-de-seccion-de-cursos: 850px;
  --tamano-video-height-col1: 500px;

  @media screen and (max-width: 1170px) {
    --tamano-de-affter: 100%;
    --left-after: 0;
  }
  @media screen and (max-width: 960px) {
    --margen-col-1-top: 60px;
    --margen-col-2-top: 0px;
    --tamano-de-seccion-de-cursos: 550px;
  }
  @media screen and (max-width: 500px) {
    --margen-col-1-top: 0px;
    --tamano-video-height-col1: 250px;
  }
}

/* mixins */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.curso {
  position: relative;
  margin: 0;

  .fondo {
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    margin-top: var(--margen-contraleo);
  }

  #contenedor {
    position: relative;
    height: auto;
    width: 100%;
    max-width: 100vw;
    z-index: 3;

    display: flex;
    justify-content: center;

    .sub-contenedor {
      width: 97%;
      height: auto;

      .contenedor-cols {
        max-width: 100vw;
        .col1 {
          height: var(--tamano-video-height-col1);
          z-index: 5;

          @media screen and (max-width: 500px) {
            margin-top: 60px;
            padding-right: 0;
          }

          .video {
            height: auto;
            margin-top: var(--margen-col-1-top);
          }
        }

        .col2 {
          z-index: 5;
          height: var(--tamano-de-seccion-de-cursos);
          .carrusel_de_videos {
            height: auto;
            margin-top: var(--margen-col-2-top);
          }
        }

        .col3 {
          height: auto;
          margin-top: -250px;
          .descripcion_del_curso {
            height: auto;
          }
        }
      }

      &::after {
        @include affter();
        background-color: var(--color-negro-de-videos);
        width: var(--tamano-de-affter);
        height: 500px;
        left: var(--left-after);
        top: 60px;
        border-radius: 10px;

        z-index: 1;

        @media screen and (max-width: 960px) {
          background-color: #00000000;
        }
      }
    }
  }

  /* #datos {
    margin-top: -39px;
    height: auto;
    max-width: 100vw;
  } */

  footer {
    position: relative;
    margin-top: 20px;
  }
}
</style>
