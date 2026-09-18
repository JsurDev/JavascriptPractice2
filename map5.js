const peliculas = [
  { titulo: "El origen", duracionMin: 148, año: 2010 },
  { titulo: "Matrix", duracionMin: 136, año: 1999 },
  { titulo: "Interstellar", duracionMin: 169, año: 2014 },
  { titulo: "Dunkirk", duracionMin: 106, año: 2017 },
];

const peliculaHora = peliculas.map((peli) => {
  const horas = peli.duracionMin / 60;
  return { ...peli, duracionHora: horas.toFixed(1) };
});

console.log(peliculaHora);
