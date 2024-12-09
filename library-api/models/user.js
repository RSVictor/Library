const { type } = require('express/lib/response');
const mongoose = require('mongoose');

// Define o esquema de usuários

const userSchema = new mongoose.Schema({     
     username: { type: String, required: true }, 
     email: { type: String, required: true, unique: true }, 
     password: { type: String, required: true }, 
     status: { type: String, default: 'Ativo' }, 
     permissions: { type: String, default: 'Usuario' }
    
    });

// Exporta o modelo de usuário
module.exports = mongoose.models.user || mongoose.model('User', userSchema);