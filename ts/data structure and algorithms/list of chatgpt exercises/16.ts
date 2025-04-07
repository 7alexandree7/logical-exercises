//Dada uma frase, conte quantas vezes cada palavra aparece.

const phrase: string = "banana maçã banana uva maçã banana";
const wordsCount: Record<string, number> = {}

phrase.split(" ").forEach((word) => {
    wordsCount[word] = (wordsCount[word] || 0) + 1
})


console.log(wordsCount)


// TODO: Retornar um objeto { banana: 3, maçã: 2, uva: 1 }


