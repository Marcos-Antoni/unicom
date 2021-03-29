<template>
  <div class="contenedor_de_material">
    <ContenedosVideosCursos :curso="curso" />
    <button class="boton-preguntas">hola que hace :v</button>
  </div>
</template>

<script>
import ContenedorBlanco from "../globales/ContenedorBlanco";
import ContenedosVideosCursos from "../globales/ContenedosVideosCursos";

export default {
  components: { ContenedorBlanco, ContenedosVideosCursos },

  props: {
    curso: Array
  },
  created() {
    if (process.client) {
      /*  const contenido_curso = Array.from(
        document.querySelectorAll(".lista_videos_contenido")
      );
      contenido_curso.map(e => {
        console.log(e);
      }); */
    }
  }
};
</script>

<style lang="scss">
/* variables */
:root {
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

.contenedor_de_material {
  .boton-preguntas {
    margin-top: 50px;
    width: var(--tamano-contenido);
    height: 50px;
    background-color: #f3f3f3;
    font-family: "Galano";
    font-size: 18px;

    border: none;
    outline: none;
    transition: background-color 0.2s;
    transition: font-size 0.2s;

    &:hover {
      background-color: #dfdfdf;
      font-size: 19px;
    }

    &:active {
      background-color: #fafafa;
      font-size: 17px;
    }
  }
}
</style>
