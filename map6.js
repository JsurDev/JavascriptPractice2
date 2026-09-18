const empleados = [
  { nombre: "Sofía", salarioBase: 1200 },
  { nombre: "Marco", salarioBase: 950 },
  { nombre: "Valeria", salarioBase: 1500 },
  { nombre: "Diego", salarioBase: 800 },
];

const salarioCompleto = empleados.map((emple) => {
  let bono = emple.salarioBase * 0.1;
  let salarioBono = emple.salarioBase + bono;
  return { ...emple, salario: salarioBono.toFixed(2) };
});

console.log(salarioCompleto);
