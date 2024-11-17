import { reactive } from 'vue';

export const useFavoriteStore = () => {
  const state = reactive({
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')  // Carregar favoritos de localStorage
  });

  // Adiciona um livro aos favoritos
  const addToFavorites = (book) => {
    if (!isFavorite(book)) {
      state.favorites.push(book);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  };

  // Remove um livro dos favoritos
  const removeFromFavorites = (book) => {
    // Filtra o livro da lista e atualiza o localStorage
    state.favorites = state.favorites.filter(fav => fav._id !== book._id);
    localStorage.setItem('favorites', JSON.stringify(state.favorites));  // Sincroniza com o localStorage
  };

  // Verifica se um livro está nos favoritos
  const isFavorite = (book) => {
    return state.favorites.some(fav => fav._id === book._id);
  };

  return {
    favorites: state.favorites,  // Lista reativa de favoritos
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };
};
