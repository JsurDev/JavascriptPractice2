const usuarios = [
  { id: 1, nombre: "Jesus", rol: "admin" },
  { id: 2, nombre: "Maria", rol: "user" },
  { id: 3, nombre: "Pedro", rol: "user" },
];

const etiquetaUsuarios = usuarios.map((usu) => {
  return "Usuario: " + usu.nombre + " " + usu.rol.toUpperCase();
});

console.log(etiquetaUsuarios);
