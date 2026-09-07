//FUncion para sumar dos numeros

sumarDosNum(displayResultado,8,8);

function sumarDosNum(callback,num1,num2){
   let resultado = num1 + num2;
   callback(resultado);
}

function displayResultado(resultado){
   console.log(resultado);
}

