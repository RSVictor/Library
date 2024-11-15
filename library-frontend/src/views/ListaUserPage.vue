lista user 

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
    <div v-for="user in filteredUsers" :key="user._id" class="lista-adm mt-2">
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
            <button class="button-editar-adm" @click="blockUser(user)">
              <i class="bi bi-person-fill-slash"></i>
            </button>
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
      users: [],           // Lista de usuários
      searchQuery: '',     // Para pesquisa de usuários
      filteredUsers: []    // Lista filtrada de usuários conforme a pesquisa
    };
  },
  mounted() {
    this.fetchUsers();   // Carregar usuários ao montar o componente
  },
  methods: {
    // Método para buscar usuários
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:3000/admin/api/users');
        this.users = response.data;
        this.filteredUsers = this.users; // Inicializa a lista de usuários filtrados
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    },
    
    // Método para filtrar usuários com base no que é digitado na pesquisa
    filterUsers() {
      this.filteredUsers = this.users.filter(user => {
        return user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               user.status.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },

    // Método para bloquear o usuário
    async blockUser(user) {
      try {
        // Atualizar o status do usuário para "inativo" no servidor
        const response = await axios.patch(`http://localhost:3000/admin/api/users/${user._id}`, {
          status: 'inativo'  // Altera o status para "inativo"
        });

        if (response.status === 200) {
          // Atualiza a lista local de usuários com o novo status
          user.status = 'inativo';
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