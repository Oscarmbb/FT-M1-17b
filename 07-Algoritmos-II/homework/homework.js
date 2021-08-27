// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
   var arreglo1 = [];
   var arreglo2 = [];
   if (array.length > 1) {
     for (var i = 1; i < array.length; i++) {
       if (array[i] >= array[0]) arreglo2.push(array[i]);
        else arreglo1.push(array[i]);
     }
     return [].concat(quickSort(arreglo1), array[0], quickSort(arreglo2));
    // console.log(arreglounido);
    } else {
      return array;
    }
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var arreglo1 = [];
  var arreglo2 = [];
  if (array.length > 1) {
    for (var i = 0; i < Math.floor(array.length/2); i++)
      arreglo1.push(array[i]);
    for (var i = Math.floor(array.length/2); i < array.length; i++)
      arreglo2.push(array[i]);
    return unir(mergeSort(arreglo1), mergeSort(arreglo2));
  } else
      return array;
}

function unir(arreglo1, arreglo2) {
  var arreglounido = [];
  var i = 0;
  var j = 0;
  while (i < arreglo1.length && j < arreglo2.length) {
      if (arreglo1[i] < arreglo2[j]) {
        arreglounido.push(arreglo1[i]);
        i++;
      } else if (arreglo1[i] > arreglo2[j]) {
          arreglounido.push(arreglo2[j]);
          j++;
        } else {
            arreglounido.push(arreglo1[i]);
            arreglounido.push(arreglo2[j]);
            i++;
            j++;
      }
  }
  if (i === arreglo1.length) {
    for (var k = j; k < arreglo2.length; k++)
      arreglounido.push(arreglo2[k]);
  } else {
    for (var k = i; k < arreglo1.length; k++)
      arreglounido.push(arreglo1[k]);
  }
  return arreglounido;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
