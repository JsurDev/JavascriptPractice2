//Dado una palabra , verifica si es un palíndromo.
//Palabra : OSO.

function esPalindromo(palabra) {
  let izquierda = 0;
  let derecha = palabra.length - 1;

  while (izquierda < derecha) {
    if (palabra[izquierda] !== palabra[derecha]) {
      return false;
    }
    izquierda++;
    derecha--;
  }
  return true;
}

console.log(esPalindromo("oso"));
