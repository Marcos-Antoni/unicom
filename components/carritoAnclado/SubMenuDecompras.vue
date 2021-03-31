<template>
  <PantallaNegra
    @salir="off_sub_menu_compras"
    class="contenedor_de_menu_compras"
    y="100vh"
    x="500px"
    :on_off="activar_menu_compras"
    tipo_de_animacion="lados"
  >
    <ListaDeCompras class="lista_de_compras_carrito">
      <div class="sub_precio_de_tus_compras">
        <p class="total">Sub-Total</p>
        <p class="precio">S/{{ precioDeCompra }}</p>
      </div>
    </ListaDeCompras>
  </PantallaNegra>
</template>

<script>
import PantallaNegra from "../globales/PantallaNegra";
import ListaDeCompras from "../carrito/ListaDeCompras";
/* vuex */
import { mapGetters, mapState } from "vuex";

export default {
  components: { PantallaNegra, ListaDeCompras },

  methods: {
    off_sub_menu_compras() {
      this.$store.commit("on_of_menu_carrito");
    }
  },

  computed: {
    ...mapGetters(["precioDeCompra"]),
    ...mapState(["activar_menu_compras"])
  }
};
</script>

<style lang="scss">
/* mixin */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.contenedor_de_menu_compras {
  flex-direction: row-reverse;
  justify-content: space-between;

  .contenedor-Pantalla {
    align-items: flex-start;

    .lista_de_compras_carrito {
      margin-top: 10px;
      width: 97%;

      .h2_carrto_lista {
        width: 100%;
        text-align: center;
        height: 5vh;
        color: #000;
      }

      .lita_del_carrito {
        box-shadow: none;
        height: 94vh;
      }

      .sub_precio_de_tus_compras {
        margin-top: 10px;
        position: relative;
        height: 80px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 20px;

        &::after {
          @include affter();
          background-color: #ccc;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }

        .total {
          font-weight: bold;
        }

        .precio {
          margin-right: 17%;
        }
      }
    }
  }
}
</style>
