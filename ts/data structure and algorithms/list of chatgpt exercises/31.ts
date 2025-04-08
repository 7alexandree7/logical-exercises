//Mapear nomes de usuários
//Dado um array de objetos com name e email, retorne apenas os nomes.

type Userxs = {
    name: string;
    email: string;
}

const userss: Userxs[] = [

    { name: 'alexandre', email: 'tHr3o@example.com'},
    { name: 'pedro', email: 'Xeqo0@example.com'},
    { name: 'maria', email: 'XhGtZ@example.com'},
    { name: 'jose', email: 'tHr3o@example.com'},

]

const retornarNomes = (array: Userxs[]) => {
    return array.map((user) => {
        return {name: user.name}
    })
}

console.log(retornarNomes(userss))