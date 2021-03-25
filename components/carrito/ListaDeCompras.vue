<template>
  <div class="lista_de_compras_carrito">
    <h2 class="h2_carrto_lista">carrito</h2>

    <ContenedorBlanco class="lita_del_carrito" scroll>
      <template #default>
        <ul>
          <li
            class="item_de_carrito"
            v-for="(item, numero) in ListCompras"
            :key="numero"
          >
            <div class="descripcion_de_item_carrito">
              <img :src="item.img" alt="" />

              <ul class="lista_de_datos_carrito">
                <li class="materia_carrito">
                  {{ item.titulo }}
                </li>
                <li class="profesor_carrito">Prof.{{ item.profesor }}</li>
                <li class="Curso_activo_carrito">Grabacion</li>
              </ul>
            </div>

            <p class="precio_de_item_en_carrito">S/{{ item.precio }}</p>

            <p class="cantidad_de_item_en_carrito">{{ item.cantidad }}</p>
          </li>
        </ul>
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
    ...mapState(["ListCompras"])
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-item-de-carrito: var(--tamano-de-imagen-carrito);
  --tamano-de-imagen-carrito-width: 125px;
  --tamano-de-cantidad-de-carrito: 35px;
  --tamano-de-descripcion-item: auto;
  --tamano-de-boton-grabacion: 15px;
  --tamano-de-letra-de-precio: 18px;
  --margen-de-item-de-carrito: 5px;
  --tamano-de-imagen-carrito: 80px;

  --margen-right-de-cantidad-de-item-en-carrito: 20px;
  --margen-left-de-lista-de-datos: 20px;
  --tamano-de-lista-carrito: 500px;

  @media screen and (max-width: 959px) {
    --tamano-de-lista-carrito: 250px;
  }
  @media screen and (max-width: 500px) {
    --tamano-de-item-de-carrito: 100px;
    --tamano-de-imagen-carrito: 70px;

    --tamano-de-imagen-carrito-width: var(--tamano-de-imagen-carrito);
    --margen-right-de-cantidad-de-item-en-carrito: 0px;
    --margen-left-de-lista-de-datos: 10px;
    --margen-de-item-de-carrito: 15px;
    --tamano-de-descripcion-item: 60%;
    --tamano-de-letra-de-precio: 22px;
    --tamano-de-lista-carrito: 250px;
  }
}

/* mixin */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.lista_de_compras_carrito {
  .h2_carrto_lista {
    color: var(--color-gris-carrito);
  }

  .lita_del_carrito {
    height: var(--tamano-de-lista-carrito);

    @media screen and (max-width: 500px) {
      padding-right: 0;
      padding-left: 4px;
    }

    .item_de_carrito {
      width: 100%;
      height: var(--tamano-de-item-de-carrito);
      margin-bottom: var(--margen-de-item-de-carrito);

      display: flex;
      align-items: center;
      justify-content: space-between;

      .descripcion_de_item_carrito {
        display: flex;
        align-items: center;
        width: var(--tamano-de-descripcion-item);

        img {
          background-size: var(--tamano-de-imagen-carrito);
          width: var(--tamano-de-imagen-carrito-width);
          height: var(--tamano-de-imagen-carrito);
          border-radius: 10px;
        }

        .lista_de_datos_carrito {
          height: 100%;
          margin-left: var(--margen-left-de-lista-de-datos);
          font-size: 15px;

          .profesor_carrito {
            font-weight: bold;
            font-family: "Galano";
          }

          .Curso_activo_carrito {
            font-size: 13;
            margin-left: 15px;
            position: relative;

            &::after {
              @include affter();
              background-image: url(/carrito/en_vivo.svg);
              background-size: var(--tamano-de-boton-grabacion);
              width: var(--tamano-de-boton-grabacion);
              height: var(--tamano-de-boton-grabacion);

              left: -20px;
              top: 2.6px;
            }
          }
        }
      }

      .precio_de_item_en_carrito {
        font-size: var(--tamano-de-letra-de-precio);
        font-weight: bold;
      }

      .cantidad_de_item_en_carrito {
        font-family: "Galano";
        margin-right: var(--margen-right-de-cantidad-de-item-en-carrito);
        background-color: #ccc;
        width: var(--tamano-de-cantidad-de-carrito);
        height: var(--tamano-de-cantidad-de-carrito);
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
