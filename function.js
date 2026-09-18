const usuario = {
  nombre: "Jesus",
  role: "adminw",
  age: 30,
};

function mostrandoDatos(usuarioDatos) {
  if (usuarioDatos.role !== "admin") {
    return "no tienes acceso";
  }
  return "Acceso permitido";
}
console.log(mostrandoDatos(usuario));
