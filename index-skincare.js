// AQUI OCULTAMOS LAS PREGUNTAS

function esconderPreguntas1(){
    document.getElementById("pregunta1").style.display="none";
    document.getElementById("pregunta2").style.display="block";
    document.getElementById("pregunta3").style.display="none";
}

function esconderPreguntas2(){
    document.getElementById("pregunta1").style.display="none";
    document.getElementById("pregunta2").style.display="none";
    document.getElementById("pregunta3").style.display="block";
} 

// AQUI SELECCIONAMOS EL BOTON Y LE ACTIVAMOS LA FUNCION DE ESCONDER LAS PREGUNTAS AL HACERLE CLICK
document.getElementById('siguientePregunta0').addEventListener('click', esconderPreguntas1); 
document.getElementById('siguientePregunta1').addEventListener('click', esconderPreguntas2); 