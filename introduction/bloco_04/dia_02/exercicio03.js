let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sumNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sumNumbers += numbers[i];
}

let medNumbers = sumNumbers / numbers.length;

if (medNumbers > 20) {
  console.log("Valor maior que 20!");
} else {
  console.log("Valor menor que 20!");
}
