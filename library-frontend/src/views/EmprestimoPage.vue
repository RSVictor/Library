<template>
    <div class="container">
  <div class="user">
    <p>Bem-vindo, Usuário!</p>   
  </div>

  <div class="titulo-emp">
    <span>Finalizar Empréstimo</span>
  </div>

  <div class="titulo-emprestimo mt-5">
    <div class="text-emp">Descrição</div>
    <div class="text-emp">Data do empréstimo</div>
    <div class="text-emp">Data de devolução</div>
    <div class="text-emp">Opção</div>
  </div>

  <div class="descricao-emprestimo mt-3">
    <div class="card-emp">
      <img src="#" class="card-img-top mt-2" style="height: 170px;" alt="Java Guia do Programador">
      <div>
        <h5 class="card-title mt-3">Java Guia do Programador</h5>
      </div>
    </div>

    <div class="emp-data-emp">
      <div class="data">25/08/2008</div>
    </div>

    <div class="emp-data-dev">
      <div class="data">25/08/2008</div>
    </div>

    <div class="emp-data">
      <div class="icon-emp">
        <a href="#" class="btn btn-primary" style="background-color: red; width: 100px; border: none;">
          <i class="bi bi-trash"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="button-emprestimo mt-5 mb-2">
    <div class="button-emp">
      <button class="btn btn-primary " style="background-color: #335844;" @click="handleEmprestar">Adicionar</button>      
    </div>
    <div class="button-emp">
      <button class="btn btn-primary " style="background-color: #335844;" @click="handleEmprestar">Cancelar</button>      
    </div>
    <div class="button-emp">
      <button class="btn btn-primary " style="background-color: #335844;" @click="handleEmprestar">Confirmar</button>       
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
        router.push('/');
      }
    };

    return { handleEmprestar };
  },
};
</script>