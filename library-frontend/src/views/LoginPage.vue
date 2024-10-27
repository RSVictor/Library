<template>

<main class="form-signin">

  <div class="voltar">     
    <a href="/"><i class="bi bi-arrow-left"></i>Voltar</a>
</div>

  <form @submit.prevent="loginUser">
    <div class="title">
    <h1 class="h3 mb-3 fw-normal">Faça seu Login</h1>
  </div>
    <div class="form">
      <label for="floatingInput">Email:</label>
      <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="">
      
    </div>
    <div class="form">
      <label for="floatingPassword">Senha:</label>
      <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="">        
    </div>


    <div class="button">
    <button type="submit">Entrar</button>
  </div>    
  </form>
  <p v-if="message">{{ message }}</p>

  <div class="conta">
    Não tem conta?<a href="/cadastro">Cadastre-se</a>  
</div>

</main>


</template>

<script>
import { userService } from '../services/api'; // Verifique o caminho do axios
import { useAuthStore } from '../stores/authStore'; // ajuste o caminho se necessário
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await userService.login({
          email: this.email,
          password: this.password,
        });
        console.log(response); // Adicione esta linha

        const authStore = useAuthStore();
        // Chama o método de login da loja
        authStore.login(response.data.token, response.data.permissions);
        console.log('Token armazenado:', response.data.token); // Adicione esta linha

        this.message = 'Login bem-sucedido!';

        // Redirecionar com base na permissão
        if (response.data.permissions === 'Usuario') {
          this.$router.push('/'); // Redireciona para a página do usuário
        } else if (response.data.permissions === 'ADM') {
          this.$router.push('/listalivro'); // Redireciona para a página de administrador
        } else {
          this.message = 'Permissão desconhecida!';
        }
      } catch (error) {
        this.message = 
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'Erro ao fazer o login.';
      }
    }
  }
};
</script>

