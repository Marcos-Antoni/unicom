<template>
  <div class="footer">
    <v-row class="columnas">
      <v-col md="2" cols="12" class="centrado">
        <h2>Unicom</h2>
      </v-col>
      <v-col md="8" cols="12" class="lista">
        <ul v-for="objeto in lista" :key="objeto.nombre" class="pestana">
          <li>
            <h3 class="titulo">{{ objeto.nombre }}</h3>
          </li>
          <li class="contenido" v-for="con in objeto.contenido" :key="con">
            {{ con }}
          </li>
        </ul>
        <v-expansion-panels class="acordio">
          <v-expansion-panel
            class="acordeon-contenedor"
            v-for="objeto in lista"
            :key="objeto.nombre"
          >
            <v-expansion-panel-header class="titulo">
              {{ objeto.nombre }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="contenido">
              <li v-for="con in objeto.contenido" :key="con">
                {{ con }}
              </li>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col md="2" cols="12" class="centrado footer_subTirulo">
        <p>Incubadora x</p>
      </v-col>

      <v-col cols="9" class="color1 color"> </v-col>
      <v-col cols="3" class="color2 color"> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        {
          nombre: "Soluciones",
          contenido: ["comercio y pedidos", "medicina", "servicio"]
        },
        {
          nombre: "Soporte",
          contenido: [
            "Horario Lunes-Domingo 24/7",
            "+57 959 061 401",
            "soporte@symba.pe"
          ]
        },
        {
          nombre: "Otros paises",
          contenido: ["Guatemala", "Venezuela", "Colombia"]
        },
        {
          nombre: "Acceso",
          contenido: ["Login", "Registrarce", "Quiero trabajar con ustedes!"]
        },
        { nombre: "Ventas", contenido: ["+57 959 061 401", "ventas@symba.pe"] },
        {
          nombre: "Legal",
          contenido: ["terminos y condiciones", "Politicas de pribacidad"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.footer {
  background-color: var(--color-de-footer);
  display: flex;
  align-items: flex-end;
  height: 300px;

  @media screen and (max-width: 960px) {
    height: auto;
  }

  .columnas {
    height: 75%;
    background-color: var(--color-de-footer);

    @media screen and (max-width: 960px) {
      height: auto;
    }

    .centrado {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      color: #fff;
      padding-bottom: 50px;

      @media screen and (max-width: 960px) {
        height: 150px;
      }
    }

    .footer_subTirulo {
      padding-right: 30px;
      padding-left: 0;

      p {
        font-family: "Galano";
        margin-bottom: 10px;
        font-size: 21px;
        position: relative;

        &::after {
          @include affter();
          background-image: url(/tres_lineas.svg);
          background-size: var(--footer-tamano-de-tres-lineas);
          width: var(--footer-tamano-de-tres-lineas);
          height: 79px;
          top: -45px;
          left: -20px;
        }
      }
    }

    .lista {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .titulo {
        color: #ffffff;
        font-size: 15px;
      }
      .contenido {
        color: #e6e6e6;
      }

      .pestana {
        margin-right: 50px;
        display: block;

        @media screen and (max-width: 960px) {
          display: none;
        }

        .titulo {
          margin-bottom: 10px;
        }
      }

      .acordio {
        display: none;

        @media screen and (max-width: 960px) {
          display: block;
        }
        .acordeon-contenedor {
          background-color: var(--color-de-footer);

          .v-expansion-panel-header {
            display: flex;
            justify-content: center;
          }
          .titulo {
            text-align: center;
          }
        }
      }
    }

    .color1 {
      background: var(--color-azul);
    }

    .color2 {
      background: var(--color-azul-2);
    }

    .color {
      height: 10px;
    }
  }
}
</style>
