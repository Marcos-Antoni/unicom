<template>
  <div class="cotenedor_de_img_de_cursos">
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  props: ["img"]
};
</script>

<style lang="scss">
/* variables */
:root {
  --tamano-de-univercidad: 80px;
  --left-de-univercidad: 5%;

  @media screen and (max-width: 500px) {
    --left-de-univercidad: -2%;
  }
}

/* mixin */
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

.cotenedor_de_img_de_cursos {
  width: 100%;
  height: 400px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-size: cover;
  }
  &::before {
    @include affter();
    background-image: url(/cursos/academia.svg);
    background-size: var(--tamano-de-univercidad);
    width: var(--tamano-de-univercidad);
    height: var(--tamano-de-univercidad);
    bottom: -15px;
    left: var(--left-de-univercidad);
  }
}
</style>
