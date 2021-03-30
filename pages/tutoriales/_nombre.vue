<template>
  <div class="descripcion_del_tutorial">
    <PaginaImgCentradoBlanco
      :fondo="fondo"
      class="contenedor_de_datos_del_tutorial"
    >
      <v-row class="datos_del_tutorial">
        <v-col cols="12" md="7">
          <section class="img_del_tutorial">
            <ImagenDelCurso
              class="img_tutorial"
              img="/cursos/imagen_del_curso.jpeg"
            />
            <button>Pregunta al tutor</button>
          </section>
        </v-col>

        <v-col cols="12" md="5">
          <section id="descripcion_de_tutorial">
            <DescripcionDeTutorial class="tamano_de_tutoriales" />
          </section>

          <section id="precio_del_tutorial">
            <PrecioDelTutorial class="tamano_de_tutoriales" />
          </section>

          <section id="seleccione_horario_de_tutorial">
            <HorarioDelTutorial class="tamano_de_tutoriales" />
          </section>
        </v-col>

        <v-col cols="12">
          <section id="productos_relacionados">
            <ProductosRelacionados />
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
import FooterV from "../../components/header/FooterV.vue";
import ImagenDelCurso from "../../components/globales/ImagenDelCurso";
import PrecioDelTutorial from "../../components/nombreTutorial/PrecioDelTutorial";
import HorarioDelTutorial from "../../components/nombreTutorial/HorarioDelTutorial";
import ProductosRelacionados from "../../components/nombreTutorial/ProductosRelacionados";
import DescripcionDeTutorial from "../../components/nombreTutorial/DescripcionDeTutorial";

export default {
  components: {
    FooterV,
    ImagenDelCurso,
    PrecioDelTutorial,
    HorarioDelTutorial,
    DescripcionDeTutorial,
    ProductosRelacionados
  },

  data() {
    return {
      fondo: "url(/cursos/fondo.jpeg)"
    };
  },

  computed: {}
};
</script>

<style lang="scss">
// variables
:root {
  --tamano-width-de-descripcion-del-tutorial: 97%;

  @media screen and (max-width: 500px) {
    --tamano-width-de-descripcion-del-tutorial: 100%;
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

.descripcion_del_tutorial {
  .contenedor_de_datos_del_tutorial {
    width: auto;
    height: auto;

    .datos_del_tutorial {
      width: auto;
      height: auto;

      .tamano_de_tutoriales {
        width: var(--tamano-width-de-descripcion-del-tutorial);
      }

      .img_del_tutorial {
        @include centrar;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-top: 20px;

        .img_tutorial {
          width: 80%;

          @media screen and (max-width: 500px) {
            width: 95%;
          }

          &::before {
            bottom: 25px;
          }
        }

        button {
          margin-top: 20px;
          width: 80%;
          height: 40px;
          background-color: var(--color-de-fonde-boton-gris);
          font-size: 18px;

          transition-duration: 0.3s;

          &:hover {
            font-size: 19px;
            background-color: var(--color-de-fonde-boton-gris-seleccionado);
          }

          &:active {
            font-size: 17px;
            background-color: var(--color-de-fonde-boton-gris);
          }
        }
      }

      #descripcion_de_tutorial {
        height: auto;
        @include centrar;
      }

      #precio_del_tutorial {
        height: auto;
        margin-top: 20px;
        @include centrar();
      }

      #seleccione_horario_de_tutorial {
        height: auto;
        margin-top: 20px;
        @include centrar();
      }

      #productos_relacionados {
        margin-top: 30px;
      }
    }
  }

  footer {
    margin-top: 20px;
  }
}
</style>
