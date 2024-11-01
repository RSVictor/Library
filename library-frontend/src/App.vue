<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/authStore'; // ajuste o caminho se necessário
import { RouterView } from 'vue-router';
import MenuUser from './components/MenuUser.vue';
import Rodape from './components/RodapeHome.vue';
import MenuDeslogado from './components/MenuDeslogado.vue';
import MenuADM from './components/MenuAdm.vue';

const authStore = useAuthStore();

// Verifica o estado de autenticação na montagem
onMounted(() => {
  authStore.checkAuthStatus();
});

</script>

<template>
   <header>
    <component 
      :is="authStore.isLoggedIn ? (authStore.userPermission === 'ADM' ? MenuADM : MenuUser) : MenuDeslogado" />
  </header>

  
  <RouterView />
  <Rodape />
</template>


