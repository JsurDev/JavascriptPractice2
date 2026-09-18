const user = [
  { id: 1, nombre: "Jesur" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "Pepe" },
  { id: 4, nombre: "Luis" },
];

const nombresUsuarios = user.map((user) => {
  return user.nombre;
});

console.log(nombresUsuarios);
