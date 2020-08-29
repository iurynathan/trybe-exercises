let salarioBruto = 3500

let salarioBase = 0

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto * 0.92
} else if (salarioBruto <= 2594.92 && salarioBruto >= 1556.95) {
  salarioBase = salarioBruto * 0.91
} else if (salarioBruto <= 5189.82 && salarioBruto >= 2594.93) {
  salarioBase = salarioBruto * 0.89
} else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - 570.88
} else {
  console.log("Insira um valor de salário")
}

if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioBase = (salarioBase * 0.925) + 142.80
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioBase = (salarioBase * 0.85) + 354.80
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioBase = (salarioBase * 0.775) + 636.13
} else {
  salarioBase = (salarioBase * 0.725) + 869.36
}

console.log(salarioBase)