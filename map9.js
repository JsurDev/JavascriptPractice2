const usuarios = [
  {
    nombre: "Sofía",
    direccion: { ciudad: "Madrid", pais: "España" },
    activo: true,
  },
  {
    nombre: "Marco",
    direccion: { ciudad: "Lima", pais: "Perú" },
    activo: false,
  },
  {
    nombre: "Valeria",
    direccion: { ciudad: "CDMX", pais: "México" },
    activo: true,
  },
  {
    nombre: "Diego",
    direccion: { ciudad: "San Salvador", pais: "El Salvador" },
    activo: true,
  },
  {
    nombre: "Alfredo",
    direccion: { ciudad: "Bogotá", pais: "Colombia" },
    activo: false,
  },
];

const nuevoUsuario = usuarios.map((user) => {
  return {
    nombre: user.nombre,
    activo: user.activo,
    ubicacion: user.direccion.ciudad + ", " + user.direccion.pais,
  };
});

console.log(nuevoUsuario);
