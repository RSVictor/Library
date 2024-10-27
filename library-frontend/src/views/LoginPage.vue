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
          required
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
          required
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
      this.message = ''; // Reseta a mensagem antes da nova tentativa
        // Verifica se os campos estão preenchidos
    if (!this.email || !this.password) {
       this.message = 'Email e senha são obrigatórios.';
      return;
    }
      try {
        const response = await userService.login({
          email: this.email,
          password: this.password,
        });
        
        const authStore = useAuthStore();
        authStore.login(response.data.token, response.data.permissions);

        this.message = 'Login bem-sucedido!';
        
        // Redirecionar com base na permissão
        if (response.data.permissions === 'Usuario') {
          this.$router.push('/'); 
        } else if (response.data.permissions === 'ADM') {
          this.$router.push('/listalivro'); 
        } else {
          this.message = 'Permissão desconhecida!';
        }
      } catch (error) {
        // Se o erro ocorrer, verifica a resposta
        this.message = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'Erro ao fazer o login.';
      }
    }
  }
};
</script>
