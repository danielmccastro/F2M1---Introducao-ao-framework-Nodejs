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