const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;
  
  if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
    alert("Todos los campos son requeridos");
  } else {
    console.log({ nombre, email, asunto, mensaje });
  }
});
