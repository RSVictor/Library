<template>
    <div class="container">
        <div class="user">
            <p>Bem vindo, Usuario!</p>
        </div>




        <div class="titulo-emp">

            <span>Editar livro</span>
        </div>


        <div class="teste">
            <div class="perfil-adicionar mt-3">


                <div class="dados  mt-2">
                    <div class="foto-botao">
                        <div class="img-foto" v-if="book.image">                         
                            <img :src="formatImagePath(book.image)" alt="" style="width: 300px;">
                        </div>

                      
                        <form @submit.prevent="enviarFormulario">
                            <div class="button-foto mt-3" >
                                <label for="fileInput" class="custom-file-upload " style="cursor: pointer;">
                                    Alterar Capa
                                </label>
                                <input type="file" id="fileInput" style="display: none; " @change="handleFileUpload">

                            </div>

                        </form>
                    </div>



                    <form @submit.prevent="enviarFormulario">
                        <div class="form-adicionar mt-3">
                            <label for="floatingInput">Código ISBN:</label>
                            <input type="text" class="form-control" v-model="book.code" readonly />


                            <label for="floatingInput">Título:</label>
                            <input type="text" class="form-control"  v-model="book.title">

                            <label for="floatingInput">Autor:</label>
                            <input type="text" class="form-control"  v-model="book.author">

                            <label for="floatingInput">Ano de pulblicação:</label>
                            <input type="number" class="form-control"  v-model="book.year">

                            <label for="floatingInput">Gênero:</label>
                            <input type="text" class="form-control" v-model="book.gender">

                            <label for="floatingInput">Quantidade:</label>
                            <input type="number" class="form-control"  v-model="book.amount">

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
      book: {
        code: '',
        title: '',
        author: '',
        year: '',
        gender: '',
        amount: '',
        description: '',
        image: null,        
      },
    };
  },
  mounted() {
    this.fetchBookData();
  },
  methods: {
    async fetchBookData() {
      const bookId = this.$route.params.id;
      console.log('ID do livro:', bookId);

      try {
        const response = await axios.get(`http://localhost:3000/api/books/${bookId}`);
        console.log('Dados do livro:', response.data);

        if (response.data) {
          this.book = response.data;
        } else {
          alert('Livro não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do livro:', error);
        alert('Erro ao carregar os dados do livro');
      }
    },
    formatImagePath(path) {
      // Corrige as barras e adiciona o caminho completo da URL
      return `http://localhost:3000/${path.replace(/\\/g, '/')}`;
    },

    

    handleFileUpload(event) {
      this.book.image = event.target.files[0];      
    },

    async enviarFormulario() {
      const formData = new FormData();
      formData.append('code', this.book.code);
      formData.append('title', this.book.title);
      formData.append('author', this.book.author);
      formData.append('year', this.book.year);
      formData.append('gender', this.book.gender);
      formData.append('amount', this.book.amount);
      formData.append('description', this.book.description);

      if (this.book.image) {
        formData.append('image', this.book.image);
      }

      try {
        const response = await axios.put(`http://localhost:3000/api/books/${this.book.code}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        console.log('Livro atualizado:', response.data);
        alert('Livro atualizado com sucesso!');
        this.$router.push('/listalivro');
      } catch (error) {
        console.error('Erro ao atualizar livro:', error);
        alert('Erro ao atualizar o livro.');
      }
    },
  },
};
</script>