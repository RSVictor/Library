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

      <div class="container desc p-4 mt-3">
        <div class="card" style="width: 15rem; min-height: 300px;">
          <img v-if="book && book.image" :src="formatImagePath(book.image)" class="card-img-top" alt="Imagem do Livro" style="width: 100%; height: 100%;" />
          <p v-else>Imagem não disponível</p>
          <button class="btn btn-primary mt-3" style="background-color: #335844; border: none; margin-top: 10px;" @click="handleEmprestar">Emprestar</button>
        </div>

        <div class="descricao p-8">
          <div>
            <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Descrição</h3>
            <div style="background-color: #93BFA7;">
              <p v-if="book">{{ book.description }}</p>
              <p v-else>Carregando descrição...</p>
            </div>
          </div>
        </div>
      </div>

      <div class="titulo">Descrição do livro</div>
      <div class="detalhes">
        <ul class="list-group mt-3">
          <li class="list-group-item">Título:</li>
          <li class="list-group-item">Autor:</li>
          <li class="list-group-item">Ano de publicação:</li>
          <li class="list-group-item">Código ISBN:</li>
          <li class="list-group-item">Gênero:</li>          
        </ul>
        <ul class="list-group mt-3 mb-5">
          <li v-if="book" class="list-group-item lista">{{ book.title }}</li>
          <li v-else class="list-group-item lista">Carregando informações</li>

          <li v-if="book" class="list-group-item lista">{{ book.author }}</li>
          <li v-else class="list-group-item lista">Carregando informações</li>

          <li v-if="book" class="list-group-item lista">{{ book.year }}</li>
          <li v-else class="list-group-item lista">Carregando informações</li>

          <li v-if="book" class="list-group-item lista">{{ book.code }}</li>
          <li v-else class="list-group-item lista">Carregando informações</li>

          <li v-if="book" class="list-group-item lista">{{ book.gender }}</li>  
          <li v-else class="list-group-item lista">Carregando informações</li> 
        </ul>
      </div>

      <div v-if="isLoggedIn" class="avaliacao-form mt-4">
        <h4>Deixe sua Avaliação</h4>
        <textarea v-model="newReview.text" class="form-control" rows="3" placeholder="Digite sua avaliação"></textarea>
        <div class="mt-2">
          <label for="rating">Nota:</label>
           <select v-model="newReview.rating" class="form-select" id="rating">
          <option value="" disabled>Selecione</option>
          <option v-for="n in 5" :key="n" :value="n">{{ n }} estrela(s)</option>
        </select>
        </div>
        <button class="btn btn-success mt-3" @click="submitReview">Enviar Avaliação</button>
      </div>
      <div v-else class="mt-4">
        <p>Faça login para deixar sua avaliação.</p>
      </div>

      <div class="titulo">Avaliações</div>
      <div v-for="(review, index) in reviews" :key="index" class="avaliacoes mt-3">
        <div class="pessoa">
          <p>{{ review.user }}</p>
        </div>
        <div class="comentario">
          <p>{{ review.text }}</p>
        </div>
        <div>
          <p>
            <i v-for="n in 5" :key="n" :class="n <= parseInt(review.rating) ? 'bi bi-star like' : 'bi bi-star'"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { booksService } from '@/services/api';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
  const authStore = useAuthStore();
  const router = useRouter();

  const handleEmprestar = () => {
    if (!authStore.isLoggedIn) {
      alert('Você precisa fazer login para emprestar um livro.');
      router.push('/login');
    } else {
      router.push('/emprestimo');
    }
  };

  // Retorne o username, isLoggedIn e os outros dados necessários
  return { 
    handleEmprestar, 
    isLoggedIn: authStore.isLoggedIn, 
    username: authStore.username // Adicione o username aqui
  };
},
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      book: null,
      reviews: [], // Lista de avaliações
      newReview: { text: '', rating: '' }, // Avaliação atual
      rating: '',
    };
  },
  mounted() {
    this.fetchBook();
  },
  methods: {
    fetchBook() {
      booksService.fetchBookById(this.id)
        .then((data) => {
          this.book = data;
          this.reviews = data.reviews || []; // Atribuindo as avaliações do livro
        })
        .catch((error) => console.error('Erro ao buscar dados do livro:', error));
    },
    formatImagePath(path) {
      return `http://localhost:3000/${path.replace(/\\/g, '/')}`;
    },

    submitReview() {
      const authStore = useAuthStore();
      const username = authStore.username;

      if (!this.newReview.text || !this.newReview.rating) {
        alert('Por favor, preencha o comentário e a nota.');
        return;
      }

      const ratingValue = parseInt(this.newReview.rating);

      if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
        alert('Por favor, escolha uma nota válida (de 1 a 5 estrelas).');
        return;
      }

      const review = {
        user: username || 'Usuário Logado',
        text: this.newReview.text,
        rating: ratingValue,  
      };

      booksService.addReview(this.id, review)
        .then(() => {
          this.fetchBook();
          this.newReview = { text: '', rating: '' };
          alert('Avaliação enviada com sucesso!');
        })
        .catch((error) => {
          console.error('Erro ao enviar avaliação:', error);
          alert('Erro ao enviar avaliação. Tente novamente.');
        });
    },
  },
};
</script>