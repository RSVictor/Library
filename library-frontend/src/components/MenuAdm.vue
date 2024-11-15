<template>
  <header class="p-3 mb-4 border-bottom w-100" style="background-color: #93BFA7;">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <RouterLink to="#" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"/>
          </svg>
        </RouterLink>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <RouterLink to="#" class="nav-link px-2 link-body-emphasis">
              <h3><strong>BookMange</strong></h3>
            </RouterLink>
          </li>
        </ul>

       

        <div class="dropdown text-end">
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="#" alt="" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small">
            <li><RouterLink to="/homeADM" class="dropdown-item">Home</RouterLink></li> 
            <li><RouterLink to="/listalivro" class="dropdown-item">Lista livros</RouterLink></li>
            <li><RouterLink to="/adicionarLivro" class="dropdown-item">Adicionar livro</RouterLink></li>
            <li><RouterLink to="/listaUser" class="dropdown-item">Lista usuários</RouterLink></li>           
            <li><hr class="dropdown-divider"></li>
            <li><button class="dropdown-item" @click="logout">Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '../stores/authStore'; // ajuste o caminho se necessário
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter(); // Obtenha a instância do router

    // Método de logout
    const logout = () => {
      authStore.logout(); // Chame o método de logout da store
      router.push('/'); // Redirecione para a página de login
      alert('Logout realizado!');
    };

    return { authStore, logout };
 
  },
};
</script>
