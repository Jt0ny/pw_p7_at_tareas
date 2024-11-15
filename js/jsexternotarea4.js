function subrayarTitulo(idelemento, color) {
    document.getElementById(idelemento).style.backgroundColor = color;
}

function cambiarFuente(idelemento,fuente) {
    document.getElementById(idelemento).style.fontFamily = fuente;
}

function agregarElemento(idelemento, elementoHTML) {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + elementoHTML;
}

function tamanioOpciones(idelemento, tamanio) {
    document.getElementById(idelemento).style.fontSize = tamanio;
}

function estiloTexto(idelemento,estilo) {
    document.getElementById(idelemento).style.fontFamily = estilo;
}

function modificarColorReservados(idelemento,color) {
    document.getElementById(idelemento).style.color = color;
}