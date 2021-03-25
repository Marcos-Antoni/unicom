<template>
  <FondoGris class="titulo_carrito" :color="`#00000000`">
    <template #default>
      <div class="contenedor_titulo">
        <h2>Finaliza tu compra :D</h2>
      </div>
    </template>
  </FondoGris>
</template>

<script>
import FondoGris from "../globales/FondoGris";
export default {
  components: { FondoGris }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-div-titulo-carrito: 90%;
  --tamono-de-titulo-carrito: 30px;

  @media screen and (max-width: 500px) {
    --tamano-de-div-titulo-carrito: 80%;
  }
  @media screen and (max-width: 404px) {
    --tamono-de-titulo-carrito: 22px;
  }
}

/* mixin */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.titulo_carrito {
  margin-top: -30px;

  .contenedor_titulo {
    width: var(--tamano-de-div-titulo-carrito);
    position: relative;

    display: flex;
    align-items: center;
    justify-content: left;

    h2 {
      font-size: var(--tamono-de-titulo-carrito);
      margin-bottom: 30px;
    }

    &::after {
      @include affter;
      background-color: var(--color-de-linea-de-carrito);
      width: 100%;
      height: 2px;
      top: 150px;
      left: 0;

      animation: aparecer;
      animation-duration: 1s;
    }
  }
}
</style>
