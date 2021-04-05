<template>
  <div class="cuenta_de_profesor">
    <section id="portada_de_profesor">
      <PortadaDeProfesor :img="img" class="portada_profesor" />
    </section>

    <v-row class="contenedor_de_contenido">
      <v-col md="3" sm="5" cols="12">
        <section id="verificaciones_del_profesor">
          <VerificasionP />
        </section>
      </v-col>

      <v-col md="9" sm="7" cols="12">
        <section id="Informacion_del_profesor">
          <InformacionP />
        </section>

        <section id="cursos_dados">
          <CursosP />
        </section>
      </v-col>
    </v-row>

    <footer>
      <FooterV />
    </footer>
  </div>
</template>

<script>
import FooterV from "../../components/header/FooterV";
import CursosP from "../../components/profesores/CursosP";
import InformacionP from "../../components/profesores/InformacionP";
import VerificasionP from "../../components/profesores/VerificasionP";
import PortadaDeProfesor from "../../components/profesores/PortadaDeProfesor";

export default {
  components: {
    PortadaDeProfesor,
    VerificasionP,
    InformacionP,
    FooterV,
    CursosP
  },

  data() {
    return {
      img: "url(/profesores/imagenDeInicio.png)"
    };
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --padding-a-los-lados: 2vw;
  --margen-top-de-profesor: 58px;

  @media screen and (max-width: 599px) {
    --padding-a-los-lados: 0;
    --margen-top-de-profesor: 0;
  }
}

.cuenta_de_profesor {
  #portada {
    height: auto;
  }

  .contenedor_de_contenido {
    max-width: 100vw;
    margin-top: var(--margen-top-de-profesor);
    margin-left: 0;
    padding: 0px var(--padding-a-los-lados);
    height: auto;

    #verificaciones_del_profesor {
      height: auto;
    }

    #Informacion_del_profesor {
      height: auto;
      margin-bottom: 75px;
    }

    #cursos_dados {
      height: auto;
    }
  }

  footer {
    margin-top: 20px;
  }
}
</style>
