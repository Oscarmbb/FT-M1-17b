function BinarioADecimal(num) {
  // tu codigo aca
  var sumatoria = 0;
  for (var i = 0; i < num.length; i++) {
    sumatoria = sumatoria + num[i] * 2**(num.length-1-i);
  }
  return sumatoria;
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = '';
  while (num>=1) {
    binario = num%2 + binario;
    num = Math.floor(num/2);
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
