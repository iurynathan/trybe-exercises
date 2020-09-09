let arrayNumbers = [2, 3, 6, 7, 10, 1];
let arrayNumberHigh = 0

function maiorValor(arrayNumbers) {
  for (let key in arrayNumbers) {
    if (arrayNumbers[arrayNumberHigh] < arrayNumbers[key]) {
      arrayNumberHigh = key
    }
  }
  return arrayNumberHigh
}

console.log(maiorValor(arrayNumbers))