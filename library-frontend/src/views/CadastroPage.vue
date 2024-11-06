<template>
  <main class="form-container w-100 m-auto">
    <form @submit.prevent="registerUser">
      <h1 class="h3 mb-3 fw-normal">Cadastrar</h1>

      <div class="form-floating">
        <input type="text" v-model="username" class="form-control" :id="'floatingInput_' + uniqueId"
          placeholder="Nome" />
        <label :for="'floatingInput_' + uniqueId">Nome</label>
      </div>

      <div class="form-floating mt-2">
        <input type="email" v-model="email" class="form-control" :id="'floatingEmail_' + uniqueId"
          placeholder="name@example.com" />
        <label :for="'floatingEmail_' + uniqueId">Email</label>
      </div>

      <div class="form-floating mt-2">
        <input type="password" v-model="password" class="form-control" :id="'floatingPassword_' + uniqueId"
          placeholder="Senha" />
        <label :for="'floatingPassword_' + uniqueId">Senha</label>
      </div>

      <p v-if="message" class="text-danger">{{ message }}</p>

      <button class="btn text-bg-success w-100 mt-2 py-2" type="submit">Cadastrar</button>
    </form>
  </main>
</template>

<script>
import { userService } from '../services/api';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: '',
      uniqueId: Math.random(), // Gera um ID único para os inputs
    };
  },
  methods: {
    async registerUser() {
      if (!this.username || !this.email || !this.password) {
        this.message = 'Por favor, preencha todos os campos.';
        return;
      }

      try {
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password,
        };

        const response = await userService.register(userData);
        console.log('Usuário registrado com sucesso:', response.data);

        alert('Usuário cadastrado com sucesso!');
        this.$router.push('/login');
      } catch (error) {
        console.error('Erro ao registrar usuário:', error.response?.data || error.message);
        this.message = error.response?.data?.message || 'Erro ao registrar usuário.';
      }
    },
  },
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
