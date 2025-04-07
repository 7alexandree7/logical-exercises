//6. Criar um botão que alterna entre dois estados
//Simule um botão que alterna entre "Ativo" e "Inativo"
//  cada vez que for chamado.

let status4 = "Ativo";

function alternarStatus() {
    status4 = status4 === "Ativo" ? "Inativo" : "Ativo";
    console.log(status4);
}

alternarStatus(); // "Inativo"
alternarStatus(); // "Ativo"
alternarStatus(); // "Inativo"
