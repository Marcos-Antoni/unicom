<template>
  <div class="principal">
    <section id="inicio" class="contenedor">
      <Inicio class="contenedor" />
    </section>
    <section id="mas-vendidios">
      <Popular class="contenedor" />
    </section>
    <section id="resientes">
      <Resientes class="contenedor" />
    </section>
    <section id="profesores-destacados">
      <profesoresDestacados class="contenedor" />
    </section>
    <section id="categoria">
      <Categoria class="contenedor" />
    </section>
    <section id="desarroyadores">
      <Promociones class="contenedor" />
    </section>
    <footer id="pie-de-pagina">
      <footer-v />
    </footer>
  </div>
</template>

<script>
import Inicio from "../components/inicio/Inicio";
import Popular from "../components/inicio/Popular";
import FooterV from "../components/header/FooterV.vue";
import Resientes from "../components/inicio/Resientes";
import Categoria from "../components/inicio/Categoria";
import Promociones from "../components/inicio/Promociones";
import profesoresDestacados from "../components/inicio/profesoresDestacados";

export default {
  components: {
    Inicio,
    Popular,
    profesoresDestacados,
    Resientes,
    Categoria,
    Promociones,
    FooterV
  },

  head: {
    title: "unicom-frontend"
  },

  created() {}
};
</script>

<style lang="scss">
.principal {
  height: 100%;
  background: var(--color);
  position: relative;

  margin-top: 20px;

  #inicio {
    height: 70vh;
    margin-bottom: 100px;
  }
  #mas-vendidios {
    height: auto;
  }
  #profesores-destacados {
    height: auto;
    margin-bottom: 25px;
  }
  #resientes {
    margin-top: 50px;
    height: auto;
    margin-bottom: 25px;
  }
  #categoria {
    height: auto;
    margin-bottom: 75px;
  }
  #desarroyadores {
    height: auto;
  }
  #pie-de-pagina {
    height: auto;
    width: 100%;
  }
}
</style>
