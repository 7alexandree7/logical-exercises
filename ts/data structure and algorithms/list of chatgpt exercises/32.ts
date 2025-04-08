//Transformar array em objeto indexado
//Transforme um array de { id, name } em um objeto no formato { [id]: name }.

type Iuser45 = {
    id: number,
    name: string
}

const user45: Iuser45[] = [
    {id: 10, name: 'John'},
    {id: 20, name: 'Jane'},
    {id: 30, name: 'Doe'},
    {id: 40, name: 'Smith'},
    {id: 50, name: 'Emily'},
]

const indexUsers45 = user45.reduce((acumulador: any, itemAtual: any) => {
    acumulador[itemAtual.id] = itemAtual
    return acumulador
}, {} as Record<number, Iuser45>)


console.log(indexUsers45) 
// { '10': { id: 10, name: 'John' },