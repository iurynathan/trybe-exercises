// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

/*
1. criar uma função que vai receber um variável com valor n 
2. o valor n sera somando de n até 1 caso seja um valor 5 será 1+2+3+4+5
sendo isso terá quer ser criado uma repetição para somar os valores, como já sabe
qual o valor sera feito com "for".
3. após o laço terá que ser criado uma variável antes da interação com o laço de
repetição para armazenar as somas dos valores somando o valor da variável com a
quantidade de vezes que o laço foi executado
4. após somar tudo sera retornado o valor.
*/


function sumInteger(n) {
  let totalSum = 0
  for (let i = 1; i <= n; i += 1) {
    totalSum = totalSum += i;
  }
  return totalSum;
}

console.log(sumInteger(5))