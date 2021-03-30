<template>
  <div class="descripcion_del_curso">
    <PaginaImgCentradoBlanco
      :fondo="fondo"
      class="contenedor_de_datos_del_curso"
    >
      <v-row class="datos_del_curso">
        <v-col cols="12" md="7">
          <section class="img_del_curso">
            <ImagenDelCurso
              class="img_curso"
              img="/cursos/imagen_del_curso.jpeg"
            />
          </section>
        </v-col>

        <v-col cols="12" md="5">
          <section id="contenedor_de_clases">
            <DescripcionCurso
              class="clases_del_curso"
              :curso="ListaCursoEditada"
            />
          </section>
        </v-col>

        <v-col cols="12" md="7">
          <section id="partes_del_curso">
            <ListaDepartesDelCurso
              class="lista_partes_de_cursos"
              :listaDeClases="ListaCurso"
            />
          </section>
        </v-col>
      </v-row>
    </PaginaImgCentradoBlanco>

    <footer>
      <footer-v />
    </footer>
  </div>
</template>

<script>
import FooterV from "../../../components/header/FooterV.vue";
import ImagenDelCurso from "../../../components/globales/ImagenDelCurso";
import DescripcionCurso from "../../../components/precentacion_curso/DescripcionCurso";
import PaginaImgCentradoBlanco from "../../../components/globales/PaginaImgCentradoBlanco";
import ListaDepartesDelCurso from "../../../components/precentacion_curso/ListaDepartesDelCurso";

/* vue */
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    FooterV,
    ImagenDelCurso,
    DescripcionCurso,
    ListaDepartesDelCurso,
    PaginaImgCentradoBlanco
  },

  data() {
    return {
      fondo: "url(/cursos/fondo.jpeg)"
    };
  },

  computed: {
    ...mapState(["ListaCurso"]),
    ...mapGetters(["ListaCursoEditada"])
  }
};
</script>

<style lang="scss">
// variables
:root {
  --tamano-de-logo-univercidad: 40px;
  --tamano-width-de-descripcion-del-curso: 80%;
  --margen-de-lista-de-partes-de-cursos: -370px;
  --left-de-logo-univercidad: 15%;

  @media screen and (max-width: 960px) {
    --margen-de-lista-de-partes-de-cursos: 0px;
  }
  @media screen and (max-width: 500px) {
    --tamano-width-de-descripcion-del-curso: 100%;
    --left-de-logo-univercidad: 5%;
  }
}

// mixins
@mixin centrar {
  display: flex;
  justify-content: center;
}

@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.descripcion_del_curso {
  .contenedor_de_datos_del_curso {
    .datos_del_curso {
      .img_del_curso {
        @include centrar;
        position: relative;
        margin-top: 20px;

        .img_curso {
          width: var(--tamano-width-de-descripcion-del-curso);

          @media screen and (max-width: 500px) {
            width: 95%;
          }

          &::after {
            @include affter();
            background-image: url(/univercidades/logo2.svg);
            background-size: var(--tamano-de-logo-univercidad);
            width: var(--tamano-de-logo-univercidad);
            height: 75px;
            top: 0;
            left: var(--left-de-logo-univercidad);
          }
        }
      }

      #contenedor_de_clases {
        @include centrar;

        .clases_del_curso {
          width: var(--tamano-width-de-descripcion-del-curso);
        }
      }

      #partes_del_curso {
        @include centrar;

        .lista_partes_de_cursos {
          width: var(--tamano-width-de-descripcion-del-curso);
          margin-top: var(--margen-de-lista-de-partes-de-cursos);
        }
      }
    }
  }

  footer {
    margin-top: 20px;
  }
}
</style>
