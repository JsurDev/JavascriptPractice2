const nombresActuales = [
  { tipo: "fruta", nombre: "manzana" },
  { tipo: "fruta", nombre: "naranja" },
  { tipo: "vegetal", nombre: "cebada" },
  { tipo: "vegetal", nombre: "tomate" },
  { tipo: "vegetal", nombre: "zanahoria" },
];

const nuevoArreglo = nombresActuales.map(({ tipo, nombre }) => {
  return `Usuario: ${tipo} ${nombre.toUpperCase()}`;
});

console.log(nuevoArreglo);
