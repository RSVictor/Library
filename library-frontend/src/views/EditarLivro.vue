<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, {{ username }}! </p>
    </div>

    <div class="titulo-emp">
      <span>Editar livro</span>
    </div>

    <div class="teste">
      <div class="perfil-adicionar mt-3">
        <div class="dados mt-2">
          <div class="foto-botao">
            <div class="img-foto">
              <!-- Exibe a imagem de pré-visualização ou a imagem do livro existente -->
              <img v-if="imagePreview" :src="imagePreview" alt="Capa do livro" style="width: 300px;">
              <!-- Se não houver pré-visualização, exibe a imagem existente -->
              <img v-else :src="formatImagePath(book.image)" alt="Capa do livro" style="width: 300px;">
            </div>

            <form @submit.prevent="enviarFormulario">
              <div class="button-foto mt-3">
                <label for="fileInput" class="custom-file-upload" style="cursor: pointer;">
                  Alterar Capa
                </label>
                <input type="file" id="fileInput" style="display: none;" @change="handleFileUpload">
              </div>
            </form>
          </div>

          <form @submit.prevent="enviarFormulario">
            <div class="form-adicionar mt-3">
              <label for="floatingInput">Código ISBN:</label>
              <input type="text" class="form-control" v-model="book.code" />
              <p v-if="errors.code" class="text-danger">{{ errors.code }}</p>

              <label for="floatingInput">Título:</label>
              <input type="text" class="form-control" v-model="book.title" />
              <p v-if="errors.title" class="text-danger">{{ errors.title }}</p>

              <label for="floatingInput">Autor:</label>
              <input type="text" class="form-control" v-model="book.author" />
              <p v-if="errors.author" class="text-danger">{{ errors.author }}</p>

              <label for="floatingInput">Ano de publicação:</label>
              <input type="number" class="form-control" v-model="book.year" />
              <p v-if="errors.year" class="text-danger">{{ errors.year }}</p>

              <label for="floatingInput">Gênero:</label>
              <input type="text" class="form-control" v-model="book.gender" />
              <p v-if="errors.gender" class="text-danger">{{ errors.gender }}</p>

              <label for="floatingInput">Quantidade:</label>
              <input type="number" class="form-control" v-model="book.amount" />
              <p v-if="errors.amount" class="text-danger">{{ errors.amount }}</p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <form @submit.prevent="enviarFormulario">
      <div class="caixa mt-5">
        <div class="form-descricao">
          <label for="floatingInput">Descrição:</label>
          <input type="text" class="form-control" id="floatingInput" style="height: 150px;" v-model="book.description" />
          <p v-if="errors.description" class="text-danger">{{ errors.description }}</p>

          <div class="button-perfil-user mt-5">
            <div class="button-excluir">
              <router-link to="/listalivro" class="button-link">
                <i class="bi bi-x-lg"></i>
                <span class="button-text">Cancelar</span>
              </router-link>
            </div>
            <div class="button-salvar">
              <!-- Alterei para um botão de submit para garantir que a ação do formulário seja executada -->
              <button type="submit" class="button-salvar">
                <i class="bi bi-check2-square"></i>
                <span class="button-text">Salvar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '../stores/authStore'; // Certifique-se de que o caminho da store está correto

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
        username: '', // Defina a variável username para armazenar o nome de usuário
      },
      imagePreview: null, // Nova variável para armazenar a URL temporária da imagem
      errors: {}, // Objeto para armazenar as mensagens de erro
    };
  },
  mounted() {
    const authStore = useAuthStore(); // Acessa a store de autenticação
    this.username = authStore.username; // Armazena o nome do usuário na variável 'username'
    this.fetchBookData();
  },
  methods: {
    // Função para buscar os dados do livro e exibir os dados na página
    async fetchBookData() {
      const bookId = this.$route.params.id;
      console.log('ID do livro:', bookId);

      try {
        const response = await axios.get(`http://localhost:3000/api/books/${bookId}`);
        console.log('Dados do livro:', response.data);

        if (response.data) {
          this.book = response.data;

          // Se houver uma imagem, cria a URL de pré-visualização
          if (this.book.image) {
            this.imagePreview = this.formatImagePath(this.book.image);
          }
        } else {
          alert('Livro não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do livro:', error);
        alert('Erro ao carregar os dados do livro');
      }
    },

    // Função para formatar o caminho da imagem
    formatImagePath(path) {
      if (path) {
        // Verificar se o caminho da imagem já está completo
        if (path.startsWith('http')) {
          return path; // Se já for uma URL completa, retorna como está
        } else {
          // Caso contrário, construa o caminho absoluto
          return `http://localhost:3000/${path.replace(/\\/g, '/')}`;
        }
      }
      return ''; // Retorna uma string vazia caso não haja imagem
    },

    // Função para atualizar a imagem ao selecionar um arquivo
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.book.image = file;
        // Cria a URL temporária para a pré-visualização
        this.imagePreview = URL.createObjectURL(file);
      }
    },

    // Função para validar os campos
    validateForm() {
      this.errors = {}; // Limpar erros anteriores
      let valid = true;

      // Verificar se cada campo está vazio e adicionar erro se necessário
      if (!this.book.code) {
        this.errors.code = 'Código ISBN é obrigatório.';
        valid = false;
      }
      if (!this.book.title) {
        this.errors.title = 'Título é obrigatório.';
        valid = false;
      }
      if (!this.book.author) {
        this.errors.author = 'Autor é obrigatório.';
        valid = false;
      }
      if (!this.book.year) {
        this.errors.year = 'Ano de publicação é obrigatório.';
        valid = false;
      }
      if (!this.book.gender) {
        this.errors.gender = 'Gênero é obrigatório.';
        valid = false;
      }
      if (!this.book.amount) {
        this.errors.amount = 'Quantidade é obrigatória.';
        valid = false;
      }
      if (!this.book.description) {
        this.errors.description = 'Descrição é obrigatória.';
        valid = false;
      }

      return valid;
    },

    // Função para enviar o formulário e atualizar os dados do livro
    async enviarFormulario() {
      // Validar os campos antes de enviar o formulário
      if (!this.validateForm()) {
        return; // Se o formulário não for válido, não envia
      }

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
        // Enviar dados para o servidor (atualizar livro)
        const response = await axios.put(`http://localhost:3000/api/books/${this.book._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        console.log('Livro atualizado:', response.data);
        alert('Livro atualizado com sucesso!');

        // Após sucesso, redireciona para a página de listagem
        this.$router.push('/listalivro');
      } catch (error) {
        console.error('Erro ao atualizar livro:', error);
        alert('Erro ao atualizar o livro.');
      }
    },
  },
};
</script>

<style scoped>
.text-danger {
  color: red;
  font-size: 0.9em;
}
</style>
