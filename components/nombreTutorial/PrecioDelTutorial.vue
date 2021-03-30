<template>
  <div class="contenedor_de_precio_del_tutorial">
    <div class="precio_por_horas">
      <p class="precio">S/5.00 la H</p>

      <div class="elige_las_horas">
        <button @click="aumentraDisminuirHoras(-1)">-</button>

        <p>{{ horas }}</p>

        <button @click="aumentraDisminuirHoras(1)">+</button>
      </div>
    </div>

    <ul class="lista_de_descripciones">
      <li class="tutorial_relog">Seleciona la hora</li>
      <li class="tutorial_recomendable">Muy recomendado</li>
      <li class="tutorial_precio">Precio economico</li>
    </ul>
  </div>
</template>

<script>
import FunTut from "../funciones/tutorial";

export default {
  data() {
    return {
      horas: 20
    };
  },
  methods: {
    aumentraDisminuirHoras(cantidad) {
      this.horas = FunTut.aumentraDisminuirHoras(cantidad, this.horas);
    }
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --color-de-fondo-boton-mas-menos: #e7e7e7;
  --color-de-letra-boton-mas-menos: #000;
  --tamano-de-img-de-affter-de-tutorial: 20px;
  --margin-de-botones-de-tutorial-horas: 20px;
  --tamano-de-precio-por-hora: 35px;
  --margen-top-de-precios-de-tutorial: 15px;
}

/* mixin */
@mixin centrar {
  display: flex;
  justify-content: center;
}

@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.contenedor_de_precio_del_tutorial {
  @include centrar;
  justify-content: space-between;

  @media screen and (max-width: 365px) {
    flex-direction: column;
    align-items: center;
  }

  .precio_por_horas {
    margin-top: var(--margen-top-de-precios-de-tutorial);

    .precio {
      @include centrar;
      font-weight: bold;
      font-size: var(--tamano-de-precio-por-hora);
    }

    .elige_las_horas {
      margin-top: 10px;

      @include centrar;
      align-items: center;

      button {
        padding: 0;
        background-color: var(--color-de-fondo-boton-mas-menos);
        color: var(--color-de-letra-boton-mas-menos);

        font-size: 18px;
        font-weight: bold;
        width: 50px;
        height: 25px;

        transition-duration: 0.3s;

        &:hover {
          background-color: var(--color-de-letra-boton-mas-menos);
          color: var(--color-de-fondo-boton-mas-menos);
        }

        &:active {
          font-size: 16px;
          width: 45px;
          height: 22.5px;
        }
      }

      p {
        margin: 0px var(--margin-de-botones-de-tutorial-horas);
      }
    }
  }

  .lista_de_descripciones {
    margin-top: var(--margen-top-de-precios-de-tutorial);

    li {
      margin-bottom: 20px;
      font-size: 18px;
      color: var(--color-de-footer);
      position: relative;

      &::after {
        @include affter();
        background-size: cover;
        width: var(--tamano-de-img-de-affter-de-tutorial);
        height: var(--tamano-de-img-de-affter-de-tutorial);
        left: -25px;
        top: 1px;
      }
    }

    .tutorial_relog {
      &::after {
        background-image: url(/tutoriales/relog.svg);
      }
    }

    .tutorial_recomendable {
      &::after {
        background-image: url(/tutoriales/recomendable.svg);
      }
    }

    .tutorial_precio {
      &::after {
        background-image: url(/tutoriales/precio.svg);
      }
    }
  }
}
</style>
