//Transformar array em objeto indexado
//Transforme um array de { id, name } em um objeto no formato { [id]: name }.

type Users22 = {
    id: number,
    name: string
}

const users22: Users22[] = [
    {id: 100, name: 'alexandre'},
    {id: 200, name: 'andre'},
    {id: 300, name: 'andreia'},
    {id: 400, name: 'andreza'},
]

const indexUsers22 = users22.reduce((acumulador: any, itemAtual: any) => {

    acumulador[itemAtual.id] = itemAtual.n
    return acumulador

}, {} as Record<number, Users22>)

console.log(indexUsers22)
// { '100': { id: 100, name: 'alexandre' },