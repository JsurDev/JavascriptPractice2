let frutas = ["manzana", "pera", "lima", "bananas"];

console.log(frutas);

//agregamos un elemento
frutas.push("kiwi");
console.log("Utilizando Push para agregar un elemento : " + frutas);

//utilizamos pop para sacar el ultimoelemento
frutas.pop();
console.log("Utilizando Pop para sacar un elemento : " + frutas);

//utilizamos shift para sacar el primoer elemento
frutas.shift();
console.log("Arreglo original : " + frutas);
console.log("Utilizando Shift para sacar un elemento : " + frutas);

//utilizamos el unshift para agregar un elemento al principio
frutas.unshift("Pera");
console.log(
  "Utilizando Unshift para agregar un elemento al principio : " + frutas,
);

//indesOf

let numeroDeFrutas = frutas.length;
console.log("numero de frutas : " + numeroDeFrutas);

let index = frutas.indexOf("lima");
console.log("index de lima : " + index);

//usando un loop

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

let frutaArray = ["manzana", "pera", "lima", "bananas"];

for (fruta of frutaArray) {
  console.log(" ");
  console.log("nuevo arreglo de frutas : " + fruta);
}
