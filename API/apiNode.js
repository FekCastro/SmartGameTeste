
// Antes de tudo instalar o MySql com o Node.js
// npm install mysql

var mysql = require('mysql');   //Importa o módulo MySql na variável mysql

//Antes de tudo instalar 
// npm install express  
// var express = require('express');
// var app = express();

const express = require('express');     //Importa a biblioteca express
const app = express();  //Recebe as funções da biblioteca express

const host = 'localhost';   //Declara a constante parte do host da API
const port = 8000;  //Declara a porta onde irá ficar o endereço da API

//
const conexaoBD = mysql.createConnection({  //Declara a constante conexãoDB que recebe a função createConection, que vai conectar com o banco de dados
  host: "localhost",    
  user: "root",
  password: "", 
  database: "ragnarok"
});

//
var games;  //Declara a constante games
conexaoBD.connect(function(erro) {  //Uma função que vai conectar com o banco de dados para fazer o select e exibir os atributos da tabela
  if (erro) throw erro; //Verifica se a conexão está com erro, caso haja ele mostrará o erro, senão continua
  return conexaoBD.query("SELECT * FROM games", function (erro, resultado, campos) { //Seleciona todos os jogos e retorna o resultado como objeto
    if (erro) throw erro;   //Verificar se tem erro na query do banco, caso haja ele mostrará o erro, senão continua
    console.log("Log de fora", resultado);  //Vai printar o resultado da tabela games
    games = resultado;  //O resultado será armazenado em uma vaiárel de fora da função (no caso games)
  });
});

// //
app.get('/listGames', function (requisicaoRest, respostaRest) { //Vai criar o endpoint em listGames, utilizando a função para requizição e resposta do REST
  respostaRest.json(games);   //O objeto games será em formato json na resposta do REST
  console.log("GET", games);  //Envia o ENDPOINT para que alguém receba os dados
})

app.post('/listGames', function (requisicaoRest, respostaRest) { //Vai criar o endpoint em listGames, utilizando a função para requizição e resposta do REST
  respostaRest.json("Funcionou a insercao!");   //O objeto games será em formato json na resposta do REST
  console.log("POST", games);  //Recebe o ENDPOINT quando solicitado
})

app.listen(port, () => {
  console.log(`Servidor está escutando pela porta ${port}`)
  console.log(`Para desigar o servidor: ctr + c`)
});  //Sobe um "servidor" para escutar a porta