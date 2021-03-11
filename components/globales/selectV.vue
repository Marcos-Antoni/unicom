<template>
  <div class="selector-de-univercidades">
    <select aria-placeholder="adios">
      <option selected="true" disabled="disabled" class="desaparese"
        >Filtrar por univercidad</option
      >
      <option value="1"> hola</option>
      <option value="2"> hola</option>
      <option value="2"> hola</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@mixin affter {
  position: absolute;
  display: block;
  content: "";
}

@keyframes bajar {
  from {
    height: 0;
  }

  to {
    height: 100px;
  }
}

.selector-de-univercidades {
  //   margin: 20px auto 40px auto;
  border: none;
  height: 30px;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-de-selc);
  position: relative;

  &::after {
    @include affter();
    background-image: url(/abajo.svg);
    background-size: var(--tamano-de-flecha-de-selec);
    width: var(--tamano-de-flecha-de-selec);
    height: 15px;

    top: 8px;
    right: 5px;
    pointer-events: none;
  }

  select {
    font-size: 14px;
    height: 30px;
    padding: 5px;
    width: 100%;
    background-color: var(--color-de-selc);

    option {
      border: none;
    }

    &:focus {
      outline: none;
    }

    .desaparese {
      display: none;
    }
  }
}
</style>
