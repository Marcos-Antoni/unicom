<template>
  <div class="curso">
    <FondoGris class="fondo" :color="color" />
    <div id="contenedor">
      <div class="sub-contenedor">
        <v-row>
          <v-col class="col1" cols="8">
            <section class="video">
              <VideoV />
            </section>
          </v-col>
          <v-col class="col2" cols="4">
            <section class="carrusel_de_videos">
              <ListaDeVideos :curso="ListaCurso" />
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
import VideoV from "../../../components/curso/VideoV";
import Datos from "../../../components/globales/Datos";
import FooterV from "../../../components/header/FooterV.vue";
import FondoGris from "../../../components/globales/FondoGris";
import ListaDeVideos from "../../../components/curso/ListaDeVideos";
import { mapState } from "vuex";

export default {
  components: {
    Datos,
    VideoV,
    FooterV,
    FondoGris,
    ListaDeVideos
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
      listPopulares: "listPopulares",
      ListaCurso: "ListaCurso"
    })
  },

  methods: {}
};
</script>

<style lang="scss">
/* variables */
:root {
  --margen-top: 60px;
}

/* mixins */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}
.curso {
  color: #fff;
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
      width: 96%;
      height: auto;
      position: relative;

      .col1 {
        padding-right: 0;
        z-index: 5;

        .video {
          height: auto;
          margin-top: var(--margen-top);
        }
      }

      .col2 {
        padding-left: 0;
        z-index: 5;

        .carrusel_de_videos {
          height: auto;
          margin-top: var(--margen-top);
        }
      }

      &::after {
        @include affter();
        background-color: #131313;
        width: 100%;
        height: 500px;
        left: 3px;
        top: 15px;
        border-radius: 10px;

        z-index: 1;
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
