// src/stores/authStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref(false);
  const userPermission = ref(null);
  const username = ref(''); // Armazena o nome do usuário

  const login = (token, permissions, name) => {
    localStorage.setItem('token', token);
    localStorage.setItem('permissions', permissions);
    isLoggedIn.value = true;
    userPermission.value = permissions;
    username.value = name; // Define o nome do usuário
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    isLoggedIn.value = false;
    userPermission.value = null;
    username.value = ''; // Limpa o nome do usuário
  };

  return { isLoggedIn, userPermission, username, login, logout };
});
