const numRandomico = Math.floor(Math.random() * 10)  + 1
const numUser = 4
let tentativas = 0

while(tentativas <= 5) {
    tentativas += 1
    if(numRandomico != numUser) {
        console.log('errou, tente novamente')
    }

    else {
        console.log('acertou')
        break
    }
}