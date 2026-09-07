//callback = una funcion que se pasa como argumento a otra funcion

programando(debugueando);


function programando(callback){    
    callback();
    console.log("The best copycat");
}

function debugueando(){
    console.log("Buscando errores");
}

function descansando() {
  console.log("Tomando un café...");
}