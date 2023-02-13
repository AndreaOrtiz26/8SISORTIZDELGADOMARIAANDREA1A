function calculaCalificacion() {
    let parcial1 = parseFloat(document.getElementById("parcial1").value);
    let parcial2 = parseFloat(document.getElementById("parcial2").value);
    let parcial3 = parseFloat(document.getElementById("parcial3").value);
    let examenFinal = parseFloat(document.getElementById("examen_final").value);
    let trabajoFinal = parseFloat(document.getElementById("trabajo_final").value);
    let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    let calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.3) + (trabajoFinal * 0.15);
    document.getElementById("calificacion_final").innerHTML = "Calificación final: " + calificacionFinal;
  }