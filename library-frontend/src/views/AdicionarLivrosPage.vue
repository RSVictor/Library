<template>
    <div class="container">
        <div class="user">
            <p>Bem vindo, Usuario!</p>
        </div>




        <div class="titulo-emp">

            <span>Adicionar ou editar livros</span>
        </div>


        <div class="teste">
            <div class="perfil-adicionar mt-3">


                <div class="dados  mt-2">
                    <div class="foto-botao">
                        <div class="img-foto">
                            <img src="#" alt="" style="width: 300px;">

                        </div>

                        <form @submit.prevent="enviarFormulario">
                            <div class="button-foto mt-3">
                                <label for="fileInput" class="custom-file-upload " style="cursor: pointer;">
                                    Adicionar Capa
                                </label>
                                <input type="file" id="fileInput" style="display: none; " @change="handleFileUpload">

                            </div>

                        </form>
                    </div>



                    <form @submit.prevent="enviarFormulario">
                        <div class="form-adicionar mt-3">
                            <label for="floatingInput">Código ISBN:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="code">


                            <label for="floatingInput">Título:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="title">

                            <label for="floatingInput">Autor:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="author">

                            <label for="floatingInput">Ano de pulblicação:</label>
                            <input type="number" class="form-control" id="floatingInput" placeholder="" v-model="year">

                            <label for="floatingInput">Gênero:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="gender">

                            <label for="floatingInput">Quantidade:</label>
                            <input type="number" class="form-control" id="floatingInput" placeholder=""
                                v-model="amount">

                        </div>
                    </form>

                </div>
            </div>
        </div>
        <form @submit.prevent="enviarFormulario">
            <div class="caixa mt-5">
                <div class="form-descricao ">
                    <label for="floatingInput">Descrição:</label>
                    <input type="text" class="form-control" id="floatingInput" style="height: 150px;"
                        v-model="description">


                    <div class="button-perfil-user mt-5">
                        <div class="button-salvar">
                            <router-link to="/adicionarLivro" class="button-link">
                                <i class="bi bi-plus-lg"></i>
                                <span class="button-text">Adicionar</span>
                            </router-link>
                        </div>
                        <div class="button-salvar">
                            <router-link to="/listalivro" class="button-link" @click="enviarFormulario">
                                <i class="bi bi-check2-square"></i>
                                <span class="button-text">Salvar</span>
                            </router-link>
                        </div>

                    </div>


                </div>

            </div>
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            code: '',
            title: '',
            author: '',
            year: '',
            gender: '',
            amount: '',
            description: '',
            image: null,
        };
    },
    methods: {
        handleFileUpload(event) {
            this.coverImage = event.target.files[0];
        },
        async enviarFormulario() {
            const formData = new FormData();
            formData.append('code', this.code);
            formData.append('title', this.title);
            formData.append('author', this.author);
            formData.append('year', this.year);
            formData.append('gender', this.gender);
            formData.append('amount', this.amount);
            formData.append('description', this.description);
            if (this.image) {
                formData.append('image', this.image);
            }

            try {
                const response = await axios.post('http://localhost:3000/api/books', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Livro adicionado:', response.data);
                alert('Livro cadastrado com sucesso!');
                this.$router.push('/listalivro');
            } catch (error) {
                console.error('Erro ao adicionar livro:', error);
                alert('Erro ao cadastrar o livro.');
            }
        },
    },
};
</script>
