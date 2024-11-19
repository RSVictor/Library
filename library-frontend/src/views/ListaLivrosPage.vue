<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, Usuário!</p>
    </div>

    <div class="titulo-adm-button ">
      <div class="button-adm">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
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
    <!-- Botões de navegação -->
<div class="pagination">
  <button @click="goToPreviousPage" :disabled="currentPage === 1">Anterior</button>
  <span>{{ currentPage }} / {{ totalPages }}</span>
  <button @click="goToNextPage" :disabled="currentPage === totalPages">Próximo</button>
</div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],             // Armazena todos os livros
      searchQuery: '',       // Termo de pesquisa
      currentPage: 1,        // Página atual
      booksPerPage: 10,      // Número de livros por página
    };
  },
  mounted() {
    this.fetchBooks();  // Chama a função para buscar livros quando o componente for montado
  },

  computed: {
    // Filtra os livros com base na pesquisa e aplica a paginação
    filteredBooks() {
      // Filtra os livros com base na pesquisa
      const filteredBooks = this.books.filter(book => {
        return book.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });

      // Aplica a paginação
      const start = (this.currentPage - 1) * this.booksPerPage;
      const end = start + this.booksPerPage;

      return filteredBooks.slice(start, end);  // Retorna os livros para a página atual
    },

    // Calcula o número total de páginas
    totalPages() {
      const filteredBooks = this.books.filter(book => {
        return book.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
      return Math.ceil(filteredBooks.length / this.booksPerPage); // Número de páginas
    }
  },

  methods: {
    // Função para ir para a próxima página
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    // Função para ir para a página anterior
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

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
