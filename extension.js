function validar() {
  // Creamos las variables que vamos a usar una por cada pregunta
  var txtNombre = document.getElementById("nombre").value;
  var txtApellidos = document.getElementById("apellidos").value;

  if (txtNombre == null || txtNombre.length == 0) {
    var x1 = document.getElementById("nombrelab");
    x1.style.color = "red";
    alert("ERROR: El Nombre de Presupuesto no debe ir vacío");
  } else {
    var x1 = document.getElementById("nombrelab");
    x1.style.color = "green";
  }

  if (txtApellidos == null || txtApellidos.length == 0) {
    var x2 = document.getElementById("apellidos2");
    x2.style.color = "red";
    alert("ERROR: La cantidad del Presupuesto no debe ir vacío");
  } else {
    var x2 = document.getElementById("apellidos2");
    x2.style.color = "green";
  }

}

var button = document.getElementById("btn-agregar");

button.addEventListener("click", function () {
  event.preventDefault();
  var txtNombre = document.getElementById("nombre").value;
  document.getElementById("nombre").value = ""; // para limpiar el input
  var txtApellidos = document.getElementById("apellidos").value;
  document.getElementById("apellidos").value = ""; // para limpiar el input

  var containerMain = document.getElementById("container"); //contenedor que esta en el html
  var p = document.createElement("div"); // que va a contener el texto
  var elementos = document.createElement("p");
  var hoja = document.createElement("style");
  hoja.innerHTML = "section {border: 2px solid black;}";
  elementos.style.display = "block";

  var newElem1 = document.createElement("BR"); // para un salto de linea
  var newElem2 = document.createElement("BR");
  var newElem3 = document.createElement("BR");
  var newElem4 = document.createElement("BR");
  var text = document.createTextNode("Presupuesto");
  text.id = "node";

  var text2 = document.createTextNode("Nombre del Presupuesto: ");
  var title1 = document.createTextNode(txtNombre);
  var text3 = document.createTextNode("Cantidad del Presupuesto: ");
  var title2 = document.createTextNode(txtApellidos);

  // Boton para borrar cada Alumno
  var x = document.createElement("BUTTON");
  var t = document.createTextNode("Borrar Presupuesto");
  x.appendChild(t);
  // Evento para borrar
  x.addEventListener("click", function () {
    event.preventDefault();
    var check = this.closest("div");
    check.parentNode.removeChild(check);
  });

  p.appendChild(text);
  p.appendChild(newElem1);
  p.appendChild(elementos);

  elementos.appendChild(text2) +
    elementos.appendChild(title1) +
    elementos.appendChild(newElem2);
  elementos.appendChild(text3) +
    elementos.appendChild(title2) +
    elementos.appendChild(newElem3);
    elementos.appendChild(newElem4);
  elementos.appendChild(x);

  document.body.appendChild(hoja);
  containerMain.appendChild(p);
});

// Boton para borrar todos
var borrar = document.getElementById("btn-borrar");

borrar.addEventListener("click", function () {
  var list = document.getElementById("container");
  list.remove();
});
