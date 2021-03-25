export default {
  activar_desactibar_estilos(lista, num) {
    let lista_editable = lista;

    lista_editable = lista_editable.map(elemnto => {
      elemnto.encender = false;
      return elemnto;
    });

    lista_editable[num].encender = true;
    return lista_editable;
  },

  sumarPrecios(listaCompra, columnaPrecio, descuento, columnaNombre) {
    /* solo agregar las ultimas dos variables de la funciones si quieres restar 
    si no es el caso solo basta poner en la tercera variable false
    */
    let total = 0;

    listaCompra.map(e => {
      if (e[columnaNombre] == descuento) {
        total = total - e[columnaPrecio] * 100;
      } else {
        total = total + e[columnaPrecio] * 100;
      }
    });
    total /= 100;

    return total;
  }
};
