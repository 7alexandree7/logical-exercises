//5. Trocar os valores de duas variáveis sem criar uma variável extra
//Dado dois valores, troque-os sem criar uma variável temporária.

let a: string = "azul";
let b: string = "vermelho";

[a, b] = [b, a];

// TODO: Trocar os valores de `a` e `b`
console.log(a, b); // Deve exibir "vermelho azul"
