const listaDeEmail: string[] = [
    "tHr3oexample.com",
    "Xeqo0@example.com",
    "XhGtZ@example.com",
    "tHr3oexample.com",
]
// TODO: Criar um novo array sem elementos repetidos

const uniqueEmails: string[] = listaDeEmail.filter((email: string, index: number, array: string[]) => {
    return array.indexOf(email) === index
}) 

console.log(uniqueEmails)
