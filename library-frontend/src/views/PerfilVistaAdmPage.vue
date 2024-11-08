<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, Usuário!</p>

    </div>

    <div class="titulo-adm-button ">
      <div class="button-adm">
        <RouterLink to="/listalivro">Livros</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/listaUser">Usuários</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/adicionarLivro">Adicionar Livros</RouterLink>
      </div>

    </div>
    <div class="perfil mt-3">
      <div class="titulo-perfil">
        <span>Perfil do Usuário(a)</span>
      </div>


      <div class="dados mt-4">
        <div class="foto-botao">
          <div class="img-foto">
            <img src="" alt="Foto do usuário">
          </div>
        </div>

        <form>
          <div class="form-perfil mt-5">
            <label for="nomeInput">Nome:</label>
            <input class="form-control" id="nomeInput" v-model="user.username" disabled>

            <label for="emailInput" class="mt-3">Email:</label>
            <input class="form-control" id="emailInput" v-model="user.email" disabled>

            <label for="idInput" class="mt-3">ID:</label>
            <input class="form-control" id="idInput" v-model="user.customId" disabled>

            <label for="statusInput" class="mt-3">Status:</label>
            <input class="form-control" id="statusInput" v-model="user.status" disabled>
          </div>
        </form>
      </div>

      <div class="button-perfil-user mt-4">
        <div class="button-ver-historico">
          <div class="button-perfil">
            <div class="button-link">
              <RouterLink to="/historicoADM" class="button-link"><i class="bi bi-file-earmark-text"></i><span
                  class="button-text">Ver Histórico</span></RouterLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        customId: '',
        username: '',
        email: '',
        status: '',
        
      }
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    // Método para buscar os dados do usuário
    async fetchUserData() {
      try {
        const userId = this.$route.params.id;  // Pega o ID do usuário da URL
        const response = await axios.get(`http://localhost:3000/admin/api/users/${userId}`);
        
        // Preenche os dados do usuário
        this.user = response.data;
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        alert('Erro ao carregar os dados do usuário');
      }
    },
  },
};
</script>