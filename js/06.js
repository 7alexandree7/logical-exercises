function mostrarArray() {

    const myArray = ['xande', 'ayo', 'unfast', 'uk', 'hyper', 'oliveira']
    const filteredArray = myArray.filter((item) => item.length > 4)
    console.log(filteredArray)
}

mostrarArray()