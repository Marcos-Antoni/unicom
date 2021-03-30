export default {
  aumentraDisminuirHoras(cantidad, variable) {
    if (variable + cantidad > 24) {
      return 1;
    } else if (variable + cantidad < 1) {
      return 24;
    } else {
      return variable + cantidad;
    }
  }
};
