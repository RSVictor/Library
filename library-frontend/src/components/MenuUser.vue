<template>
  <header class="p-3 mb-4 border-bottom w-100" style="background-color: #93BFA7;">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
        
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="text-center">
            <RouterLink to="/" class="nav-link px-2 link-body-emphasis">
              <h3><strong>BookMange</strong></h3>
            </RouterLink>
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Procurar..." aria-label="Search">
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
            
          </a>
          <ul class="dropdown-menu text-small">
            <li><RouterLink to="/" class="dropdown-item">Home</RouterLink></li>
            <li><RouterLink to="/PerfilUser" class="dropdown-item">Minha Conta</RouterLink></li>
            <li><RouterLink to="/historico" class="dropdown-item">Histórico</RouterLink></li>
            <li><RouterLink to="/favoritos" class="dropdown-item">Favoritos</RouterLink></li>
            <li><RouterLink to="/maisBuscados" class="dropdown-item">Mais buscados</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="logout" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '../stores/authStore'; // ajuste o caminho se necessário
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    logout() {
      const authStore = useAuthStore(); // Obtenha a instância da store
      authStore.logout(); // Chame o método de logout da store
      this.$router.push('/'); // Redirecione para a página de login
      alert('Logout realizado!');
      router.push('/'); // Redireciona para a página home
    },
  },
};
</script>
