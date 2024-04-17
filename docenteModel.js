

const mongoose = require('mongoose');

const docenteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  titulacao: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  lattes: {
    type: String,
    required: true
  }
});

const Docente = mongoose.model('Docente', docenteSchema);

module.exports = Docente;
