const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Book = require('../models/Book');
const express = require('express');
const router = express.Router();

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Garante um nome único para o arquivo
    }
});

// Instância do Multer configurado
const upload = multer({ storage: storage });

// Função exportada que configura as rotas
module.exports = (upload) => {
    // Rota para criar um novo livro (POST)
    router.post('/', upload.single('image'), async (req, res) => {
        try {
            console.log('Dados recebidos:', req.body);  // Log dos dados
            console.log('Arquivo da imagem:', req.file); // Log do arquivo

            const { code, title, author, year, gender, amount, description } = req.body;

            // Caminho da imagem (caso tenha sido enviada)
            const image = req.file ? req.file.path : '';

            const newBook = new Book({
                code, title, author, year, gender, amount, description, image
            });

            await newBook.save();
            res.status(201).json(newBook);
        } catch (error) {
            console.error('Erro ao criar livro:', error);  // Log do erro
            res.status(500).json({ message: 'Erro ao criar livro', error });
        }
    });

    // Outras rotas para buscar livros, atualizar, deletar etc.
    router.get('/', async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar os livros', error });
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }
            res.status(200).json(book);  // Retorna o livro encontrado
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar o livro', error });
        }
    });

    router.put('/:id', upload.single('image'), async (req, res) => {
        try {
            const { code, title, author, year, gender, amount, description } = req.body;
            let image = req.file ? req.file.path : undefined; // Se houver uma imagem, pega o caminho

            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }

            // Se o livro já tem uma imagem e uma nova foi enviada, deletamos a antiga
            if (book.image && image) {
                const oldImagePath = path.join(__dirname, '..', book.image); // Corrige o caminho da imagem
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error('Erro ao deletar a imagem antiga:', err);
                    }
                });
            }

            // Atualizar os dados do livro
            const updatedBook = await Book.findByIdAndUpdate(
                req.params.id,
                { code, title, author, year, gender, amount, description, image: image || book.image }, // Se não houver nova imagem, mantém a antiga
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
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }

            // Deletar a imagem associada ao livro, se existir
            if (book.image) {
                const filePath = path.join(__dirname, '..', book.image);
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('Erro ao deletar a imagem:', err);
                        return res.status(500).json({ message: 'Erro ao deletar a imagem do livro', error: err });
                    }
                });
            }

            // Deletar o livro do banco de dados
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Livro deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar livro', error });
        }
    });

    // Retorne o router configurado
    return router;
};
