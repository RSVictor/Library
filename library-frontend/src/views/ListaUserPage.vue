<template>
  <div class="container">
    <!-- Seção do usuário -->
    <div class="user">
      <p>Bem-vindo, Usuário!</p>
    </div>

    <!-- Menu de navegação -->
    <div class="titulo-adm-button">
      <div class="button-adm">
        <RouterLink to="/listalivro">Livros</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/listaUser">Usuários</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/adicionarLivro">Adicionar Livros</RouterLink>
      </div>
      <div class="input-adm">
        <input type="text" placeholder="Pesquisar Usuários" v-model="searchQuery">
        <button><i class="bi bi-search"></i></button>
      </div>
    </div>

    <!-- Listagem de Usuários -->
    <div class="titulo-adm mt-5">
      <div class="text-emp">Id</div>
      <div class="text-emp">Nome</div>
      <div class="text-emp">Email</div>
      <div class="text-emp">Status</div>
      <div class="text-emp">Hierarquia</div>
      <div class="text-emp">Opções</div>
    </div>

    <!-- Exibindo lista de usuários -->
    <div v-for="user in filteredUsers" :key="user._id" class="lista-adm mt-2">
      <div class="text-lista">{{ user.customId }}</div>
      <div class="text-lista">{{ user.username }}</div>
      <div class="text-lista">{{ user.email }}</div>
      <div class="text-lista">{{ user.status }}</div>
      <div class="text-lista">{{ user.permissions }}</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <RouterLink :to="`/PerfilVistaADM/${user._id}`" class="button-link"><i class="bi bi-person-fill-add"></i></RouterLink>
          </div>
          <div class="button-editar-adm">
            <button class="button-link"><i class="bi bi-person-fill-slash"></i></button> 
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
      users: [],         // Lista de usuários
      searchQuery: '',   // Para pesquisa de usuários
    };
  },
  mounted() {
    this.fetchUsers();  // Carregar usuários
  },
  computed: {
    // Computed para filtrar usuários conforme a pesquisa
    filteredUsers() {
      return this.users.filter(user => {
        return user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               user.status.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    // Método para buscar usuários
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/admin/api/users');
        this.users = response.data;
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    },
  }  
};
</script>
