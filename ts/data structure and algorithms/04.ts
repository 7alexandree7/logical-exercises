//📌 Problema: Implemente uma função que recebe uma lista de palavras e um termo de busca.
//  A função deve retornar apenas as palavras que começam com o termo de busca.

const autoComplete = (words: string[], searchTerm: string): string[] => {
    return words.filter((word) => word.startsWith(searchTerm))
}


const words: string[] = ["xande", "dev", "lol", "valorant", "dev"]
console.log(autoComplete(words, "v"))