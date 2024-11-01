<template>
<div class="container">
  <div class="user">
    <p>Bem-vindo, Usuário!</p>
    <div class="notificacao">
      <a href="#" style="color: black;">
        <i class="bi bi-bell"></i>
      </a>
      
    </div>
  </div>

  <div class="titulo-fav">
    <span>Sua lista de favoritos</span>
  </div>
  
  <div class="fav-item mt-3">
    <span>Você tem 1 item</span>
  </div>

  <div class="card-fav mt-5">
    <a href="/descricao">
      <img src="#" alt="Livro favorito">
    </a>
    <div class="card-body mt-4">
      <h5 class="card-title">Java Guia do Programador</h5>
      <button class="btn btn-primary " style="background-color: #335844;" @click="handleEmprestar">Emprestar</button> 
    </div>
  </div>

  <div class="button-favorito mt-5">
    <div class="button-excluir">
      <a href="#" @click="handleEmprestar" class="button-link">
        <i class="bi bi-trash"></i>
        <span class="button-text">Excluir</span>
      </a>
    </div>
    <div class="button-salvar">
      <a href="#" @click="handleEmprestar" class="button-link">
        <i class="bi bi-plus-lg"></i>
        <span class="button-text">Adicionar</span>
      </a>
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
        router.push('/emprestimo');
      }
    };

    return { handleEmprestar };
  },
};
</script>