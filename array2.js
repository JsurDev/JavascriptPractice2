/*
Escribe una función llamada reverseArray(arr) 
que reciba un arreglo y invierta el orden de 
sus elementos modificando el 
arreglo original (in-place).*/

let misFrutas = ["manzana", "pera", "lima", "bananas"];

for (let i = 0; i < misFrutas.length; i++) {
  console.log(misFrutas[i]);
}

console.log("esto es solo un separador entre los FOR LOOPS");

//arreglo invertido
for (let i = misFrutas.length - 1; i >= 0; i--) {
  console.log(misFrutas[i]);
}

//                   1         2        3         4 (-1)
//let misFrutas = ["manzana", "pera", "lima", "bananas"];
//  INDICE           0         1        2         3
