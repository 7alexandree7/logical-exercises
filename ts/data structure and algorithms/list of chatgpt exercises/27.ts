//Descrição: Conte quantas vezes cada letra aparece em uma string.
// "abacaxi" → { a:3, b:1, c:1, x:1, i:1 }

const abacaxi: string = "abacaxi";
const contador: { [key: string]: number } = {};

for (let i = 0; i < abacaxi.length; i++) {
    const letra: string = abacaxi[i];
    if (contador[letra]) {
        contador[letra]++;
    } else {
        contador[letra] = 1;
    }
    }

    console.log(contador)