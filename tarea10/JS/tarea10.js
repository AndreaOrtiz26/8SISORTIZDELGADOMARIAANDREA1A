function calcularComisiones() {
    var sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);
    
    var comisiones = (venta1 + venta2 + venta3) * 0.10;
    var sueldoTotal = sueldoBase + comisiones;
    
    document.getElementById("comisiones").innerHTML = comisiones;
    document.getElementById("sueldoTotal").innerHTML = sueldoTotal;
}