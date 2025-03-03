const precos = [10, 20, 30, 40]
const precosSomados = precos.reduce((total, preco) => total + preco , 0)
console.log(precosSomados)