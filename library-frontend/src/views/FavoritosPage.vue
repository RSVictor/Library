<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, Usuário!</p>
    </div>

    <div class="titulo-fav">
      <span>Sua lista de favoritos</span>
    </div>

    <div v-if="favorites.length" class="fav-item mt-3">
      <span>Você tem {{ favorites.length }} item(s) na sua lista de favoritos.</span>
    </div>

    <div class="mt-5" v-else>
      <span>Você não tem favoritos ainda.</span>
    </div>

    <div class="row flex-wrap" style="gap: 20px;">
      <div 
        class="card-wrapper col-12 col-sm-6 col-md-4 col-lg-3 mb-3 card-fav mt-5" 
        v-for="book in favorites" 
        :key="book._id">
        
        <router-link :to="{ name: 'descricao', params: { id: book._id } }">
          <img :src="formatImagePath(book.image)" class="card-img-top mt-2" alt="Imagem do Livro">
        </router-link>
        
        <div class="card-body mt-4">
          <h5 class="card-title">{{ book.title }}</h5>
          
          <!-- Botão para remover o livro -->
          <button 
            class="btn btn-primary mt-3" 
            style="width: 80px; background-color: red; border: none;" 
            @click="removeFromFavorites(book)">
            <i class="bi bi-trash"></i> 
          </button>
        </div>
      </div>
    </div>

    <div class="button-favorito mt-5">
      <div class="button-salvar">
        <router-link to="/" class="button-link">
          <i class="bi bi-plus-lg"></i>
          <span class="button-text">Adicionar</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavoriteStore } from '../stores/favoriteStore'; // Importe a store de favoritos
import { useRouter } from 'vue-router';

export default {
  setup() {
    const favoriteStore = useFavoriteStore();  // Usando a store de favoritos
    const router = useRouter();

    // Lista reativa de favoritos
    const favorites = favoriteStore.favorites;

    // Função para remover o livro da lista de favoritos
    const removeFromFavorites = (book) => {
      favoriteStore.removeFromFavorites(book);  // Chama o método da store para remover
    };



    return { favorites, removeFromFavorites };
  },

  methods: {
    // Método para formatar o caminho da imagem
    formatImagePath(path) {
      return `http://localhost:3000/${path.replace(/\\/g, '/')}`;
    }
  }
};
</script>
