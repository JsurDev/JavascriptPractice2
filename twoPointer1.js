//twoSum([2, 7, 11, 15], 9);
nums = [2, 7, 11, 15];
target = 9;

function twoSum(nums, target) {
  const mapa = new Map();

  for (let i = 0; i < nums.length; i++) {
    const numActual = nums[i];
    const complemento = target - numActual;

    // Si el complemento ya está en nuestro mapa, encontramos la respuesta
    if (mapa.has(complemento)) {
      return [mapa.get(complemento), i];
    }

    // Si no está, guardamos el número actual como clave y su índice como valor
    mapa.set(numActual, i);
  }

  return []; // En caso de que no haya solución
}
console.log(twoSum(nums, target)); // ← esta línea faltaba