<template>
  <div class="verifiacion_P">
    <ContenedorBlanco class="verificacones_de_P">
      <ul>
        <li class="titulo verde espacio">perfil y titulo verifocado</li>
        <li class="titulo amarillo">rateo alto de respuesta</li>
      </ul>
    </ContenedorBlanco>

    <ContenedorBlanco class="informcacion_de_clases" scroll>
      <ul class="contenedor_info">
        <li class="informacion" v-for="(item, numero) in info" :key="numero">
          <p class="titulo">{{ item.nombre }}</p>

          <ul class="items">
            <li v-for="(nombre, numero) in item.respuesta" :key="numero">
              {{ nombre }}
            </li>
          </ul>
        </li>

        <li class="informacion">
          <p class="titulo">Univercidades</p>
          <img src="/univercidades/logo1.svg" />
          <img src="/univercidades/logo2.svg" />
        </li>
      </ul>
    </ContenedorBlanco>
  </div>
</template>

<script>
import ContenedorBlanco from "../globales/ContenedorBlanco";

export default {
  components: { ContenedorBlanco },

  data() {
    return {
      info: [
        {
          nombre: "tipo de clases ofresidad",
          respuesta: ["Individual", "Grupal"]
        },
        {
          nombre: "Las clases seran",
          respuesta: ["Online", "Univercidad"]
        },
        {
          nombre: "Materia que enceño",
          respuesta: ["Algebra", "Calculo", "Quimica", "Fisica"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-affter-verificacion: 25px;
  --tamano-de-titulos: 15px;
  --tamano-de-informacion-de-clases: auto;
  --tamano-de-li-de-informacion: 85%;
  --bottom-de-affter-separador: -13px;
  --width-de-affter-separador: 115%;
  --right-de-affter-verificar: -15%;

  @media screen and (max-width: 1060px) {
    --tamano-de-li-de-informacion: 96.4%;
    --width-de-affter-separador: 105%;
    --tamano-de-titulos: 15px;
    --right-de-affter-verificar: -8%;
    --tamano-de-affter-verificacion: 20px;
  }

  @media screen and (max-width: 980px) {
    --right-de-affter-verificar: -10%;
  }

  @media screen and (max-width: 959px) {
    --tamano-de-titulos: 18px;
    --tamano-de-li-de-informacion: 85%;
    --width-de-affter-separador: 115%;
    --tamano-de-affter-verificacion: 25px;
  }

  @media screen and (max-width: 739px) {
    --tamano-de-titulos: 15px;
    --tamano-de-affter-verificacion: 25px;
    --tamano-de-li-de-informacion: 90%;
    --width-de-affter-separador: 105%;
  }

  @media screen and (max-width: 608px) {
    --tamano-de-li-de-informacion: 91%;
  }

  @media screen and (max-width: 599px) {
    --tamano-de-informacion-de-clases: 200px;
    --tamano-de-affter-verificacion: 30px;
    --tamano-de-li-de-informacion: 85%;
    --bottom-de-affter-separador: -12px;
    --width-de-affter-separador: 115%;
  }
}

/* mixins */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.verifiacion_P {
  .contenedor_blanco {
    @media screen and (max-width: 599px) {
      box-shadow: none;
    }
  }

  .verificacones_de_P {
    ul {
      // margin-top: 0px;

      .espacio {
        margin-bottom: 15px;

        &::before {
          @include affter();
          background-color: #ccc;
          width: var(--width-de-affter-separador);
          height: 3px;

          bottom: var(--bottom-de-affter-separador);
        }
      }

      li {
        font-size: var(--tamano-de-titulos);
        width: var(--tamano-de-li-de-informacion);
        position: relative;

        &::after {
          @include affter();

          border-radius: 50%;
          width: var(--tamano-de-affter-verificacion);
          height: var(--tamano-de-affter-verificacion);

          top: 0px;
          right: var(--right-de-affter-verificar);
        }
      }

      .amarillo {
        &::after {
          background-color: #fad400;
        }
      }

      .verde {
        &::after {
          background-color: #1bd81b;
        }
      }
    }
  }

  .informcacion_de_clases {
    margin-top: 20px;
    height: var(--tamano-de-informacion-de-clases);

    .contenedor_info {
      margin-top: 5px;

      .informacion {
        margin-bottom: 15px;

        .titulo {
          font-size: 14px;
        }

        .items {
          display: flex;
          flex-wrap: wrap;
          margin-top: 5px;

          li {
            background-color: rgba(0, 87, 255, 0.08);
            color: var(--color-azul);
            padding: 5px 10px;
            border-radius: 3px;

            width: auto;
            height: auto;
            margin-right: 10px;
            margin-bottom: 5px;

            font-size: 11px;
            margin-bottom: 3px;
            font-weight: bold;
          }
        }

        img {
          background-size: cover;
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
