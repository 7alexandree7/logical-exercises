//📌 Problema: Implemente uma função que recebe uma lista de palavras e um termo de busca.
//  A função deve retornar apenas as palavras que começam com o termo de busca.

function autoComplete1(words1: string[], searchTerm: string): string[] {
    // Sua implementação aqui
    const filteredWords = words.filter((word) => word.startsWith(searchTerm))
    return filteredWords
  }
  
  // Teste
  const words1 = ["banana", "batata", "maçã", "morango", "manga"];
  console.log(autoComplete1(words1, "m")); 

  