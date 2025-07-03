const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let tarefas = [
    { id: 1, descricao: 'Comprar leite', concluida: false },
    { id: 2, descricao: 'Pagar contas', concluida: false },
];

// Listar   -> http://localhost:3000/tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// Nova tarefa
app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;
    novaTarefa.id = tarefas.length + 1;
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// http://localhost:3000/tarefas/1
app.get('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        res.json(tarefa);
    } else {
        res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }
});

// Atualizar
app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarefaIndex = tarefas.findIndex(t => t.id === id);
    if (tarefaIndex !== -1) {
        tarefas[tarefaIndex] = req.body;
        tarefas[tarefaIndex].id = id;
        res.json(tarefas[tarefaIndex]);
    } else {
        res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }
});

// remover
app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarefaIndex = tarefas.findIndex(t => t.id === id);
    if (tarefaIndex !== -1) {
        tarefas.splice(tarefaIndex, 1);
        res.json({ mensagem: 'Tarefa excluída com sucesso' });
    } else {
        res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }
});

app.listen(port, () => {
    console.log(`API REST de tarefas em execução na porta ${port}`);
});
