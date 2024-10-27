const mongoose = require('mongoose') // Variavel mongoose que irá armazenar
// a conexão futura com o mongo

// Define a estrutura para salvar o livro no banco de dados
const BookSchema = new mongoose.Schema({
// titulo, tipo string, required indica que o parâmetro é obrigatório
code:{ type: Number},
title: { type: String, required: true},
author:{ type: String, required: true},
year:{ type:Number},   
gender: { type: String, required: true},
amount: { type: Number},
description:{ type: String, required: true},
image: { type: String }, 
});
// exportando o modelo para salvar os livros

module.exports = mongoose.model('Book',BookSchema)