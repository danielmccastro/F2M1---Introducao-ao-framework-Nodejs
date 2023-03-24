// codigos comentados para execução dos exercicios pelo terminal shell (em arquivos seperados) 

/*
// exercicio 01

const prompt = require("prompt-sync")();

let placa = prompt("Digite a sua placa: ");
rodizio();

function rodizio() {
let data = new Date();
let diaDaSemana = data.getDay();

return ((placa[placa.length - 1] === "1" || placa[placa.length - 1] === "2") && diaDaSemana === 1) || ((placa[placa.length - 1] === "3" || placa[placa.length - 1] === "4") && diaDaSemana === 2) || ((placa[placa.length - 1] === "5" || placa[placa.length - 1] === "6") && diaDaSemana === 3) || ((placa[placa.length - 1] === "7" || placa[placa.length - 1] === "8") && diaDaSemana === 4) || ((placa[placa.length - 1] === "9" || placa[placa.length - 1] === "0") && diaDaSemana === 5) ? console.log("Você não pode cirular hoje!") : console.log("Você pode circular hoje!");
}
*/

/*
// exercicio 02

const prompt = require("prompt-sync")();

let data = prompt("Digite a data (DD/MM/AAAA): ");
const array = data.split("/");
let dia = array[0];
let mes = array[1];
let ano = array[2];

console.log(`${dia} de ${converterMes(mes)} de ${ano}`)

function converterMes(mes) {
  return  mes == "01" ? "janeiro" : mes == "02" ? "fevereiro" : mes == "03" ? "março" : mes == "04" ? "abril" : mes == "05" ? "maio" : mes == "06" ? "junho" : mes == "07" ? "julho" : mes == "08" ? "agosto" : mes == "09" ? "setembro" : mes == "10" ? "outubro" : mes == "11" ? "novembro" : mes == "12" ? "dezembro" : "(mês invalido)"
}
*/

/*
// exercicio 03

const prompt = require("prompt-sync")();

let num01 = prompt("Digite o primeiro número: ");
let num02 = prompt("Digite o segundo número: ");

try {
  if (num02 == 0) {
    throw new Error("Divisão por zero");
  }
  console.log(num01 / num02);
  } catch(ocorrencia) {
  console.log(ocorrencia.message);
  }
*/

/*
// exercicio 04

const fs = require("fs");

var data = fs.readFileSync("./arquivo.json", "utf-8");
var arquivo = JSON.parse(data);
var pessoas = arquivo.pessoas
console.log(pessoas);
*/