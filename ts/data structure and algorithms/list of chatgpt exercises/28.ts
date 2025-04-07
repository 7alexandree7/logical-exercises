//Filtrar usuários ativos
//Receba um array de usuários e retorne apenas os que estão com isActive: true.

interface Userrr {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
}


const meusUsuarios: Userrr[] = [
    {
        id: 1,
        name: 'Alice',
        age: 25,
        isActive: true,
    },

    {
        id: 2,
        name: 'Bob',
        age: 30,
        isActive: false,
    },

    {
        id: 3,
        name: 'Charlie',
        age: 35,
        isActive: true
    }
]


const filtrandoMeusUsuarios =meusUsuarios.filter((user: Userrr) => user.isActive === true)

console.table(filtrandoMeusUsuarios)
console.table(meusUsuarios)