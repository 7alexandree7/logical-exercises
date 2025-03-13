//Dada uma string,
//substitua todas as ocorrências de uma palavra específica por outra.

const text: string = "O carro vermelho está estacionado ao lado do carro azul.";
// TODO: Substituir "carro" por "veículo"

const newText: string = text.split(" ").map((word) => word === "carro" ? word.replace("carro", "veículo") : word).join(" ")
console.log(newText)
