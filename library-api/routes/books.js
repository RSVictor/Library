const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

module.exports = (upload) => {
    // Rota para criar um novo livro (POST)
    router.post('/', upload.single('image'), async (req, res) => {
        try {
            const { code, title, author, year, gender, amount, description } = req.body;

            // Caminho da imagem (caso tenha sido enviada)
            const image = req.file ? req.file.path : '';

            const newBook = new Book({
                code, title, author, year, gender, amount, description, image
            });

            await newBook.save();
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar livro', error });
        }
    });

    // Rota para buscar todos os livros (GET)
    router.get('/', async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar os livros', error });
        }
    });

    // Rota para atualizar um livro pelo ID (PUT)
    router.put('/:id', async (req, res) => {
        const { code, title, author, year, gender, amount, description, image } = req.body;
        try {
            const updatedBook = await Book.findByIdAndUpdate(
                req.params.id,
                { code, title, author, year, gender, amount, description, image },
                { new: true }
            );
            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar livro', error });
        }
    });

    // Rota para deletar um livro pelo ID (DELETE)
    router.delete('/:id', async (req, res) => {
        try {
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Livro deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar livro', error });
        }
    });

    return router;
};
