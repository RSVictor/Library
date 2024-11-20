<template>
  <main class="form-container m-auto">
    <form @submit.prevent="loginUser">
      <h1 class="h3 mb-3 fw-normal">Entrar</h1>
      <div class="form-floating">
        <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating mt-2">
        <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Senha</label>
      </div>
      <p v-if="message" class="text-danger">{{ message }}</p>
      <button class="btn text-bg-success w-100 mt-2 py-2" type="submit">Entrar</button>
      <p class="mt-1 mb-3 text-body-secondary" >Não tem conta?<router-link class="mt-1 text-success" style="text-decoration: none;" to="/cadastro"> Cadastre-se</router-link></p>
    </form>
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

        const authStore = useAuthStore();
        // Chama o método de login da loja
        authStore.login(response.data.token, response.data.permissions);

       

        // Redirecionar com base na permissão
        if (response.data.permissions === 'Usuario') {
          this.$router.push('/'); // Redireciona para a página do usuário
        } else if (response.data.permissions === 'ADM') {
          this.$router.push('/dashboard'); // Redireciona para a página de administrador
        } else {
          this.message = 'Permissão desconhecida!';
        }
      } catch (error) {
        this.message =
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : 'Erro ao fazer login.';
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  width: 100%;
}

html,
body,
main {
  width: 100%;
  height: 610px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
</style>
