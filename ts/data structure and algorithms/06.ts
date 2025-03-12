// 📌 Problema: Você recebe um array de palavras e precisa contar quantas vezes cada palavra aparece.
function countOccurrences(words: string[]) {
    words.map((word: string, index: number) => {
        const occurrences = words.filter((w: string) => w === word).length
        console.log(`A palavra ${word} aparece ${occurrences} vezes`)
    })
  }

const wordsList = ["html", "css", "js", "ts", "node", "html", "html" ,"html" ,"html", "css", "js", "ts", "node"]
console.log(countOccurrences(wordsList))