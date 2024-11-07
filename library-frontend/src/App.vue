<script setup>
import { onMounted, computed } from 'vue';
import { useAuthStore } from './stores/authStore'; // ajuste o caminho se necessário
import { RouterView } from 'vue-router';
import MenuUser from './components/MenuUser.vue';
import Rodape from './components/RodapeHome.vue';
import MenuDeslogado from './components/MenuDeslogado.vue';
import MenuADM from './components/MenuAdm.vue';

// Obtém o store de autenticação
const authStore = useAuthStore();

// Verifica o estado de autenticação ao montar o componente
onMounted(() => {
  authStore.checkAuthStatus();
});

// Computed para determinar qual menu deve ser exibido
const currentMenu = computed(() => {
  if (authStore.isLoggedIn) {
    return authStore.userPermission === 'ADM' ? MenuADM : MenuUser;
  } else {
    return MenuDeslogado;
  }
});
</script>

<template>
  <header>
    <!-- Renderiza o componente de acordo com o estado de autenticação -->
    <component :is="currentMenu" />
  </header>

  <RouterView />
  <Rodape />
</template>
