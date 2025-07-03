const express = require('express');
const bodyParser = require('body-parser');
const Recipe = require('./receitas');

const app = express();
const port = 3000;

// Use bodyParser para analisar o corpo das solicitações
app.use(bodyParser.json());

let recipes = [{id: 1, title: "receita 1", ingredients: "teste 1", preparation: "teste 2"}];

// Cadastrar uma nova receita
app.post('/recipes', (req, res) => {
  const { title, ingredients, preparation } = req.body;
  const id = recipes.length + 1;
  const newRecipe = new Recipe(id, title, ingredients, preparation);
  recipes.push(newRecipe);
  res.json(newRecipe);
});

// Remover uma receita
app.delete('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  recipes = recipes.filter(recipe => recipe.id !== id);
  res.send('Receita removida com sucesso.');
});

// Visualizar uma receita por id
app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find(recipe => recipe.id === id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send('Receita não encontrada.');
  }
});

// Alterar uma receita
app.put('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, ingredients, preparation } = req.body;
  const recipeIndex = recipes.findIndex(recipe => recipe.id === id);

  if (recipeIndex !== -1) {
    recipes[recipeIndex] = { id, title, ingredients, preparation };
    res.json(recipes[recipeIndex]);
  } else {
    res.status(404).send('Receita não encontrada.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
