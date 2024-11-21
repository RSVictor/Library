<template>
  <div class="container">
    <!-- Seção do usuário -->
    <div class="user">
      <p>Bem-vindo, {{ username }}! </p>
    </div>

    <!-- Menu de navegação -->
    <div class="titulo-adm-button">
      <div class="button-adm">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/listalivro">Livros</RouterLink>
      </div>
     
      <div class="button-adm">
        <RouterLink to="/adicionarLivro">Adicionar Livros</RouterLink>
      </div>
      <div class="input-adm">
        <input 
          type="text" 
          placeholder="Pesquisar Usuários" 
          v-model="searchQuery" 
          @input="filterUsers" 
        />
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
    <div v-for="user in paginatedUsers" :key="user._id" class="lista-adm mt-2">
      <div class="text-lista">{{ user.customId }}</div>
      <div class="text-lista">{{ user.username }}</div>
      <div class="text-lista">{{ user.email }}</div>
      <!-- Mudança de cor para inativo -->
      <div class="text-lista" :class="{'text-danger': user.status === 'inativo'}">{{ user.status }}</div>
      <div class="text-lista">{{ user.permissions }}</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <RouterLink :to="`/PerfilVistaADM/${user._id}`" class="button-link">
              <i class="bi bi-person-fill-add"></i>
            </RouterLink>
          </div>
          <!-- Botão de bloquear -->
          <div class="button-editar-adm">
            <button class="button-editar-adm" style="border: none;" @click="blockUser(user)">
              <i class="bi bi-person-fill-slash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Paginação -->
    <div class="pagination">
      <button @click="goToPreviousPage" :disabled="currentPage === 1">Anterior</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="goToNextPage" :disabled="currentPage === totalPages">Próximo</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

export default {
  data() {
    return {
      username: '',        // Armazena o nome do usuário
      users: [],           // Lista de usuários
      searchQuery: '',     // Para pesquisa de usuários
      filteredUsers: [],   // Lista filtrada de usuários conforme a pesquisa
      currentPage: 1,      // Página atual
      usersPerPage: 10     // Número de usuários por página
    };
  },
  mounted() {
    // Obtém o nome do usuário da store
    const authStore = useAuthStore();
    this.username = authStore.username; // Armazena o nome do usuário
    this.fetchUsers();   // Carregar usuários ao montar o componente
  },

  computed: {
    // Aplica a filtragem e paginação
    paginatedUsers() {
      // Filtra os usuários com base na pesquisa
      const filteredUsers = this.users.filter(user => {
        return user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               user.status.toLowerCase().includes(this.searchQuery.toLowerCase());
      });

      // Aplica a paginação
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;

      return filteredUsers.slice(start, end);  // Retorna os usuários para a página atual
    },

    // Calcula o número total de páginas
    totalPages() {
      // Filtra os usuários com base na pesquisa
      const filteredUsers = this.users.filter(user => {
        return user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               user.status.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
      return Math.ceil(filteredUsers.length / this.usersPerPage); // Número de páginas
    }
  },

  methods: {
    // Função para ir para a próxima página
    goToNextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    // Função para ir para a página anterior
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    // Método para buscar usuários
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/admin/api/users');
        this.users = response.data;
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    },
    
    // Método para filtrar usuários com base no que é digitado na pesquisa
    filterUsers() {
      // A filtragem já está sendo feita no `computed`, então não há necessidade de sobrescrever aqui.
    },

    // Método para bloquear o usuário
    async blockUser(user) {
      try {
        const response = await axios.patch(`http://localhost:3000/admin/api/users/${user._id}`, {
          status: 'inativo'  // Altera o status para "inativo"
        });

        if (response.status === 200) {
          user.status = 'inativo';  // Atualiza o status localmente
          alert('Usuário bloqueado com sucesso!');
        }
      } catch (error) {
        console.error('Erro ao bloquear o usuário:', error);
        alert('Erro ao bloquear o usuário.');
      }
    },

    verPerfil(id) {
      // Redireciona para a página de perfil do usuário
      this.$router.push(`/PerfilVistaADM/${id}`);
    }
  }   
};
</script>

<style scoped>
.text-danger {
  color: red;
  font-size: 0.9em;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination button {
  margin: 0 10px;
}
</style>
