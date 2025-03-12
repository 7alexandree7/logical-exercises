//Dado um array de nomes,
//  transforme cada nome para o formato Title Case (primeira letra maiúscula e o restante minúsculo).

const words2: string[] = ["comer", "andar", "beber", "jogar", "dormir"]

const myWords = words2.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
console.log(myWords)