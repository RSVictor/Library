<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, Usuário!</p>
      <div class="notificacao">
        <a href="#" style="color: black;"><i class="bi bi-bell"></i></a>
        <button @click="Logout" class="button-sair">Sair?</button>
      </div>
    </div>

    <div class="titulo-adm-button-lista">
      <div class="button-adm"><a href="/listalivro">Livros</a></div>
      <div class="button-adm"><a href="/listaUser">Usuários</a></div>
      <div class="input-adm-lista">
        <input type="text" v-model="searchTerm" placeholder="Pesquisar Usuário">
        <button><i class="bi bi-search"></i></button>
      </div>
    </div>

    <div class="titulo-adm mt-5">
      <div class="text-emp">Id</div>
      <div class="text-emp">Nome</div>
      <div class="text-emp">Email</div>
      <div class="text-emp">Status</div>
      <div class="text-emp">Hierarquia</div>
      <div class="text-emp">Opções</div>
    </div>

    <div v-for="user in filteredUsers" :key="user.id" class="lista-adm mt-2">
      <div class="text-lista">{{ user.id }}</div>
      <div class="text-lista">{{ user.name }}</div>
      <div class="text-lista">{{ user.email }}</div>
      <div class="text-lista">{{ user.status }}</div>
      <div class="text-lista">{{ user.role }}</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="`/PerfilVistaADM/${user.id}`" class="button-link">
              <i class="bi bi-person-fill-add"></i>
            </a>
          </div>
          <div class="button-editar-adm">
            <a href="#" @click.prevent="deactivateUser(user.id)" class="button-link">
              <i class="bi bi-person-fill-slash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const users = ref([]);
    const searchTerm = ref('');
    const filteredUsers = computed(() =>
      users.value.filter(user =>
        user.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    );

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api'); // Substitua pela URL real da sua API
        users.value = response.data; // Supondo que a resposta seja uma lista de usuários
      } catch (error) {
        console.error('Erro ao buscar dados dos usuários:', error);
      }
    };

    const Logout = () => {
      // Implementar lógica de logout
    };

    const deactivateUser = (userId) => {
      // Lógica para desativar o usuário com o ID passado
      console.log(`Desativando usuário com ID: ${userId}`);
    };

    onMounted(() => {
      fetchUsers(); // Busca os dados da API ao montar o componente
    });

    return {
      users,
      searchTerm,
      filteredUsers,
      Logout,
      deactivateUser,
    };
  },
};
</script>

<style scoped>
/* Adicione seus estilos personalizados aqui */
</style>
