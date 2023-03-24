# F2M1---Introducao-ao-framework-Nodejs

Curso de introdução ao Nodejs pelo projeto Reprograme-se do Instituto Federal do Espírito Santo
 
---

## Atividade prática da 1ª semana

Faça um programa em JavaScript que receba, via terminal, o nome de 10 alunos e suas respectivas notas recebidas em um determinado curso. Por exemplo:


Nome do aluno: João da Silva
Nota: 89

Nome do aluno: José Maria
Nota: 74

Com os nomes e as notas, calcule:

a) a maior nota e o nome do aluno que a tirou
b) a menor nota e o nome do aluno que a tirou
c) a média de todas as notas
d) a quantidade de alunos aprovados (nota maior ou igual a 60)
e) a quantidade de alunos reprovados (nota menor que 60)

----

## Atividade prática da 2ª semana

Olá!

Esta prática será desenvolvida no repl.it e deverá ser postada nesta tarefa. Tem como objetivo a aplicação dos conhecimentos e recursos que você conheceu nas aulas dessa semana.

Boa produção!

1 - Com base nas informações abaixo sobre o rodízio de veículos, faça um programa em JavaScript, utilizando o Node.js, que receba via linha de comando a placa de um determinado veículo e, baseado no dia da semana em que o programa está sendo executado, determine se esse veículo pode ou não estar em circulação. Para obter o dia da semana, pesquise sobre a classe Date do JavaScript.

O rodízio SP pode parecer um pouco assustador à primeira vista, mas fique tranquilo, a regra para veículos em circulação é bem simples.

A restrição da circulação de carros é feita de acordo com o final da placa do veículo e vale de segunda a sexta-feira. Sendo assim, durante um dia por semana, cada veículo é proibido de circular no centro expandido durante seis horas, na parte da manhã e final da tarde. 

A restrição de circulação é feita de acordo com a tabela abaixo:

2 - Faça um programa em JavaScript utilizando o Node.js que receba, via linha de comando, uma data no formato DD/MM/AAAA, e em seguida escreva essa data por extenso. Por exemplo, se a entrada for "11/01/2023", a saída deve ser "11 de janeiro de 2023".

3 - Faça um programa em JavaScript, utilizando o Node.js que receba dois números via terminal e faça a divisão do primeiro com o segundo número. Se o segundo número for 0, o programa não pode fazer o cálculo e deve avisar ao usuário que houve o erro "Divisão por zero". Para isso, você deve usar o tratamento de exceções (try...catch) para capturar o erro e informar ao usuário.

4 - Escreva um arquivo JSON manualmente com os seguintes dados de pessoas fictícias: Nome completo, Endereço, Nacionalidade, Idade e Sexo. O arquivo deve ter os dados de, no mínimo, 10 pessoas. Após isso, em um programa feito em JavaScript utilizando o Node.js, converta esse arquivo JSON que você acabou de criar em um array e imprima-o na tela.

----

## Atividade prática da 3ª semana
### Sistema de cadastro de carros

Olá!

Nesta tarefa você deverá fazer um sistema em JavaScript, utilizando Node.js, que dê ao usuário 3 opções:

1 - Listar carros
2 - Cadastrar novo carro
3 - Sair do sistema

- Cada carro deve ter as seguintes características: Placa, Nome e Montadora.

- Você deve salvar os dados dos carros em um arquivo JSON.

- Para listar os carros cadastrados, você deve fazer a leitura desse mesmo arquivo.

- Para fazer a escrita e leitura do arquivo criado, use somente as funções assíncronas disponibilizadas pelo módulo fs (funções que não terminam com Sync)

Atenção!

Para as funcionalidades 1 e 2 do sistema, crie funções que retornam uma Promise. Você deve tratar o retorno dessas funções com o async/await.

-----

## Atividade prática da 4ª semana
### Sistema de gerenciamento de tarefas

Olá! Nesta atividade você construirá um sistema em JavaScript, utilizando Node.js, que faça o gerenciamento de tarefas de uma pessoa, de forma que o usuário, ao acessar o sistema, obtenha as seguintes opções:

1 - Cadastrar nova tarefa;

2 - Alterar uma tarefa;

3 - Marcar tarefa como concluída;

4 - Excluir uma tarefa;

5 - Listar tarefas pendentes;

6 - Listar tarefas concluídas;

0 - Sair do sistema.

Cada tarefa deverá possuir os seguintes atributos: {id, descricao, status}.

Na opção 1, ao cadastrar uma tarefa, o usuário deverá informar um ID e a descrição da tarefa. No momento do cadastro, a tarefa deve ser cadastrada com o status "Pendente" automaticamente.

Na opção 2, o único atributo da tarefa que poderá ser alterado é a descrição.

Na opção 3 o usuário deverá informar o ID de uma tarefa e ela deve ter seu status alterado para "Concluída".

Na opção 4 o usuário pode excluir uma tarefa, esteja ela Pendente ou Concluída.

Na opção 5 o sistema deverá imprimir na tela somente as tarefas que estejam com o status Pendente.

Na opção 6 o sistema deverá imprimir na tela somente as tarefas que estejam com o status Concluída.

Na opção 0 o sistema deve enviar uma mensagem de despedida e encerrar a sua execução.

Informações sobre o desenvolvimento

- Esta atividade deverá ser desenvolvida no repl.it. Lá você encontrará a Atividade Prática da Semana 4;
- Você deverá armazenar as tarefas no arquivo db.json
- Para cadastrar, alterar, consultar e excluir tarefas, você deve usar o axios para fazer as requisições correspondentes a estas operações;
- Para levantar um servidor web que retorne o arquivo JSON, use o módulo json-server, como foi mostrado nas aulas.

