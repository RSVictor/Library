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
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder=""
          
        />
      </div>
      <div class="form">
        <label for="floatingPassword">Senha:</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="floatingPassword"
          placeholder=""
          
        />
      </div>

      <div class="button">
        <button type="submit">Entrar</button>
      </div>
    </form>
    <p v-if="message" style="color: black;">{{ message }}</p>

    <div class="conta">
      Não tem conta?<a href="/cadastro">Cadastre-se</a>
    </div>
  </main>
</template>

<script>
import { userService } from '../services/api';
import { useAuthStore } from '../stores/authStore';

export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async loginUser() {
    try {
        const response = await userService.login({
            email: this.email, // Deve ser um email válido
            password: this.password // Deve ser a senha correta
        });

        console.log('Login bem-sucedido:', response);
        this.message = 'Login bem-sucedido!';
        this.$router.push('/'); // Redireciona após login bem-sucedido
    } catch (error) {
        this.message = 
            error.response && error.response.data && error.response.data.error
                ? error.response.data.error
                : 'Erro ao fazer o login.';
        console.error('Erro ao fazer login:', error); // Loga o erro no console
    }
  }
  }
};
</script>
