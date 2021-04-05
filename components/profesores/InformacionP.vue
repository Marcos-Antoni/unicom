<template>
  <div class="informacion_de_profesor">
    <div class="info_sobre_estudiantes">
      <h2>Este profesor tine una alta tasa de alumnos satisfechos</h2>
    </div>

    <ContenedorBlanco class="info_sobre_profesor">
      <h3 class="titulo_de_profesor">Informacion sobre tutor</h3>

      <p class="contenido_de_profesor">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        aliquid? Blanditiis qui dolores asperiores distinctio aut, autem sequi,
        ut expedita explicabo porro quod tempore placeat nisi sit earum vero
        consequatur! Id possimus ut mollitia voluptatem dolores, delectus
        expedita itaque laudantium rem, officia doloremque atque quis neque
        omnis quasi dolorem at?
      </p>
    </ContenedorBlanco>
  </div>
</template>

<script>
import ContenedorBlanco from "../globales/ContenedorBlanco";
export default {
  components: { ContenedorBlanco }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-signo-de-almiracion: 28px;
  --margen-de-affter-de-sigono-de-almiracion: 35px;
  --top-de-signo-de-almiracion: 5px;

  --tamano-letra-de-h2-profesor-informacion: 18px;
  --displey-de-sigono-de-almiracion: block;

  @media screen and (max-width: 960px) {
    --displey-de-sigono-de-almiracion: none;
  }

  @media screen and (max-width: 599px) {
    --displey-de-sigono-de-almiracion: block;
    --tamano-letra-de-h2-profesor-informacion: 14px;
    --top-de-signo-de-almiracion: 3.5px;
    --tamano-de-signo-de-almiracion: 25px;
    --margen-de-affter-de-sigono-de-almiracion: 1%;
  }

  @media screen and (max-width: 468px) {
    --displey-de-sigono-de-almiracion: none;
  }

  @media screen and (max-width: 400px) {
    --displey-de-sigono-de-almiracion: block;
    --margen-de-affter-de-sigono-de-almiracion: 3%;
    --top-de-signo-de-almiracion: 24px;
  }
}

/* mixins */
@mixin affter {
  position: absolute;
  display: var(--displey-de-sigono-de-almiracion);
  content: "";
}

.informacion_de_profesor {
  .info_sobre_estudiantes {
    width: 100%;
    height: auto;
    padding: 5px 0;
    margin-bottom: 25px;
    position: relative;

    background: var(--color-azul);
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      @include affter();
      background-image: url(/interrogacion.svg);
      background-size: cover;
      width: var(--tamano-de-signo-de-almiracion);
      height: var(--tamano-de-signo-de-almiracion);
      left: var(--margen-de-affter-de-sigono-de-almiracion);
      top: var(--top-de-signo-de-almiracion);
    }

    h2 {
      font-size: var(--tamano-letra-de-h2-profesor-informacion);
      text-align: center;
    }
  }

  .info_sobre_profesor {
    padding: 15px 30px;
    border-radius: 15px;

    .titulo_de_profesor {
      font-size: 17px;
      margin-bottom: 5px;
    }

    .contenido_de_profesor {
      font-size: 15px;
    }
  }
}
</style>
