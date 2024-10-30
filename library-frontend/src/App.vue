<script setup>
import { RouterView } from 'vue-router';
import Menu from './components/MenuUser.vue';
import Rodape from './components/RodapeHome.vue';
import login from './views/LoginPage.vue';

</script>

<template>
  <header>
    <Menu />
   
  </header>
  
  <RouterView />
  <Rodape />
</template>


