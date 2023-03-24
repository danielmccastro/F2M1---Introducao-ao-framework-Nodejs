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