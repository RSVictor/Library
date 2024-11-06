<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, {{ username }}</p>
    </div>

    <div class="perfil mt-3">
      <div class="titulo-perfil">
        <span>Meus dados</span>
      </div>

      <div class="dados mt-4">
        <div class="foto-botao">
          <div class="img-foto">
            <img src="#" alt="Foto do Usuário" style="width: 300px;">
          </div>

          <div class="button-foto mt-3">
            <label for="fileInput" class="custom-file-upload" style="cursor: pointer;">
              Adicionar foto
            </label>
            <input type="file" id="fileInput" @change="onFileChange" style="display: none;">
          </div>
        </div>

        <form @submit.prevent="updateUser">
          <div class="form-perfil mt-3">
            <label for="nomeInput">Nome:</label>
            <input v-model="username" type="text" class="form-control" id="nomeInput" placeholder="Digite seu nome">

            <label for="emailInput">Email:</label>
            <input v-model="email" type="email" class="form-control" id="emailInput" placeholder="Digite seu email">

            <label for="senhaInput">Senha:</label>
            <input v-model="password" type="password" class="form-control" id="senhaInput"
              placeholder="Digite sua senha">

            <label for="novaSenhaInput">Nova senha:</label>
            <input v-model="newPassword" type="password" class="form-control" id="novaSenhaInput"
              placeholder="Digite a nova senha">
          </div>

        </form>
      </div>

      <div class="button-perfil-user">
        <div>
          <button class="button-excluir" type="submit" @click.prevent="deleteUser"> <i
              class="bi bi-trash"></i>Excluir</button>
        </div>
        <div>
          <button class="button-salvar" type="submit"><i class="bi bi-check2-square"></i>Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from '../services/api'; // Ajuste o caminho conforme sua estrutura
import { useAuthStore } from '../stores/authStore'; // Ajuste o caminho

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      newPassword: '', // Adicione aqui
      userImage: '',

    };
  },
  methods: {
    async fetchUserData() {
      try {
        // Chame a API para buscar os dados do usuário
        const response = await userService.getUserData(); // Ajuste conforme a sua implementação
        this.username = response.data.username; // Altere conforme o formato da resposta
        this.email = response.data.email; // Se precisar do email
        this.userImage = response.data.imageUrl || ''; // Se você tiver uma imagem do usuário
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.userImage = e.target.result; // Atualiza a imagem do usuário
        };
        reader.readAsDataURL(file);
      }
    },
    async updateUser() {
      // Implementar lógica para atualizar os dados do usuário
    },
    async deleteUser() {
      // Implementar lógica para excluir o usuário
    },
    async Logout() {
      const authStore = useAuthStore();
      authStore.logout(); // Chame o método com 'logout' em minúsculas
      this.$router.push('/login'); // Redireciona após o logout
    },
  },
  mounted() {
    this.fetchUserData(); // Chama a função ao montar o componente
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados aqui */
</style>