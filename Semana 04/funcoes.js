const axios = require('./api.js');

exports.cadastrarTarefa = async function() {
  try {
    let id = prompt('Digite o ID: ');
    let descricao = prompt('Digite a descrição: ');
    let response = await axios.api.post('/tarefas', {
      id: id,
      descricao: descricao,
      status: 'Pendente'
    });
    console.log('Tarefa cadastrada com sucesso!');
  }
  catch (erro) {
    console.log('Ocorreu um erro ao cadastrar a nova tarefa');
  }
}

exports.alterarTarefa = async function() {
  try {
    let id = prompt('Digite o ID da tarefa que será alterada: ');
    let descricao = prompt('Digite a nova descrição para a tarefa: ');
    let response = await axios.api.put('/tarefas/' + id, {
      id: id,
      descricao: descricao,
      status: 'Pendente'
    });
    console.log('Tarefa alterada com sucesso!');
  }
  catch (erro) {
    console.log('Ocorreu um erro ao alterar a tarefa');
  }
}

exports.concluirTarefa = async function() {
  let id = prompt('Digite o ID da tarefa que será concluída: ');
  try {
    let response = await axios.api.get('/tarefas');
    for (data of response.data) {
      if (id === data.id) {
        let response = await axios.api.put('/tarefas/' + id, {
          id: data.id,
          descricao: data.descricao,
          status: 'Concluída'
        });
      }
    }
    console.log('Tarefa concluída com sucesso!');
  }
  catch (erro) {
    console.log('Ocorreu um erro ao concluir a tarefa');
  }
}

exports.excluirTarefa = async function() {
  try {
    let id = prompt('Digite o ID da tarefa que será excluída: ');
    let response = await axios.api.delete('/tarefas/' + id);
    console.log('Tarefa excluída com sucesso!');
  }
  catch (erro) {
    console.log('Ocorreu um erro ao excluir a tarefa');
  }
}

exports.listarTarefasPendentes = async function() {
  let arrPendentes = [];
  try {
    let response = await axios.api.get('/tarefas');
    for (data of response.data) {
      if (data.status === 'Pendente') {
        arrPendentes.push(data);
      }
    }
    console.table(arrPendentes);
  }
  catch (erro) {
    console.log('Ocorreu um erro ao buscar as tarefas pendentes');
  }
}

exports.listarTarefasConcluidas = async function() {
  let arrConcluidas = [];
  try {
    let response = await axios.api.get('/tarefas');
    for (data of response.data) {
      if (data.status === 'Concluída') {
        arrConcluidas.push(data);
      }
    }
    console.table(arrConcluidas);
  }
  catch (erro) {
    console.log('Ocorreu um erro ao buscar as tarefas concluídas');
  }
}