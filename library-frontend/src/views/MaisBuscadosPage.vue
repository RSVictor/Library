<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, {{ username }}</p>
    </div>

    <div class="titulo-fav">
      <span>Mais Buscados</span>
    </div>

    <div class="mais-Buscados mb-5">
      <div class="card-fav mt-5" v-for="book in mostSearchedBooks" :key="book._id">
        <img :src="formatImagePath(book.image)" class="card-img-top mt-2" alt="Imagem do Livro">
        <div class="card-body mt-4">
          <h5 class="card-title">{{ book.title }}</h5>

          <button
            class="btn btn-primary mt-3"
            style="background-color: #335844;"
            @click="handleEmprestar(book)"
          >
            Emprestar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore'; // Ajuste o caminho se necessário
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'; // Para usar ref e onMounted para buscar os dados
import axios from 'axios'; // Certifique-se de que o axios está importado

export default {
  setup() {
    // Primeiro inicializa authStore
    const authStore = useAuthStore();

    // Agora, cria a referência para o nome do usuário
    const username = ref(authStore.username); // Obtém o nome do usuário da store

    const router = useRouter();
    const mostSearchedBooks = ref([]); // Lista reativa de livros mais buscados

    // Função para buscar os livros mais buscados da API
    const fetchMostSearchedBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books/most-searched');
        mostSearchedBooks.value = response.data; // Atualiza a lista de livros
      } catch (error) {
        console.error('Erro ao buscar os livros mais buscados', error);
      }
    };

    // Função para registrar a visualização de um livro
    const incrementSearchCount = async (bookId) => {
      try {
        await axios.post(`http://localhost:3000/api/books/viewed/${bookId}`);
      } catch (error) {
        console.error('Erro ao registrar busca', error);
      }
    };

    // Chama o incremento de visualização assim que a página for montada
    onMounted(() => {
      fetchMostSearchedBooks(); // Chama a função de busca
      // Chama o incremento assim que os livros forem carregados
      mostSearchedBooks.value.forEach(book => {
        incrementSearchCount(book._id);
      });
    });

    // Função chamada ao clicar em Emprestar
    const handleEmprestar = (book) => {
      if (!authStore.isLoggedIn) {
        alert('Você precisa fazer login para emprestar um livro.');
        router.push('/login');
      } else {
        // Redireciona para a página de empréstimo com o livro selecionado
        router.push({ name: 'emprestimo', params: { bookId: book._id } });
      }
    };

    // Formatar a URL da imagem, se necessário
    const formatImagePath = (path) => {
      // Caso o caminho da imagem esteja vindo com o prefixo /uploads/
      return `http://localhost:3000/${path}`; // Ajuste o caminho conforme sua estrutura
    };

    return { mostSearchedBooks, handleEmprestar, formatImagePath, username };
  },
};
</script>


<style scoped>
/* Adicione os estilos conforme necessário */
</style>
