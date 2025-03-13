// Dado um array de produtos, 
// crie uma string formatada com os nomes e preços separados por vírgula.

interface ProductItems {
    id: number
    name: string
    price: number
}

const produtos: ProductItems[] = [
    {id: 1, name: "Mouse Gamer Razer", price: 500},
    {id: 2, name: "teclado Gamer ReDragon", price: 700},
    {id: 3, name: "Mouse Pad Gamer", price: 200},
    {id: 4, name: "Monitor Ultra wide", price: 2500},
]


const productFormatted = produtos.map(prod => `${prod.name} - R$${prod.price}`);
const stringConverter = productFormatted.join(", ")
console.log(stringConverter)
