<template>
  <div class="container">
    <div class="user">
      <p>Bem vindo, Usuario!</p>
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
        <input type="text" name="" id="" placeholder="Pesquisar livros" v-model="searchQuery">
        <button><i class="bi bi-search"></i></button>
      </div>
    </div>


    <div class="titulo-adm mt-5">
      <div class="text-emp">Id</div>
      <div class="text-emp">Título</div>
      <div class="text-emp">Autor</div>
      <div class="text-emp">Gênero</div>
      <div class="text-emp">Quantidade</div>
      <div class="text-emp">Option</div>

    </div>

    <div  v-for="book in books" :key="book._id" class="lista-adm mt-2">
      <!-- Renderizando-->
      <div class="text-lista">{{ book.customId }}</div>
      <div class="text-lista">{{ book.title }}</div>
      <div class="text-lista">{{ book.author }}</div>
      <div class="text-lista">{{ book.gender }}</div>
      <div class="text-lista">{{ book.amount }}</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">            
            <RouterLink :to="`/editarLivro/${book._id}`" class="button-link"><i class="bi bi-pencil-square"></i></RouterLink>
          </div>
          <div class="button-excluir-adm">
            <RouterLink to="/listalivro" class="button-link"  @click="deleteBook(book._id)"> <i class="bi bi-trash"></i></RouterLink>
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
      books: [],
      searchQuery: '',   // Para pesquisa de livros
    };
  },
  mounted() {
    this.fetchBooks();
  },
  computed: {
    // Computed para filtrar usuários conforme a pesquisa
    filteredUsers() {
      return this.users.filter(user => {
        return user.username.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        this.books = response.data;
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    },
    async deleteBook(id) {
      try {
        await axios.delete(`http://localhost:3000/api/books/${id}`);
        this.books = this.books.filter(book => book._id !== id);
        alert('Livro excluído com sucesso!');
      } catch (error) {
        console.error('Erro ao excluir livro:', error);
      }
    },
    editBook(id) {
      // Redireciona para a página de edição do livro (se necessário)
      this.$router.push(`/editarLivro/${id}`);
    }
  },
};
</script>