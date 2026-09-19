const estudiantes = [
  { nombre: "Rosa", nota: 65 },
  { nombre: "Iván", nota: 88 },
  { nombre: "Toño", nota: 45 },
  { nombre: "Gaby", nota: 92 },
  { nombre: "Pedro", nota: 77 },
];

const notas = estudiantes.map((student) => {
  return {
    ...student,
    notaFinal:
      student.nota <= 59
        ? "reprobado"
        : student.nota >= 60 && student.nota <= 79
          ? "aprobado"
          : "excelente",
  };
});

console.log(notas);
