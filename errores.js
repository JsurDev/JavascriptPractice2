const manejoErrores = (primerNombre, apellido) => {
  if (primerNombre === undefined || apellido === undefined) {
    throw new Error("El primer nombre y el apellido son obligatorios");
  }
  return "Hola " + primerNombre + " " + apellido;
};

const resultado = manejoErrores("Jesur", "González");

console.log(resultado);
