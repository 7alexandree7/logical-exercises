//📌 Problema: Dado um array de nomes, implemente uma função que ordene a lista em ordem alfabética.

const sortNames = (names: string[]): string[] => {
    const sortedNames = [...names].sort()
    return sortedNames

}

const names: string[] = ["xande", "dev", "lol", "aalorant", "bev"]
console.log(sortNames(names))