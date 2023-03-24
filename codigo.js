var textoEntrada = document.querySelector(".texto-entrada");
var textoSalida = document.querySelector(".texto-salida");

function btnEncriptar(){
    var textoEncriptado = encriptar(textoEntrada.value);
    textoSalida.value = textoEncriptado;
    textoEntrada.value = "";
    textoSalida.style.backgroundImage = "none";
    document.getElementById("copiarbtn").style.display = 'block';
}

function encriptar(encriptacion){
    var codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    encriptacion = encriptacion.toLowerCase()

    for( var i = 0; i < codigo.length; i++){
        if(encriptacion.includes(codigo[i][0])){
            encriptacion = encriptacion.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }
    return encriptacion;
}

function btnDesencriptar(){
    var textoDesencriptado = desencriptar(textoEntrada.value);
    textoSalida.value = textoDesencriptado;
    textoEntrada.value = "";
    textoSalida.style.backgroundImage = "none";
    document.getElementById("copiarbtn").style.display = 'block';
}

function desencriptar(desencriptacion){
    var codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    desencriptacion = desencriptacion.toLowerCase();

    for( var i = 0; i < codigo.length; i++){
        if(desencriptacion.includes(codigo[i][1])){
            desencriptacion = desencriptacion.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }
    return desencriptacion;
}

function btnCopiar(){
    var copiarTexto = document.getElementById("parrafo");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
}

