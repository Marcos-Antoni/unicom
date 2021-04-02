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
            <li
              class="titulo"
              v-for="(nombre, numero) in item.respuesta"
              :key="numero"
            >
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
  --tamano-de-affter-verificacion: 30px;
  --tamano-de-titulos: 18px;
  --tamano-de-informacion-de-clases: auto;

  @media screen and (max-width: 599px) {
    --tamano-de-informacion-de-clases: 200px;
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
      margin-top: 10px;

      .espacio {
        margin-bottom: 20px;

        &::before {
          @include affter();
          background-color: #ccc;
          width: 115%;
          height: 3px;

          bottom: -10px;
        }
      }

      li {
        font-size: var(--tamano-de-titulos);
        width: 85%;
        position: relative;

        &::after {
          @include affter();

          border-radius: 50%;
          width: var(--tamano-de-affter-verificacion);
          height: var(--tamano-de-affter-verificacion);

          top: 0px;
          right: -15%;
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
      margin-top: 20px;

      .informacion {
        margin-bottom: 20px;

        .titulo {
          font-size: var(--tamano-de-titulos);
        }

        .items {
          display: flex;
          flex-wrap: wrap;

          li {
            background-color: #62b7f056;
            color: var(--color-azul);
            padding: 0px 8px;

            width: auto;
            height: auto;
            margin-right: 10px;
            margin-bottom: 5px;

            font-size: 15px;
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
