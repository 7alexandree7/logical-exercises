/* 
🚀 Exercícios Iniciantes - Métodos de Array
📝 1. Criando e Manipulando um Array
Crie um array chamado numeros com os números de 1 a 5 e:

Adicione o número 6 ao final do array.
Remova o primeiro elemento do array.
Exiba o array final no console.
*/


const numeros = [1, 2, 3, 4, 5]

const addNumberLastIndex = numeros.push(6)
const removeNumerFirstIndex = numeros.shift()

console.log(numeros)
