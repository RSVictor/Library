<template>
    <div class="container">
      <div class="row mt-3">     
          
        <div class="container desc p-4 mt-3">
          <div class="card" style="width: 15rem; min-height: 300px;">
            <img v-if="book && book.image" :src="formatImagePath(book.image)" class="card-img-top" alt="Imagem do Livro" style="width: 100%; height: 100%;">
            <p v-else>Imagem não disponível</p>          
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
       </div>
    </div>
  
  
  
  </template>
  
  <script>
  import { booksService } from '@/services/api'; // Importa o serviço de livros
  import { useAuthStore } from '../stores/authStore'; // ajuste o caminho se necessário
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
          // Redireciona para a página de empréstimo
          router.push('/emprestimo');
        }
      };
  
      return { handleEmprestar };
    },
      props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        book: null,
      };
    },
    watch: {
      // Quando a prop 'id' mudar, a função fetchBook será chamada para atualizar os dados
      id: 'fetchBook'
    },
    mounted() {
      this.fetchBook();  // Chama a função fetchBook ao montar
    },
    methods: {
      fetchBook() {
        booksService.fetchBookById(this.id)
          .then(data => {
            this.book = data;
          })
          .catch(error => console.error("Erro ao buscar dados do livro:", error));
      },
      formatImagePath(path) {
        // Corrige as barras e adiciona o caminho completo da URL
        return `http://localhost:3000/${path.replace(/\\/g, '/')}`;
      }
    }
  };
  </script>