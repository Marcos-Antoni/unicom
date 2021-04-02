<template>
  <div class="portada_profesor">
    <FondoGris :img="img" oof_affters class="Descripcion">
      <div class="info_de_profesor">
        <div class="img_de_profesor">
          <img :src="profesor.img" alt="" />
        </div>
        <!-- {{ profesor }} -->
        <ul>
          <li class="titulo">{{ profesor.nombre }}</li>
          <li class="contenido">{{ profesor.anos }} años educando</li>
        </ul>
      </div>
    </FondoGris>
  </div>
</template>

<script>
import FondoGris from "../globales/FondoGris";
import { mapState } from "vuex";

export default {
  components: { FondoGris },
  props: { img: String },

  computed: {
    ...mapState(["listProfesores"]),
    profesor() {
      return this.listProfesores[0];
    }
  }
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-foto-de-profesor: 142px;
  --tamano-de-fondo-de-profesor: 158px;
  --margen-left-de-informacion-de-profesor: 200px;
  --left-de-imagen-de-profesor: -175px;
  --top-de-imagen-de-profesor: -3px;
  --align-items-de-profesor: flex-start;

  @media screen and (max-width: 599px) {
    --margen-left-de-informacion-de-profesor: 0px;
    --left-de-imagen-de-profesor: 0;
    --top-de-imagen-de-profesor: -170px;
    --align-items-de-profesor: center;
  }
}

.portada_profesor {
  height: auto;

  .Descripcion {
    width: 100vw;

    .contenido {
      align-items: var(--align-items-de-profesor);
      justify-content: flex-end;

      .info_de_profesor {
        position: relative;

        height: auto;
        width: auto;
        margin-left: var(--margen-left-de-informacion-de-profesor);
        margin-bottom: 3px;

        color: #ffff;

        .img_de_profesor {
          position: absolute;
          left: var(--left-de-imagen-de-profesor);
          top: var(--top-de-imagen-de-profesor);

          background-color: #fff;
          border-radius: 50%;

          width: var(--tamano-de-fondo-de-profesor);
          height: var(--tamano-de-fondo-de-profesor);

          display: flex;
          align-items: center;
          justify-content: center;

          img {
            background-size: cover;
            width: var(--tamano-de-foto-de-profesor);
            height: var(--tamano-de-foto-de-profesor);
            border-radius: 50%;
          }
        }

        ul {
          .titulo {
            font-size: 25px;
          }

          .contenido {
            font-size: 18px;
          }

          li {
            margin-bottom: 3px;
          }
        }
      }
    }
  }
}
</style>
