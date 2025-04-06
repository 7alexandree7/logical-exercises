// Crie uma função que retorna o primeiro item que aparece mais de uma vez
// Resultado esperado: 'a

const items: string[] = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'i', 'j']

const findFirstDuplicate = (array: string[]) => {

    const vistos = new Set()

    for (const item of array) {        
        if (vistos.has(item)) return item
        vistos.add(item)
    }

    return null
}

console.log(findFirstDuplicate(items)) 