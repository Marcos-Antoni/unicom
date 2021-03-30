<template>
  <form class="formulario_de_partes_de_cursos">
    <p>Selecciona el tempo que deseas</p>

    <div class="lista_de_botones_de_curso">
      <label
        :for="`${clase.titulo}${numero}`"
        v-for="(clase, numero) in listaDeClases"
        :key="numero"
        @click="prueva"
        class="label_de_seccion_de_curso"
      >
        <input
          type="checkbox"
          v-model="array_partes_del_curso"
          :value="numero"
          :id="`${clase.titulo}${numero}`"
        />
        {{ clase.titulo }}
      </label>

      <div class="mover_a_carrito">
        <p class="precio_curso">S/7.50</p>
        <button type="submit" @click.prevent="">agregar al carrito</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    listaDeClases: Array
  },

  data() {
    return {
      array_partes_del_curso: []
    };
  },

  methods: {
    prueva() {
      setTimeout(() => {
        this.$store.commit(
          "colocarar_partes_del_Curso",
          this.array_partes_del_curso
        );
      }, 1);
    }
  }
};
</script>

<style lang="scss">
.formulario_de_partes_de_cursos {
  .lista_de_botones_de_curso {
    display: flex;
    flex-direction: column;

    .label_de_seccion_de_curso {
      margin-top: 20px;
      width: 50%;
      cursor: pointer;
    }

    .mover_a_carrito {
      margin-top: 20px;

      .precio_curso {
        font-weight: bold;
        font-size: 35px;
      }

      button {
        margin-top: 20px;

        background-color: var(--color-de-fonde-boton-azul);
        color: var(--color-de-letra-boton-azul);
        font-family: "Galano";
        font-size: 18px;

        width: 200px;
        height: 50px;

        transition-duration: 0.3s;

        &:hover {
          background-color: var(--color-de-letra-boton-azul);
          color: var(--color-de-fonde-boton-azul);
          border: 2px solid #ccc;
        }

        &:active {
          border: 5px solid #ccc;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
