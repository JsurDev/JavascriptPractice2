const pedidos = [
  { cliente: "Ana", total: 45, envioGratis: false },
  { cliente: "Luis", total: 120, envioGratis: false },
  { cliente: "Marta", total: 30, envioGratis: false },
  { cliente: "Kevin", total: 80, envioGratis: false },
];

const nuevoPedido = pedidos.map((pedCliente) => {
  return { ...pedCliente, verificandoEnvio: pedCliente.total >= 75 };
});

console.log(...pedidos, nuevoPedido);
