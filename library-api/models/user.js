const { type } = require('express/lib/response');
const mongoose = require('mongoose');

// Define o esquema de usuários

const userSchema = new mongoose.Schema({
    username: { type: String, required: true }, // Nome de usuário obrigatório, mas não único
    email: { type: String, required: true, unique: true }, // E-mail obrigatório e único
    password: { type: String, required: true }, // Senha obrigatória
    permissions: { type: String, default: 'Usuario' }
});


// Exporta o modelo de usuário

module.exports = mongoose.model('User', userSchema);