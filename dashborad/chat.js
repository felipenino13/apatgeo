// Obtén una referencia al campo de entrada y al botón
var inputCampo = document.getElementById("floatingTextarea2");
var enviarButton = document.getElementById("enviar");

// Agrega un oyente de eventos al campo de entrada
inputCampo.addEventListener("input", function() {
  // Verifica si el campo de entrada tiene texto
  if (inputCampo.value.trim() !== "") {
    // Si tiene texto, elimina la clase "disabled" del botón
    enviarButton.classList.remove("disabled");
  } else {
    // Si no tiene texto, agrega la clase "disabled" al botón
    enviarButton.classList.add("disabled");
  }
});

function chat(){
    let x = "El predio en la vereda Arenillo ubicado en el municipio de Pradera tiene una apreciación productiva mala debido a su rango de pendiente de 50% a 75%.<br> Te recomiendo las siguientes veredes con actitud productiva entre mediana y buena.<br>&#8226; Bolo Hartonal<br>&#8226; La Tupia<br>&#8226; La Granja<br>&#8226; La Floresta<br>&#8226; Lomitas<br>&#8226; El recreo"
    
    //obtiene el valor del input text
    var inputElement = document.getElementById("floatingTextarea2");
    var valorInput = inputElement.value;

    //muestra el contenido de chat user es decir la foto y el texto
    document.getElementById('objchatuser').style.display = "flex";
    
    inputElement.value = "";
    document.getElementById('pregunta').innerHTML = valorInput;

    //oculta los mensajes recomendacion
    document.getElementById('msj01').style.display = "none";
    document.getElementById('msj02').style.display = "none";

    //mostrar el spinner del chat
    document.getElementById('cargador').style.display = "flex";

    setTimeout(function() {
        document.getElementById('cargador').style.display = "none";
        document.getElementById('txtchat').style.display = "flex";
        document.getElementById('objchatapp').style.display = "flex";
        document.getElementById('objchatapp').style.background = "#E8F3EE";
        document.getElementById('txtchat').innerHTML = x;
        console.log("¿Cómo estás?");
      }, 3000);
    

    

    console.log(valorInput)

    document.getElementById("enviar").classList.add("disabled");

    
};

