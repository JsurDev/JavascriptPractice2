//Formateo de nombres

//Ejecusion de funcion
procesarUsuario("jesur","surcer",mayusculaName);
procesarUsuario("jesur","surcer",saludo);


function procesarUsuario(nombre,apellido,callback){
    let nombreCompleto= nombre + " " +apellido;
    callback(nombreCompleto);
}

//Callback funcion 1
function mayusculaName(nombreCompleto){
    let nombreMayuscula=nombreCompleto.toUpperCase();
    console.log(nombreMayuscula);
}

//Callback funcion 2
function saludo(nombreMayuscula){
    console.log("Hola futuro Dev" + nombreMayuscula);
}