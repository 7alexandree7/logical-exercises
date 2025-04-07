//Buscar produto pelo ID
//Crie uma função que receba o id e retorne o produto correspondente de um array.

interface Iproduct6 {
    id: number;
    name: string;
    price: number
}

const products6: Iproduct6[] = [

    { id: 1, name: 'mochila de viagem', price: 300 },
    { id: 2, name: 'cadeira gamer', price: 2000 },
    { id: 3, name: 'aspirador de po', price: 140 },
    { id: 4, name: 'Headset', price: 620 },
    { id: 5, name: 'Copo termico', price: 300 },
]

const dd = (array: Iproduct6[], id: number) => {

    return array.find((item) => item.id === id);
}


const result = dd(products6, 2)
console.log(result) 
