const express = require('express');
const router = express.Router();
const Docente = require('./docenteModel');

router.post('/docentes', async (req, res) => {
  const { nome, titulacao, email, lattes } = req.body;

  try {
    const docente = new Docente({ nome, titulacao, email, lattes });
    const newDocente = await docente.save();
    res.status(201).json(newDocente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao cadastrar docente. Por favor, tente novamente.' });
  }
});

router.get('/docentes', async (req, res) => {
  try {
    const docentes = await Docente.find();
    res.status(200).json(docentes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar docentes. Por favor, tente novamente.' });
  }
});

module.exports = router;
