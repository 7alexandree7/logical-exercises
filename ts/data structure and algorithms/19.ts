//2. Criar um menu de navegação dinâmico
//Dado um array de rotas, crie um menu de navegação em formato de string.

interface Routes {
    path: string,
    name: string
}

const routes: Routes[] = [
    {path: "/", name: "Home"},
    {path: "/about", name: "Sobre"},
    {path: "/contact", name: "Contato"},
    {path: "/products", name: "Produtos"}
]

// TODO: Transformar o array em uma string no formato:
// "Home | Sobre | Contato"

const arrayTostringConverter: string[] = routes.map((route) => {
    return route.name
})

const ddd: string =  arrayTostringConverter.join(" | ")
console.log(ddd)
