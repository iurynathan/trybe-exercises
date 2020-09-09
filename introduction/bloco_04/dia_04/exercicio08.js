let arrayNumbers = [2, 4, 6, 7, 10, 0, -3];;
let arrayNumberLow = 0

function menorValor(arrayNumbers) {
  for (let key in arrayNumbers) {
    if (arrayNumbers[arrayNumberLow] > arrayNumbers[key]) {
      arrayNumberLow = key
    }
  }
  return arrayNumberLow
}

console.log(menorValor(arrayNumbers))