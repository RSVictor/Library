import { reactive } from 'vue';

export const useFavoriteStore = () => {
  const state = reactive({
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),  // Carregar favoritos de localStorage
  });

  // Adiciona um livro aos favoritos
  const addToFavorites = (book) => {
    if (!isFavorite(book)) {
      state.favorites.push(book); // Adiciona ao array reativo
      localStorage.setItem('favorites', JSON.stringify(state.favorites));  // Atualiza o localStorage
    }
  };

  // Remove um livro dos favoritos
  const removeFromFavorites = (book) => {
    // Filtra o livro da lista de favoritos e atualiza o estado
    const index = state.favorites.findIndex(fav => fav._id === book._id); // Encontrar o índice do livro
    if (index !== -1) {
      state.favorites.splice(index, 1); // Remover o livro com splice (detecção reativa)
      localStorage.setItem('favorites', JSON.stringify(state.favorites));  // Atualiza o localStorage
    }
  };

  // Verifica se um livro está nos favoritos
  const isFavorite = (book) => {
    return state.favorites.some(fav => fav._id === book._id);  // Verifica se o livro está na lista de favoritos
  };

  return {
    favorites: state.favorites,  // Lista reativa de favoritos
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };
};
