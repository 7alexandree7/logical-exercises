//4. Gerar um resumo de carrinho de compras
//Dado um array de produtos no carrinho,
//gere um resumo no formato "Produto X (2x) - Produto Y (1x)".

interface Product2 {
  name: string,
  quantity: number
}


const cart: Product2[] = [
    { name: "Teclado", quantity: 2 },
    { name: "Mouse", quantity: 1 },
    { name: "Monitor", quantity: 1 }
  ];

const cartMap: string[] = cart.map((item) => {
    return `${item.name} (${item.quantity}x)`
})

 const cartString: string = cartMap.join(" - ")
 console.log(cartString)
  // TODO: Criar uma string no formato:
  // "Teclado (2x) - Mouse (1x) - Monitor (1x)"
  