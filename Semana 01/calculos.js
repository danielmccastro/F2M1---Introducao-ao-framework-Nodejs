exports.registroAlunos = function() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    let nome = prompt("Digite o nome do aluno: ");
    let nota = parseFloat(prompt("Digite a nota do aluno: "));
    let aluno = { nome, nota };
    array.push(aluno);
  }
  for (let aluno of array) {
    console.log(`------\nNome do aluno: ${aluno.nome}\nNota do aluno: ${aluno.nota}`);
  }
  console.log(`------`);
  return alunos = [...array];
}

exports.maiorNota = function(alunos) {
  let maiorNota = 0;
  for (let aluno of alunos) {
    if (aluno.nota > maiorNota) {
      maiorNota = aluno.nota;
    }
  }
  const maioresNotas = alunos.filter(aluno => aluno.nota === maiorNota);
  for (let alunoMaiorNota of maioresNotas) {
    console.log(`A MAIOR nota foi ${alunoMaiorNota.nota} de ${alunoMaiorNota.nome}`);
  }
}

exports.menorNota = function(alunos) {
  let menorNota = 100;
  for (let aluno of alunos) {
    if (aluno.nota <= menorNota) {
      menorNota = aluno.nota;
    }
  }
  const menoresNotas = alunos.filter(aluno => aluno.nota === menorNota);
  for (let alunoMenorNota of menoresNotas) {
    console.log(`A MENOR nota foi ${alunoMenorNota.nota} de ${alunoMenorNota.nome}`);
  }
}

exports.media = function(alunos) {
  let i = 0;
  let soma = 0;
  while (i < alunos.length) {
    soma = soma + alunos[i++].nota;
  }
  let media = soma / alunos.length;
  console.log(`A MÉDIA de todas notas foi ${media}`);
}

exports.aprovReprov = function(alunos) {
  let alunosReprovados = 0;
  let alunosAprovados = 0;
  for (let aluno of alunos) {
    if (aluno.nota < 60) {
      alunosReprovados++;
    }
    else {
      alunosAprovados++;
    }
  }
  console.log(`A quantidade de alunos APROVADOS é ${alunosAprovados}\nA quantidade de alunos REPROVADOS é ${alunosReprovados}`);
}