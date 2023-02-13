function leerNumeros() {
    var num1 = parseFloat(prompt("Introduce el primer número:"));
    var num2 = parseFloat(prompt("Introduce el segundo número:"));
    var num3 = parseFloat(prompt("Introduce el tercer número:"));

    var mayor = num1;
    if (num2 > mayor) {
      mayor = num2;
    }
    if (num3 > mayor) {
      mayor = num3;
    }

    alert("El número mayor es: " + mayor);
  }