const prompt = require('prompt-sync')();
const fs = require('fs');

async function incluirCarro() {

  var placa = prompt(`Digite a placa: `);
  var nome = prompt(`Digite o nome: `);
  var montadora = prompt(`Digite a montadora: `);

  var carro = { placa: placa, nome: nome, montadora: montadora };

  try {
    var carros = await obterCarros();
    var lista = JSON.parse(carros).carros;
    await adicionarCarro(lista, carro)
  }
  catch (erro) {
    console.log(`Ocorreu um erro!`);
  }

}

function adicionarCarro(lista, carro) {
  lista.push(carro);
  var json = JSON.stringify({ carros: lista });

  return new Promise((resolve, reject) => {
    fs.writeFile('./bd.json', json, (erro) => {
      if (erro) {
        reject(erro);
      }
      resolve('Carro adicionado com sucesso!');
    })
  })
}

function obterCarros() {
  return new Promise((resolve, reject) => {
    fs.readFile('./bd.json', 'utf-8', (erro, data) => {
      if (erro) {
        reject(erro);
      }
      resolve(data);
    })
  });
}

async function listarCarros() {
  try {
    var carros = await obterCarros();
    var lista = JSON.parse(carros).carros;
    console.table(lista);
  }
  catch (erro) {
    console.log(`Ocorreu um erro!`);
  }
}

async function main() {
  var op;
  do {
    console.log(`Sistema de cadastro de carros
    
    1 - Listar carros
    2 - Cadastrar carros
    0 - Sair
    `)

    op = prompt(`Digite a opção desejada: `);

    switch (op) {
      case '1':
        await listarCarros();
        prompt(`
        Enter para continuar...`);
        console.clear();
        break;
      case '2':
        await incluirCarro();
        prompt(`
        Enter para continuar...`);
        console.clear();
        break;
      case '0':
        console.log(`Obrigado por utilizar o sistema. Até mais!`);
        break;
      default:
        console.log(`Entrada inválida...`);
        break;
    }
  } while (op !== '0');
}

main();