<template>
  <div class="Profesores" :style="`background-image: url(${profesor.img})`">
    <h2 :style="` background-color: ${colores[profesor.univercidad - 1]}`">
      {{ profesor.nombre }}
    </h2>

    <p>{{ profesor.profecion }}</p>
    <img
      :src="`univercidades/logo${profesor.univercidad}.svg`"
      alt="univercidad 1"
    />
  </div>
</template>

<script>
export default {
  props: {
    profesor: Object
  },
  data() {
    return {
      colores: ["#ffb800", "#0028bf", "#ff4d00"]
    };
  }
};
</script>

<style lang="scss">
@mixin absoluto {
  position: absolute;
  left: 0;
  padding-left: 10px;
}
.Profesores {
  height: 150px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  background-size: 100% 100%;
  position: relative;

  h2 {
    @include absoluto;
    bottom: 23px;
    color: #fff;
    font-size: 18px;
    width: 75%;
  }

  p {
    @include absoluto;
    bottom: 00px;
    color: #000;
    font-size: 15px;
    font-family: "Galano";

    width: 85px;
    background-color: #fff;
  }

  img {
    @include absoluto();
    width: 40px;
    height: 40px;
    top: -2px;
    left: 80%;
  }
}
</style>
