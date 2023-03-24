const axios = require('./api.js');
const funcoes = require('./funcoes.js');
const prompt = require('prompt-sync')();

main();

async function main() {
  var op;
  do {
    console.log(`O que você quer fazer?
    
    1 - Cadastrar nova tarefa
    2 - Alterar uma tarefa
    3 - Marcar tarefa como concluída
    4 - Excluir uma tarefa
    5 - Listar tarefas pendentes
    6 - Listar tarefas concluídas
    0 - Sair do sistema
    `)

    op = prompt(`Digite a opção desejada: `);

    switch (op) {
      case '1':
        await funcoes.cadastrarTarefa();
        prompt(`
        Enter para continuar...`);
        console.clear();
        break;
      case '2':
        await funcoes.alterarTarefa();
        prompt(`
        Enter para continuar...`);
        console.clear();
        break;
      case '3':
        await funcoes.concluirTarefa();
        prompt(`
        Enter para continuar...`);
        console.clear();
        break;
      case '4':
        await funcoes.excluirTarefa();
        prompt(`
        Enter para continuar...`);
        console.clear();
        break;
      case '5':
        await funcoes.listarTarefasPendentes();
        prompt(`
        Enter para continuar...`);
        console.clear();
        break;
      case '6':
        await funcoes.listarTarefasConcluidas();
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