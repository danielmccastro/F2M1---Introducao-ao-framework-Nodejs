const prompt = require("prompt-sync")();

let placa = prompt("Digite a sua placa: ");
rodizio();

function rodizio() {
let data = new Date();
let diaDaSemana = data.getDay();

return ((placa[placa.length - 1] === "1" || placa[placa.length - 1] === "2") && diaDaSemana === 1) || ((placa[placa.length - 1] === "3" || placa[placa.length - 1] === "4") && diaDaSemana === 2) || ((placa[placa.length - 1] === "5" || placa[placa.length - 1] === "6") && diaDaSemana === 3) || ((placa[placa.length - 1] === "7" || placa[placa.length - 1] === "8") && diaDaSemana === 4) || ((placa[placa.length - 1] === "9" || placa[placa.length - 1] === "0") && diaDaSemana === 5) ? console.log("Você não pode cirular hoje!") : console.log("Você pode circular hoje!");
}