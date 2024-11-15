<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, Usuário!</p>
    </div>

    <div class="titulo-adm-button ">
      <div class="button-adm">
        <RouterLink to="/listalivro">Livros</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/listaUser">Usuários</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/adicionarLivro">Adicionar Livros</RouterLink>
      </div>
      <div class="input-adm">
        <input 
          type="text" 
          name="" 
          id="" 
          placeholder="Pesquisar livros" 
          v-model="searchQuery" 
        />
        <button><i class="bi bi-search"></i></button>
      </div>
    </div>

    <div class="titulo-adm mt-5">
      <div class="text-emp">Id</div>
      <div class="text-emp">Título</div>
      <div class="text-emp">Autor</div>
      <div class="text-emp">Gênero</div>
      <div class="text-emp">Quantidade</div>
      <div class="text-emp">Opções</div>
    </div>

    <div v-for="book in filteredBooks" :key="book._id" class="lista-adm mt-2">
      <div class="text-lista">{{ book.customId }}</div>
      <div class="text-lista">{{ book.title }}</div>
      <div class="text-lista">{{ book.author }}</div>
      <div class="text-lista">{{ book.gender }}</div>
      <div class="text-lista">{{ book.amount }}</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <RouterLink :to="`/editarLivro/${book._id}`" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </RouterLink>
          </div>
          <div class="button-excluir-adm">
            <RouterLink to="/listalivro" class="button-link" @click="deleteBook(book._id)">
              <i class="bi bi-trash"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],             // Armazena todos os livros
      searchQuery: '',       // Armazena a consulta de pesquisa
    };
  },
  mounted() {
    this.fetchBooks();
  },
  computed: {
    // Computed para filtrar livros conforme o nome da pesquisa
    filteredBooks() {
      // Filtra a lista de livros com base na pesquisa (título do livro)
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    // Função para buscar todos os livros do servidor
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        this.books = response.data;  // Armazena a lista de livros
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    },
    
    // Função para excluir livro
    async deleteBook(id) {
      const confirmed = window.confirm('Você tem certeza que deseja excluir este livro?');
      if (confirmed) {
        try {
          await axios.delete(`http://localhost:3000/api/books/${id}`);
          this.books = this.books.filter(book => book._id !== id); // Remove da lista local
          alert('Livro excluído com sucesso!');
        } catch (error) {
          console.error('Erro ao excluir livro:', error);
          alert('Erro ao excluir o livro.');
        }
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
