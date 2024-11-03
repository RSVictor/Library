<template>
 <div class="container">
    <div class="user">
      <p>Bem vindo, Usuario!</p>     
    </div>

    <div class="titulo-fav ">
      <span>Mais buscados</span>
    </div>


    <div class="mais-Buscados mb-5">
      <div class="card-fav mt-5">
        <img src="#" class="card-img-top mt-2" alt="...">
        <div class="card-body mt-4">
          <h5 class="card-title">Java guia do Programador</h5>

          <button class="btn btn-primary mt-3" style="background-color: #335844;" @click="handleEmprestar">Emprestar</button>
        </div>
      </div>

      <div class="card-fav mt-5">
        <img src="#" class="card-img-top mt-2" alt="...">
        <div class="card-body mt-4">
          <h5 class="card-title">Java guia do Programador</h5>

          <a href="/emprestimo" class="btn btn-primary mt-3" style="background-color: #335844 ;">Emprestar</a>
        </div>
      </div>
      <div class="card-fav mt-5">
        <img src="#" class="card-img-top mt-2" alt="...">
        <div class="card-body mt-4">
          <h5 class="card-title">Java guia do Programador</h5>

          <a href="/emprestimo" class="btn btn-primary mt-3" style="background-color: #335844 ;">Emprestar</a>
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
        // Redireciona para a página de empréstimo
        router.push('/emprestimo');
      }
    };

    return { handleEmprestar };
  },
};
</script>