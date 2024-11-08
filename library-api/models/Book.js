const mongoose = require('mongoose') // Variavel mongoose que irá armazenar
// a conexão futura com o mongo

// Define a estrutura para salvar o livro no banco de dados
const BookSchema = new mongoose.Schema({
// titulo, tipo string, required indica que o parâmetro é obrigatório
customId: {type: Number, unique: true },// Campo para o ID customizado
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

// Hook 'pre-save' para calcular o ID customizado
BookSchema.pre('save', async function(next) {
    if (this.isNew) {
        const count = await mongoose.model('Book').countDocuments();
        this.customId = count + 1; // Define o customId com base no número atual de usuários + 1
    }
    next();
});

module.exports = mongoose.model('Book',BookSchema)