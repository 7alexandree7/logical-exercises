//Ordenar lista de produtos por nome (A-Z)
//Organize um array de produtos com name e price.

interface Iproduct {
    id: number;
    name: string;
    price: number
}

const products22: Iproduct[] = [

    { id: 1, name: 'mochila de viagem', price: 300 },
    { id: 2, name: 'cadeira gamer', price: 2000 },
    { id: 3, name: 'aspirador de po', price: 140 },
    { id: 4, name: 'Headset', price: 620 },
    { id: 5, name: 'Copo termico', price: 300 },

]

const ordenedProducts: Iproduct[] =products22.sort((a, b) => { return  a.name.localeCompare(b.name)} )
console.log(ordenedProducts)