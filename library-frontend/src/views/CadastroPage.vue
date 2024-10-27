<template>
    <main class="form-signin">

<div class="voltar">
  <a href="/"><i class="bi bi-arrow-left"></i>Voltar</a>
</div>

<form @submit.prevent="RegisterUser">
  <div class="title">
    <h1 class="h3 mb-3 fw-normal">Cadastre-se</h1>
  </div>
  <div class="form">
    <label for="floatingInput">Nome:</label>
    <input type="text" v-model="username" class="form-control" id="floatingInput" placeholder="">

  </div>
  <div class="form">
    <label for="floatingInput">Email:</label>
    <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="">

  </div>
  <div class="form">
    <label for="floatingPassword">Senha:</label>
    <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="">
  </div>
  <p v-if="message">{{ message }}</p>


  <div class="button">
    <button type="submit">Cadastrar</button>
  </div>

</form>


</main>
</template>

<script>
import { userService } from '../services/api'; // Verifique o caminho do axios
import { useAuthStore } from '../stores/authStore'; // ajuste o caminho se necessário
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async RegisterUser() {
      try {
        const response = await userService.register({
          username: this.username,
          email: this.email,  // Certifique-se de que este campo está presente
          password: this.password,
        });

        this.message = 'Cadastro realizado com sucesso!';
        this.$router.push('/login'); // Redirecionar após o cadastro
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        this.message = error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : 'Erro ao fazer o cadastro.';
      }
    }
  }
};
</script>
