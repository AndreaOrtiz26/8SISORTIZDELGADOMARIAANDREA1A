function calcularUtilidad() {
    var antiguedad = parseFloat(prompt("Introduce la antiguedad en anios:"));
    var salarioMensual = parseFloat(prompt("Introduce el salario mensual:"));

    var porcentajeUtilidad = 0;
    if (antiguedad < 1) {
      porcentajeUtilidad = 0.05;
    } else if (antiguedad >= 1 && antiguedad < 2) {
      porcentajeUtilidad = 0.07;
    } else if (antiguedad >= 2 && antiguedad < 5) {
      porcentajeUtilidad = 0.1;
    } else if (antiguedad >= 5 && antiguedad < 10) {
      porcentajeUtilidad = 0.15;
    } else {
      porcentajeUtilidad = 0.2;
    }

    var utilidad = salarioMensual * porcentajeUtilidad;
    alert("La utilidad es: $" + utilidad);
  }