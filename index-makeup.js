// AQUI OCULTAMOS LAS PREGUNTAS

function esconderPreguntas1(){
    document.getElementById("pregunta4").style.display="none";
    document.getElementById("pregunta5").style.display="block";
    document.getElementById("pregunta6").style.display="none";
}

function esconderPreguntas2(){
    document.getElementById("pregunta4").style.display="none";
    document.getElementById("pregunta5").style.display="none";
    document.getElementById("pregunta6").style.display="block";
} 

// AQUI SELECCIONAMOS EL BOTON Y LE ACTIVAMOS LA FUNCION DE ESCONDER LAS PREGUNTAS AL HACERLE CLICK
document.getElementById('siguientePregunta0').addEventListener('click', esconderPreguntas1); 
document.getElementById('siguientePregunta1').addEventListener('click', esconderPreguntas2); 

// VERIFICACION PREGUNTAS
function verificarvalor4(){
  if (document.getElementById("cbox10").checked===true){
    alert ("Felicidades respuesta Correcta");
  }
    else {
    alert ("Respuesta Incorrecta");
   }
}

function verificarvalor5(){
  if (document.getElementById("cbox15").checked===true){
    alert ("Felicidades respuesta Correcta");
  }
    else {
    alert ("Respuesta Incorrecta");
   }
}

function verificarvalor6(){
  if (document.getElementById("cbox17").checked===true){
    alert ("Felicidades respuesta Correcta");
  }
    else {
    alert ("Respuesta Incorrecta");
   }
}