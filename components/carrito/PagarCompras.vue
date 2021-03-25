<template>
  <div class="pagar_compra">
    <h2 class="h2_compra_de_carrito">Pagar</h2>

    <ContenedorBlanco class="metodo_de_pago_del_carrito">
      <template #default>
        <div class="tipo_de_pago">
          <img
            class="img_de_tipo_de_pago"
            src="/carrito/mercado_pago.svg"
            alt=""
          />
        </div>

        <div class="total_a_pagar">
          <p class="precio_total">S/{{ precio_de_la_compra_total }}</p>
        </div>

        <div class="pagar_la_compra">
          <button>Comprar</button>
        </div>
      </template>
    </ContenedorBlanco>
  </div>
</template>

<script>
import ContenedorBlanco from "../globales/ContenedorBlanco";
import { mapState } from "vuex";

export default {
  components: { ContenedorBlanco },
  computed: {
    ...mapState(["precio_de_la_compra_total"])
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-img-de-pago: 45%;
  --color-borde-boton-pagar: #ccc;
  --color-letra-boton-pagar: #fff;
  --color-fondo-boton-pagar: #1640fd;
}

/* mixin */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

@mixin centrar {
  display: flex;
  justify-content: center;
}

@mixin tamano-estandar-de-pago {
  width: 100%;
  height: 33%;
}

.pagar_compra {
  .h2_compra_de_carrito {
    color: var(--color-gris-carrito);
  }

  .metodo_de_pago_del_carrito {
    height: var(--tamano-de-targetas-de-carrito-de-compras);

    padding: 0;

    .tipo_de_pago {
      background-color: #85f1ffab;

      @include centrar;
      @include tamano-estandar-de-pago;

      .img_de_tipo_de_pago {
        margin: 10px;
        background-size: var(--tamano-de-img-de-pago);
        width: var(--tamano-de-img-de-pago);
      }
    }

    .total_a_pagar {
      @include centrar;
      align-items: center;

      @include tamano-estandar-de-pago;
      height: 34%;

      .precio_total {
        font-size: 24px;
        font-family: "Galano";
      }
    }

    .pagar_la_compra {
      button {
        @include centrar;
        align-items: center;
        @include tamano-estandar-de-pago;
        background-color: var(--color-fondo-boton-pagar);

        font-family: "Galano";
        font-size: 24px;
        color: var(--color-letra-boton-pagar);

        transition-duration: 0.3s;

        &:hover {
          color: var(--color-fondo-boton-pagar);
          background-color: var(--color-letra-boton-pagar);
          border: 2px var(--color-borde-boton-pagar) solid;
        }

        &:active {
          font-size: 22px;
          border: 5px var(--color-borde-boton-pagar) solid;
        }
      }
    }
  }
}
</style>
