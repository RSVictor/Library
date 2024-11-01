<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';

// Usamos useRoute para acessar a rota atual
const route = useRoute();
const isNotAuthPage = computed(() => route.name !== 'login' && route.name !== 'cadastro');
</script>

<template>
  <header v-if="isNotAuthPage" class="p-3 mb-4 border-bottom w-100" style="background-color: #93BFA7;">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <RouterLink to="/" class="nav-link px-2 link-body-emphasis">
              <h3><strong>Localivros</strong></h3>
            </RouterLink>
          </li>
          
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <!-- Formulário de pesquisa pode ser adicionado aqui -->
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="#" alt="" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small">
            <li><RouterLink to="/login" class="dropdown-item">Login</RouterLink></li>
            <li><RouterLink to="/cadastro" class="dropdown-item">Cadastre-se</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
