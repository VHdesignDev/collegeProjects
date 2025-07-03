// Importar o módulo Express
const express = require('express');

// Criar uma instância do Express
const app = express();

// Definir a porta em que o servidor irá escutar
const porta = 3000;

// Configurar uma rota simples para a raiz do servidor
app.get('/', (req, res) => {
  res.send(`O servidor está rodando na porta ${porta}`);
});

// Iniciar o servidor Express na porta especificada
app.listen(porta, () => {
  console.log(`Servidor Express está ouvindo na porta ${porta}`);
});
