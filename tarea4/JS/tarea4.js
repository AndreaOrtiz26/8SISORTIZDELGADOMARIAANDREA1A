function calculaPorcentajes() {
    let numHombres = parseFloat(document.getElementById("num_hombres").value);
    let numMujeres = parseFloat(document.getElementById("num_mujeres").value);
    let totalEstudiantes = numHombres + numMujeres;
    let porcentajeHombres = (numHombres / totalEstudiantes) * 100;
    let porcentajeMujeres = (numMujeres / totalEstudiantes) * 100;
    document.getElementById("porcentajes").innerHTML = "Porcentaje de hombres: " + porcentajeHombres + "%" + "<br>" + "Porcentaje de mujeres: " + porcentajeMujeres + "%";
  }
  