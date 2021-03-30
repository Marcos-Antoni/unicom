<template>
  <div class="contenedor_horario_tutorial">
    <ContenedorBlanco class="formulario_de_horario">
      <form>
        <label class="contenedor_de_selec" for="pabellon">
          <p>selecciona pabellon</p>
          <input type="text" id="pabellon" class="input" />
        </label>

        <label class="contenedor_de_selec" for="hora">
          <p>selecciona la hora</p>
          <input type="text" id="hora" class="input" />
        </label>

        <div class="contenedor_de_boton_de_compra_tutorial">
          <button type="submit" @click.prevent="">agregar al carrito</button>
        </div>
      </form>
    </ContenedorBlanco>
  </div>
</template>

<script>
import ContenedorBlanco from "../globales/ContenedorBlanco";
export default {
  components: { ContenedorBlanco }
};
</script>

<style lang="scss">
.contenedor_horario_tutorial {
  .formulario_de_horario {
    width: 50%;
    border-radius: 10px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    .contenedor_de_selec {
      .input {
        width: 100%;
        margin-bottom: 25px;
        background-color: #ccc;
      }

      p {
        margin-bottom: 10px;
      }
    }

    .contenedor_de_boton_de_compra_tutorial {
      display: flex;
      justify-content: center;

      margin-bottom: 10px;

      button {
        background-color: var(--color-de-fonde-boton-azul);
        color: var(--color-de-letra-boton-azul);
        font-size: 18px;
        font-family: "Galano";
        border: 2px #ccc00000 solid;

        width: 200px;
        height: 40px;

        transition-duration: 0.3s;

        &:hover {
          border: 2px #ccc solid;
          background-color: var(--color-de-letra-boton-azul);
          color: var(--color-de-fonde-boton-azul);
        }

        &:active {
          border: 5px #ccc solid;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
