/**
 * En las entrevistas de tecnología,
 * el patrón de Dos Punteros (Two Pointers)
 * no solo se usa para invertir arreglos,
 * sino para comparar elementos desde ambos
 * extremos hacia el centro.
 */

function esPalindromo(texto) {
  let inicio = 0;
  let fin = texto.length - 1;

  while (inicio < fin) {
    if (texto[inicio] !== texto[fin]) {
      return false;
    }
    inicio++;
    fin--;
  }
  return true;
}
//console.log(esPalindromo("hola")); // false
console.log(esPalindromo("reconocer")); // true
