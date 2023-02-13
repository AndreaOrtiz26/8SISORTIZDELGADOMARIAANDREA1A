function calcularPago() {
    var totalCompra = parseFloat(document.querySelector("#totalCompra").value);
    var descuento = parseFloat(document.querySelector("#descuento").value);
    var pagoFinal = totalCompra - (totalCompra * descuento / 100);
    document.querySelector("#pagoFinal").value = pagoFinal.toFixed(2);
  }