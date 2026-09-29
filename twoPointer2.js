//Dado un arreglo de números enteros llamado nums,
// crea una función que devuelva true si algún valor aparece al menos dos veces en el arreglo,
// y devuelva false si todos los elementos son distintos.

const entrada = [1, 2, 3, 4, 5, 2, 8];

function dosPuntos(numeros) {
  const numActual = new Map();

  for (let i = 0; i < numeros.length; i++) {
    if (numActual.has(numActual)) {
      return true;
    }
    numActual.set(numActual, i);
  }
}

console.log(dosPuntos(entrada));
