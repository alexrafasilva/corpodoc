const express = require('express');
const mongoose = require('mongoose');
const docenteRoutes = require('./docenteRoutes');
const path = require('path');

const app = express();

// serve pra conectar com o banco de dados do MongoDB
mongoose.connect('mongodb://localhost:27017/cadastro_docentes', { useNewUrlParser: true, useUnifiedTopology: true });

//Habilitando o corpo da requisição JSON
app.use(express.json());

//Definindo as rotas para docentes
app.use('/', docenteRoutes);

// Servindo meu front (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
