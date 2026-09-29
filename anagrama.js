//Dadas dos cadenas de texto (strings) llamadas s y t,
//escribe una función que devuelva true si t es un anagrama de s,*
//  y false en caso contrario.
//Un anagrama es una palabra formada reordenando las letras de otra palabra diferente,
// usando todas las letras originales exactamente una vez.

const s1 = "anagrama";
const t1 = "nagarama";

function anagrama(s, t) {
  if (s.length !== t.length) return false; //si son de difente largo es falso

  const conteo = new Map(); //creamos un mapa para contar las letras

  for (let i = 0; i < s.length; i++) {
    const letra = s[i]; //guardamos la cuenta de cada letra
    const cantidadActual = conteo.get(letra) || 0; //buscamos la letra y usamos Cero si no existe
    conteo.set(letra, cantidadActual + 1); //la primera vez es Cero, sumo uno y guardamos
  }

  for (let i = 0; i < t.length; i++) {
    const letra = t[i];
    if (!conteo.get(letra)) return false;
    if (!conteo.get(letra)) return false;
  }
  return true;
}

console.log("anagrama", "nagarama");
