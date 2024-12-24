const checkPalindromo = (palavra) => {

    const reverse = palavra.split('').reverse().join('')
    if (reverse === palavra) {
        console.log('E palindromo')
        console.log(reverse)
    }

    else {
        console.log('não é')
        console.log(reverse)
    }
}


checkPalindromo('arara')
