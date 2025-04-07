// Crie uma função que retorna o primeiro item que aparece mais de uma vez
// Resultado esperado: 'a

const itens7: string[] = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'i', 'j']


const firstDuplicate2 = (array: string[]) => {

    const valoresChecados = new Set()

    for( const item of array) {
        if(valoresChecados.has(item)) return item
        valoresChecados.add(item)
    }
    return null
}

console.log(firstDuplicate2(itens7)) 