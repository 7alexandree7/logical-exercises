// Dado dois arrays de nomes,
// crie um novo array contendo todos os nomes sem duplicatas.

const array01: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
const array02: string[] = ["Bob", "Charlie", "Frank", "Grace", "Hank"];

const newArray: string[] = [...new Set([...array01, ...array02])];
console.log(newArray)
