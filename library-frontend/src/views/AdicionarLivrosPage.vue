<template>
    <div class="container">
      <div class="user">
        <p>Bem-vindo, Usuário!</p>
      </div>
  
      <div class="titulo-emp">
        <span>Adicionar livro</span>
      </div>
  
      <div class="teste">
        <div class="perfil-adicionar mt-3">
          <div class="dados mt-2">
            <div class="foto-botao">
              <div class="img-foto">
                <!-- Exibe a imagem se imagePreview não for nula -->
                <img v-if="imagePreview" :src="imagePreview" alt="Capa do livro" style="width: 250px;">
              </div>
  
              <form @submit.prevent="enviarFormulario">
                <div class="button-foto mt-3">
                  <label for="fileInput" class="custom-file-upload" style="cursor: pointer;">
                    Adicionar Capa
                  </label>
                  <input type="file" id="fileInput" style="display: none;" @change="handleFileUpload">
                </div>
              </form>
            </div>
  
            <form @submit.prevent="enviarFormulario">
              <div class="form-adicionar mt-3">
                <!-- Código ISBN -->
                <label for="floatingInput">Código ISBN:</label>
                <input type="text" class="form-control" v-model="code" placeholder="Digite o Código ISBN" required>
                <p v-if="errors.code" class="text-danger">{{ errors.code }}</p>
  
                <!-- Título -->
                <label for="floatingInput">Título:</label>
                <input type="text" class="form-control" v-model="title" placeholder="Digite o Título do Livro" required>
                <p v-if="errors.title" class="text-danger">{{ errors.title }}</p>
  
                <!-- Autor -->
                <label for="floatingInput">Autor:</label>
                <input type="text" class="form-control" v-model="author" placeholder="Digite o Nome do Autor" required>
                <p v-if="errors.author" class="text-danger">{{ errors.author }}</p>
  
                <!-- Ano de publicação -->
                <label for="floatingInput">Ano de publicação:</label>
                <input type="number" class="form-control" v-model="year" placeholder="Digite o Ano de Publicação" required>
                <p v-if="errors.year" class="text-danger">{{ errors.year }}</p>
  
                <!-- Gênero -->
                <label for="floatingInput">Gênero:</label>
                <input type="text" class="form-control" v-model="gender" placeholder="Digite o Gênero do Livro" required>
                <p v-if="errors.gender" class="text-danger">{{ errors.gender }}</p>
  
                <!-- Quantidade -->
                <label for="floatingInput">Quantidade:</label>
                <input type="number" class="form-control" v-model="amount" placeholder="Digite a Quantidade de Exemplares" required>
                <p v-if="errors.amount" class="text-danger">{{ errors.amount }}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      <form @submit.prevent="enviarFormulario">
        <div class="caixa mt-5">
          <div class="form-descricao">
            <span class="button-text">Descrição:</span>
            <input type="text" class="form-control" style="height: 130px;" v-model="description" placeholder="Digite a Descrição do Livro" required>
            <p v-if="errors.description" class="text-danger">{{ errors.description }}</p>
  
            <div class="button-perfil-user mt-5">
              <div class="button-excluir">
                <router-link to="/dashboard" class="button-link">
                  <i class="bi bi-x-lg"></i>
                  <span class="button-text">Cancelar</span>
                </router-link>
              </div>
              <div class="button-salvar">
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
        imagePreview: null,  // URL temporária da imagem
        errors: {},  // Objeto para armazenar as mensagens de erro
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.image = file;
          this.imagePreview = URL.createObjectURL(file);  // Cria a URL da imagem para exibição
        }
      },
  
      // Função para validar os campos
      validateForm() {
        this.errors = {};  // Limpar erros anteriores
        let valid = true;
  
        // Verificar se cada campo está vazio e adicionar erro se necessário
        if (!this.code) {
          this.errors.code = 'Código ISBN é obrigatório.';
          valid = false;
        }
        if (!this.title) {
          this.errors.title = 'Título é obrigatório.';
          valid = false;
        }
        if (!this.author) {
          this.errors.author = 'Autor é obrigatório.';
          valid = false;
        }
        if (!this.year) {
          this.errors.year = 'Ano de publicação é obrigatório.';
          valid = false;
        }
        if (!this.gender) {
          this.errors.gender = 'Gênero é obrigatório.';
          valid = false;
        }
        if (!this.amount) {
          this.errors.amount = 'Quantidade é obrigatória.';
          valid = false;
        }
        if (!this.description) {
          this.errors.description = 'Descrição é obrigatória.';
          valid = false;
        }
  
        return valid;
      },
  
      async enviarFormulario() {
        // Validar os campos antes de enviar o formulário
        if (!this.validateForm()) {
          return;  // Se o formulário não for válido, não envia
        }
  
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
  this.$router.push('/dashboard');
} catch (error) {
  console.error('Erro ao adicionar livro:', error.response ? error.response.data : error);
  alert('Erro ao cadastrar o livro: ' + (error.response ? error.response.data.message : 'Erro desconhecido.'));
}
}
    }
  };
  </script>
  
  <style scoped>
  .text-danger {
    color: red;
    font-size: 0.9em;
  }
  </style>