//Dado um array de produtos,
//encontre um produto específico pelo nome.

type Product = {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Mouse", price: 50 },
    { id: 2, name: "Keyboard", price: 100 },
    { id: 3, name: "Monitor", price: 700 },
  ]

  const searchName: string = "Mouse";

  const product = products.find((prod) => prod.name === searchName)
  console.log(product)