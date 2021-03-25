<template>
  <div class="carrito">
    <section id="titulo_carrito">
      <TituloCarrito />
    </section>

    <v-row class="contenedor_de_pago_de_carrito">
      <v-col cols="12" md="7">
        <section id="comparas_carrito">
          <ListaDeCompras />
        </section>
      </v-col>

      <v-col cols="12" md="5">
        <v-row>
          <v-col cols="12" sm="6" md="12">
            <section id="Resumen_de_compras">
              <ResumenDeCompras />
            </section>
          </v-col>

          <v-col cols="12" sm="6" md="12">
            <section id="comprer_carrito">
              <PagarCompras />
            </section>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <footer id="pie-de-pagina-carrito">
      <FooterV />
    </footer>
  </div>
</template>

<script>
import ResumenDeCompras from "../components/carrito/ResumenDeCompras";
import ListaDeCompras from "../components/carrito/ListaDeCompras";
import TituloCarrito from "../components/carrito/TituloCarrito";
import PagarCompras from "../components/carrito/PagarCompras";
import FooterV from "../components/header/FooterV";
export default {
  components: {
    TituloCarrito,
    FooterV,
    ListaDeCompras,
    ResumenDeCompras,
    PagarCompras
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-contenedor-de-targetas-de-carrito: 90%;
  --margen-left-de-contenedor-de-targeta-de-carrito: 5%;

  @media screen and (max-width: 500px) {
    --tamano-de-contenedor-de-targetas-de-carrito: 100vw;
    --margen-left-de-contenedor-de-targeta-de-carrito: 0%;
  }
}

/* mixin */

/* animaciones */
@keyframes aparecer {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.carrito {
  max-width: 100vw;
  //   min-height: 100vh;

  #titulo_carrito {
    height: auto;
    z-index: 1;
  }

  .contenedor_de_pago_de_carrito {
    width: var(--tamano-de-contenedor-de-targetas-de-carrito);
    margin-left: var(--margen-left-de-contenedor-de-targeta-de-carrito);
    margin-top: -70px;
    height: auto;
  }

  #pie-de-pagina-carrito {
    height: auto;
    margin-top: 20px;
  }

  #Resumen_de_compras {
    height: auto;
    margin-bottom: -11px;
  }
}
</style>
