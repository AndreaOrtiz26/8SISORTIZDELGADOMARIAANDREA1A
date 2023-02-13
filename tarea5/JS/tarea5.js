function calculaEdad() {
    let fechaNacimiento = new Date(document.getElementById("fecha_nacimiento").value);
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    document.getElementById("edad").innerHTML = "Tu edad es: " + edad + " años.";
  }