<template>
  <div class="descripcion_del_curso">
    <FondoGris :img="fondo" />

    <div class="centrar_contenedor">
      <ContenedorBlanco class="contenedor_de_contenido">
        <v-row class="datos_del_curso">
          <v-col cols="12" md="7">
            <section class="img_del_curso">
              <img src="/cursos/imagen_del_curso.jpeg" alt="" />
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
      </ContenedorBlanco>
    </div>

    <footer>
      <footer-v />
    </footer>
  </div>
</template>

<script>
import FooterV from "../../../components/header/FooterV.vue";
import FondoGris from "../../../components/globales/FondoGris";
import ContenedorBlanco from "../../../components/globales/ContenedorBlanco";
import DescripcionCurso from "../../../components/precentacion_curso/DescripcionCurso";
import ListaDepartesDelCurso from "../../../components/precentacion_curso/ListaDepartesDelCurso";

/* vue */
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    FooterV,
    FondoGris,
    ContenedorBlanco,
    DescripcionCurso,
    ListaDepartesDelCurso
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
  --tamano-de-univercidad: 80px;
  --tamano-width-de-descripcion-del-curso: 80%;
  --margen-de-lista-de-partes-de-cursos: -370px;
  --left-de-univercidad: 5%;
  --left-de-logo-univercidad: 15%;

  @media screen and (max-width: 960px) {
    --margen-de-lista-de-partes-de-cursos: 0px;
  }
  @media screen and (max-width: 500px) {
    --tamano-width-de-descripcion-del-curso: 100%;
    --left-de-univercidad: -2%;
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
  position: relative;

  .fondo {
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
  }

  .centrar_contenedor {
    height: auto;
    @include centrar;

    .contenedor_de_contenido {
      width: 95%;
      border-radius: 20px;
      margin-top: -150px;

      @media screen and (max-width: 500px) {
        width: 100%;
      }

      .datos_del_curso {
        .img_del_curso {
          @include centrar;
          position: relative;
          margin-top: 20px;

          img {
            width: var(--tamano-width-de-descripcion-del-curso);
            height: 400px;
            border-radius: 10px;
            background-size: cover;

            @media screen and (max-width: 500px) {
              width: 95%;
            }
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

          &::before {
            @include affter();
            background-image: url(/cursos/academia.svg);
            background-size: var(--tamano-de-univercidad);
            width: var(--tamano-de-univercidad);
            height: var(--tamano-de-univercidad);
            bottom: -15px;
            left: var(--left-de-univercidad);
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
  }

  footer {
    margin-top: 20px;
  }
}
</style>
