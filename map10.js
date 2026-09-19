const pedidos = [
  {
    id: 1,
    cliente: { nombre: "Ana", email: "ana@mail.com" },
    envio: { ciudad: "Bogotá", metodo: "express" },
    productos: ["laptop", "mouse"],
  },
  {
    id: 2,
    cliente: { nombre: "Luis", email: "luis@mail.com" },
    envio: { ciudad: "Quito", metodo: "estandar" },
    productos: ["teclado"],
  },
  {
    id: 3,
    cliente: { nombre: "Marta", email: "marta@mail.com" },
    envio: { ciudad: "Lima", metodo: "express" },
    productos: ["monitor", "cable", "soporte"],
  },
];

/*
{
  id: 1,
  clienteNombre: "Ana",
  ciudadEnvio: "Bogotá",
  esExpress: true,          // true si metodo === "express", false si no
  totalProductos: 2         // cuántos productos tiene el array "productos"
}
 */

const nuevoPedido = pedidos.map((ped) => {
  return {
    id: ped.id,
    clienteNombre: ped.cliente.nombre,
    ciudadEnvio: ped.envio.ciudad,
    esExpress: ped.envio.metodo === "express",
    totalProductos: ped.productos.length,
  };
});

console.log(nuevoPedido);
