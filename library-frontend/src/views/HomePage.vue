<template>
  <div class="container">
    <div class="row mt-3">
      <span>Editoras</span>
      <div class="mt-3 mb-5 row circulos">
        <div class="circle" style="background-color: #93BFA7;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #335844;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #93BFA7;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #335844;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #93BFA7;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #335844;">
          <span>Galáxia dos Livros</span>
        </div>
      </div>
     

      <span>Livros</span>
      <div class="row flex-wrap">
        <!-- Cada livro estará em linha -->
        <div class="card-wrapper col-12 col-sm-6 col-md-4 col-lg-3 mb-3" v-for="book in paginatedBooks" :key="book._id">
          
          <div class="card">
            <router-link :to="{ name: 'descricao', params: { id: book._id } }">
              <img :src="formatImagePath(book.image)" class="card-img-top mt-2" alt="Imagem do Livro">
            </router-link>

            <div class="card-body">
              <h5 class="card-title">{{ book.title }}</h5>
              <div class="button">
                <button class="btn btn-primary" style="background-color: #335844; border: none; height: 40px"
                  @click="handleEmprestar">Emprestar</button>
                  <button 
                  class="btn btn-primary" 
                  style="background-color: #F4D94C; height: 40px; border: none;" 
                  @click="toggleFavorite(book)">
                  <i :class="isFavorite(book) ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
                </button>
              </div>
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
  </div>
 
  
  
</template>

<script>
import { useAuthStore } from '../stores/authStore'; // ajuste o caminho se necessário
import { useFavoriteStore } from '../stores/favoriteStore'; // Importe a store de favoritos
import { useRouter } from 'vue-router';
import { booksService } from '@/services/api';

export default {
  data() {
    return {
      books: [], // Lista completa de livros
      searchQuery: this.$route.query.search || '', // Valor da pesquisa do parâmetro da URL
      searchApplied: '', // Valor aplicado ao filtro após clicar em "Buscar"
      currentPage: 1, // Página atual
      booksPerPage: 12, // Quantidade de livros por página
    };
  },
  computed: {
  // Calcula os livros para a página atual
  paginatedBooks() {
    const filteredBooks = this.books.filter((book) => 
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    const start = (this.currentPage - 1) * this.booksPerPage;
    const end = start + this.booksPerPage;

    return filteredBooks.slice(start, end);
  },paginatedBooks() {
  const filteredBooks = this.books.filter((book) => 
    book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
  );

  const start = (this.currentPage - 1) * this.booksPerPage;
  const end = start + this.booksPerPage;

  return filteredBooks.slice(start, end); // Retorna os livros filtrados e paginados
},
  // Calcula o total de páginas
  totalPages() {
  const filteredBooks = this.books.filter((book) => 
    book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
  return Math.ceil(filteredBooks.length / this.booksPerPage); // Retorna o número total de páginas
},
  },

  setup() {
    const authStore = useAuthStore();
    const favoriteStore = useFavoriteStore(); // Usar store de favoritos
    const router = useRouter();

    const handleEmprestar = () => {
      if (!authStore.isLoggedIn) {
        alert('Você precisa fazer login para emprestar um livro.');
        router.push('/login');
      } else {
        router.push('/emprestimo');
      }
    };

    const toggleFavorite = (book) => {
      if (favoriteStore.isFavorite(book)) {
        favoriteStore.removeFromFavorites(book);
      } else {
        favoriteStore.addToFavorites(book);
      }
    };

    const isFavorite = (book) => {
      return favoriteStore.isFavorite(book);
    };

    const favorites = favoriteStore.favorites;

    const removeFromFavorites = (book) => {
      favoriteStore.removeFromFavorites(book);  // Remove o livro da lista de favoritos
    };
    return { handleEmprestar, toggleFavorite, isFavorite };
  },
  methods: {
    fetchBooks() {
    // Se houver um termo de pesquisa, passe como parâmetro na consulta
    const queryParams = this.searchQuery ? { search: this.searchQuery } : {};

    booksService.getBooks(queryParams).then(response => {
      this.books = response.data; // Assume que a API retorna um array de livros
      console.log(this.books);      // Verifique os dados recebidos
    }).catch(error => {
      console.error("Erro ao buscar livros:", error);
    });
  },
    applyFilter() {
      this.searchApplied = this.searchQuery;
    },
    formatImagePath(path) {
      return `http://localhost:3000/${path.replace(/\\/g, '/')}`;
    },
    goToNextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
},
goToPreviousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}
  },
  mounted() {
    this.fetchBooks();
    if (this.searchQuery) {
      this.applyFilter();
    }
  }
};
</script>