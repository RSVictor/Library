<template>
<div class="container">
  <div class="user">
    <p>Bem-vindo, Usuário!</p>
  </div>

  <div class="titulo-fav">
    <span>Sua lista de favoritos</span>
  </div>
  
  <div class="fav-item mt-3">
    <span>Você tem 1 item</span>
  </div>

    <div class="card-fav mt-5">
      <router-link to="/descricao">
        <img src="#" class="card-img-top mt-2" alt="...">
      </router-link>
        <div class="card-body mt-4">
          <h5 class="card-title">Java guia do Programador</h5>         
        </div>
      </div>
    
  

      <div class="button-favorito mt-5">
    <div class="button-salvar">
  <router-link to="/" class="button-link">
    <i class="bi bi-plus-lg"></i>
    <span class="button-text">Adicionar</span>
  </router-link>
</div>
    <div class="button-excluir">      
      <router-link to="#" class="button-link">
        <i class="bi bi-x-lg"></i>
        <span class="button-text">Cancelar</span>
      </router-link>
    </div>
    <div class="button-salvar">
  <router-link to="/emprestimo" class="button-link" >
    <i class="bi bi-check-lg"></i>
    <span class="button-text">Emprestar</span>
  </router-link>
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
        // Redireciona para a página de empréstimo
        router.push('/historico');
      }
    };

    return { handleEmprestar };
  },
};
</script>