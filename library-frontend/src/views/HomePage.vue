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
      <div class="col-3">
        <div class="card mt-3">
          <router-link to="/descricao">
            <img src="" class="card-img-top mt-2" alt="Programador Autodidata">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Programador Autodidata</h5>
            <div class="button">
              <button class="btn btn-primary" style="background-color: #335844;border: none; height: 40px"
                @click="handleEmprestar">Emprestar</button>
              <router-link to="/favoritos" class="btn btn-primary"
                style="background-color: #F4D94C; height: 40px; border: none;"><i class="bi bi-heart"></i></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card mt-3">
          <router-link to="/descricao">
            <img src="#" class="card-img-top mt-2" alt="Programador Autodidata">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Programador Autodidata</h5>
            <div class="button">
              <button class="btn btn-primary" style="background-color: #335844;border: none; height: 40px"
                @click="handleEmprestar">Emprestar</button>
              <router-link to="/favoritos" class="btn btn-primary"
                style="background-color: #F4D94C; height: 40px; border: none;"><i class="bi bi-heart"></i></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card mt-3">
          <router-link to="/descricao">
            <img src="#" class="card-img-top mt-2" alt="Programador Autodidata">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Programador Autodidata</h5>
            <div class="button">
              <button class="btn btn-primary" style="background-color: #335844;border: none; height: 40px"
                @click="handleEmprestar">Emprestar</button>
              <router-link to="/favoritos" class="btn btn-primary"
                style="background-color: #F4D94C; height: 40px; border: none;"><i class="bi bi-heart"></i></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card mt-3">
          <router-link to="/descricao">
            <img src="#" class="card-img-top mt-2" alt="Programador Autodidata">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Programador Autodidata</h5>
            <div class="button">
              <button class="btn btn-primary" style="background-color: #335844;border: none; height: 40px"
                @click="handleEmprestar">Emprestar</button>
              <router-link to="/favoritos" class="btn btn-primary"
                style="background-color: #F4D94C; height: 40px; border: none;"><i class="bi bi-heart"></i></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card mt-3">
          <router-link to="/descricao">
            <img src="#" class="card-img-top mt-2" alt="Programador Autodidata">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Programador Autodidata</h5>
            <div class="button">
              <button class="btn btn-primary" style="background-color: #335844;border: none; height: 40px"
                @click="handleEmprestar">Emprestar</button>
              <router-link to="/favoritos" class="btn btn-primary"
                style="background-color: #F4D94C; height: 40px; border: none;"><i class="bi bi-heart"></i></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card mt-3">
          <router-link to="/descricao">
            <img src="#" class="card-img-top mt-2" alt="Programador Autodidata">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Programador Autodidata</h5>
            <div class="button">
              <button class="btn btn-primary" style="background-color: #335844;border: none; height: 40px"
                @click="handleEmprestar">Emprestar</button>
              <router-link to="/favoritos" class="btn btn-primary"
                style="background-color: #F4D94C; height: 40px; border: none;"><i class="bi bi-heart"></i></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card mt-3">
          <router-link to="/descricao">
            <img src="#" class="card-img-top mt-2" alt="Programador Autodidata">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Programador Autodidata</h5>
            <div class="button">
              <button class="btn btn-primary" style="background-color: #335844;border: none; height: 40px"
                @click="handleEmprestar">Emprestar</button>
              <router-link to="/favoritos" class="btn btn-primary"
                style="background-color: #F4D94C; height: 40px; border: none;"><i class="bi bi-heart"></i></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card mt-3">
          <router-link to="/descricao">
            <img src="#" class="card-img-top mt-2" alt="Programador Autodidata">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">Programador Autodidata</h5>
            <div class="button">
              <button class="btn btn-primary" style="background-color: #335844;border: none; height: 40px"
                @click="handleEmprestar">Emprestar</button>
              <router-link to="/favoritos" class="btn btn-primary"
                style="background-color: #F4D94C; height: 40px; border: none;"><i class="bi bi-heart"></i></router-link>
            </div>
          </div>
        </div>
      </div>




    </div>
  </div>
</template>

<script>
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
        // Lógica para redirecionar para a página de empréstimo
        router.push('/emprestimo');
      }
    };

    return { handleEmprestar };
  },
  methods: {
    fetchBooks() {
      booksService.getBooks().then(response => {
        this.books = response.data;
      });
    },
    applyFilter() {
      // Aplica a pesquisa no filtro
      this.searchApplied = this.searchQuery;
    },
    formatImagePath(path) {
      return `http://localhost:3000/${path.replace(/\\/g, '/')}`;
    },
    goToNextPage() {
    }
  }
};

</script>