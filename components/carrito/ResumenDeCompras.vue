<template>
  <div class="resumen_de_carrito">
    <h2 class="h2_carrito_resumen">Resumen</h2>

    <ContenedorBlanco class="lita_del_resumen">
      <template #default>
        <ul>
          <li
            class="li__items_resmen_de_compras"
            v-for="(item, numero) in resumenDeLacompra"
            :key="numero"
          >
            <p class="nombre_item_li_resumen_carrito">
              {{ item.nombre }}
            </p>
            <p class="precio_item_li_resumen_carrito">S/{{ item.total }}</p>
          </li>
          <li class="li_ususario_resumen_compras">
            huivdsaiodio2856
          </li>

          <li class="li_total_resumen_compras">
            <p class="nombre_de_total">total</p>
            <p class="total_de_items">S/{{ totalReal }}</p>
          </li>
        </ul>
      </template>
    </ContenedorBlanco>
  </div>
</template>

<script>
import ContenedorBlanco from "../globales/ContenedorBlanco";
import { mapState, mapGetters } from "vuex";
// funciones
import FunGlobal from "../funciones/globales";

export default {
  components: { ContenedorBlanco },
  data() {
    return {};
  },

  computed: {
    ...mapState(["ListCompras"]),
    ...mapGetters(["precioDeCompra"]),

    resumenDeLacompra() {
      const precio = this.precioDeCompra;

      return [
        { nombre: "Sub-Total", total: precio },
        { nombre: "Envio", total: 0.1 },
        { nombre: "Descuento", total: 0.03 }
      ];
    },

    totalReal() {
      const total = FunGlobal.sumarPrecios(
        this.resumenDeLacompra,
        "total",
        "Descuento",
        "nombre"
      );

      this.$store.commit("new_total_de_la_compra", total);

      return total;
    }
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --color-de-letra-li-resumen: #8d8d8d;
  --tamano-de-li-resumen: 90%;
}

/* mixin */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

@mixin centrar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.resumen_de_carrito {
  .h2_carrito_resumen {
    color: var(--color-gris-carrito);
  }

  .lita_del_resumen {
    height: var(--tamano-de-targetas-de-carrito-de-compras);
    font-size: 18px;

    .li__items_resmen_de_compras {
      width: var(--tamano-de-li-resumen);
      height: 20px;
      margin-bottom: 5px;

      @include centrar;

      .nombre_item_li_resumen_carrito {
        color: var(--color-de-letra-li-resumen);
      }
    }

    .li_ususario_resumen_compras {
      color: #000;
      background-color: #eeeeee;
      padding: 5px;
      width: 50%;
      margin-top: 20px;
      margin-bottom: 40px;

      display: flex;
      justify-content: center;
      position: relative;

      &::after {
        @include affter;
        background-color: var(--color-de-linea-de-carrito);
        width: 200%;
        height: 2px;
        bottom: -30px;
        left: 0;

        animation: aparecer;
        animation-duration: 1s;
      }
    }

    .li_total_resumen_compras {
      width: var(--tamano-de-li-resumen);
      height: 50px;

      @include centrar;

      .nombre_de_total {
        font-family: "Galano";
      }

      .total_de_items {
        font-size: 20px;
      }
    }
  }
}
</style>
