<template>
  <v-card class="obgeto-de-lista ">
    <img
      :src="`/univercidades/logo${obgeto.univercidad}.svg`"
      class="univercidad"
    />
    <div class="img-del-curso" :class="obgeto.nuevo ? `nuevo` : ``">
      <img :src="obgeto.img" class="img" />
    </div>

    <v-container>
      <div class="nombre-del-producto">
        <p class="tutulo-de-la-clase">
          {{ obgeto.titulo }}
        </p>
        <h2>{{ obgeto.profesor }}</h2>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Targeta",
  props: ["obgeto"]
};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.verificar {
  &::after {
    @include affter();
    background-image: url(/verificado.svg);
    background-size: 30px;
    width: 30px;
    height: 30px;
    left: -3%;
    top: -3%;
  }
}

.obgeto-de-lista {
  height: 200px;
  width: 100%;
  box-shadow: -2px -1px 12px #0000001a !important;

  position: relative;

  &::before {
    @include affter();
    background-image: url(/mas.svg);
    background-size: var(--tamano-del-mas);
    height: var(--tamano-del-mas);
    width: var(--tamano-del-mas);
    top: var(--posicion-del-mas);
    right: var(--posicion-del-mas);
    z-index: 3;
  }

  .univercidad {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    left: 0;
    z-index: 3;
  }

  .img-del-curso {
    position: relative;
    height: 70%;

    .img {
      height: 100%;
      width: 100%;
      border-radius: 6px;
      z-index: 1;
    }
  }

  .nuevo {
    &::after {
      @include affter();
      content: "Nuevo";
      padding: 0;
      text-align: center;
      color: #fff;
      font-weight: bold;
      font-family: "Galano";

      width: 60px;
      height: auto;
      border-radius: 5px;
      background-color: var(--color-azul);
      bottom: 0px;
      right: 0px;
    }
  }

  .nombre-del-producto {
    height: 30%;
    position: relative;

    &::after {
      @include affter();
      background-image: url(/tres_puntos.svg);
      background-size: var(--tamano-de-tres-puntos);
      width: var(--tamano-de-tres-puntos);
      height: 22px;
      top: 5px;
      right: 0px;
    }

    p {
      width: 100%;
      font-size: 15px;
      position: relative;
    }

    h2 {
      width: 90%;
      height: auto;
      display: inline-block;

      font-size: 15px;
      color: #000;
    }
  }
}
</style>
