import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false);
  const userPermission = ref(null);
  const username = ref(''); // Armazena o nome do usuário

  // Função para verificar o status de autenticação
  const checkAuthStatus = () => {
    const token = localStorage.getItem('token');
    const permissions = localStorage.getItem('permissions');
    
    // Se o token e as permissões existirem no localStorage, o usuário está autenticado
    if (token && permissions) {
      isLoggedIn.value = true;
      userPermission.value = permissions;
      username.value = localStorage.getItem('username') || ''; // Se necessário, também pode guardar o username
    } else {
      isLoggedIn.value = false;
      userPermission.value = null;
      username.value = ''; // Limpa o nome de usuário caso não esteja autenticado
    }
  };

  // Função de login
  const login = (token, permissions, name) => {
    localStorage.setItem('token', token);
    localStorage.setItem('permissions', permissions);
    localStorage.setItem('username', name); // Armazena o nome do usuário
    isLoggedIn.value = true;
    userPermission.value = permissions;
    username.value = name;
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    localStorage.removeItem('username'); // Remove o nome do usuário
    isLoggedIn.value = false;
    userPermission.value = null;
    username.value = ''; // Limpa o nome do usuário
  };

  return { isLoggedIn, userPermission, username, login, logout, checkAuthStatus };
});
