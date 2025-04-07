//3. Converter um array de objetos para um objeto único
//Transforme um array de objetos em um objeto,
//onde a chave será o id e o valor será o restante do objeto.

type User5 = {
    id: number,
    name: string,
    age: number
}

const users5: User5[] = [
    { id: 1, name: "Alice", age: 15 },
    { id: 2, name: "Bob", age: 12 },
    { id: 3, name: "Charlie", age: 18 }
]

const myObject =Object.assign({}, users5)

const usersObject = users5.reduce((acc, user) => {
    acc[user.id] = user
    return acc
}, {} as Record<number, User5>)

console.log(usersObject)

