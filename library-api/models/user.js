const { type } = require('express/lib/response');
const mongoose = require('mongoose');

// Define o esquema de usuários

const userSchema = new mongoose.Schema({
    customId: { 
        type: Number, 
        unique: true }, 
         // Campo para o ID customizado

    username: { 
        type: String, 
        required: true 
    }, // Nome de usuário obrigatório, mas não único
    
    email: { 
        type: String, 
        required: true, 
        unique: true 
    }, // E-mail obrigatório e único
    
    password: { 
        type: String, 
        required: true 
    }, // Senha obrigatória
    
    status: { 
        type: String, 
        default: 'Ativo' 
    }, // Status do usuário, com valor padrão 'Ativo'
    
    permissions: { 
        type: String, 
        default: 'Usuario' 
    } // Permissões do usuário, com valor padrão 'Usuario'
});

// Hook 'pre-save' para calcular o ID customizado
userSchema.pre('save', async function(next) {
    if (this.isNew) {
        const count = await mongoose.model('User').countDocuments();
        this.customId = count + 1; // Define o customId com base no número atual de usuários + 1
    }
    next();
});

// Exporta o modelo de usuário
module.exports = mongoose.models.User || mongoose.model('User', userSchema);