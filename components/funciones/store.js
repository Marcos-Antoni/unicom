export default {
  ordenarArray(arrayDesordenado) {
    let arrayOrdenado = [];

    arrayDesordenado.map(e => {
      if (typeof e == "number") {
        let numeroInt = parseInt(e) + 1;
        let posicion = arrayOrdenado.length;

        for (let i = 0; i < posicion; i++) {
          if (arrayOrdenado[i] > numeroInt) {
            posicion = i;
            break;
          }
        }

        !arrayOrdenado[0]
          ? (arrayOrdenado[0] = numeroInt)
          : arrayOrdenado.splice(posicion, 0, numeroInt);
      }
    });
    return arrayOrdenado;
  },

  newArray(arrayOredenado, ListaCurso) {
    let newArray = [];

    arrayOredenado.map(e => {
      newArray[newArray.length] = ListaCurso[e - 1];
    });

    return newArray;
  }
};
