const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
require("dotenv").config(); /// Não
// Middleware to parse URL-encoded bodies (optional, but useful for form submissions)
//app.use(express.urlencoded({ extended: true }));

// Your routes here

// Função para registrar novos usuários
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Verifica se o e-mail já está em uso
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'E-mail já cadastrado' });
        }

        // Criptografa a senha antes de salvar no banco
        const hashedPassword = await bcrypt.hash(password, 10); 

        // Cria um novo usuário
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save(); // Salva o usuário no banco de dados

        res.status(201).json({ message: 'Usuário registrado com sucesso' }); 
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
};

// Função para fazer login de usuários
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca usuário pelo email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json(
            { error: 'Usuário não encontrado' });

        // Compara a senha fornecida com a senha armazenada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({
             error: 'Senha incorreta' });

        // Cria web token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, 
            { expiresIn: '1h' });
       // res.json({ token });
        res.status(200).json({message: "Login realizado"});
    } catch (error) {
        console.error(error); // Loga o erro
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};