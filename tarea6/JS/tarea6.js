function operarNumeros() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado;
    
    if (num1 === num2) {
      resultado = num1 * num2;
    } else if (num1 > num2) {
      resultado = num1 - num2;
    } else {
      resultado = num1 + num2;
    }
    
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
  }