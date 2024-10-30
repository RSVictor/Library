<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';

// Usamos useRoute para acessar a rota atual
const route = useRoute();
const isNotAuthPage = computed(() => route.name !== 'login' && route.name !== 'cadastro');
</script>

<template>
    <header v-if="isNotAuthPage" class="p-3 mb-4 border-bottom w-100 p-3" style="background-color: #93BFA7;">
            <div class="container-fluid">
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                  <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
                </a>
        
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li><a href="/" class="nav-link px-2 link-body-emphasis"><strong>Localivros</strong></a></li>
                  <li><a href="/favoritos" class="nav-link px-2 link-body-emphasis">Favoritos</a></li>
                  <li><a href="/maisBuscados" class="nav-link px-2 link-body-emphasis">Mais Buscados</a></li>
                 
                </ul>
        
                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                  <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
                </form>
        
                <div class="dropdown text-end">
                  <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
                  </a>
                  <ul class="dropdown-menu text-small">
                    <li><a class="dropdown-item" href="/PerfilUser">Minha Conta</a></li>
                    <li><a class="dropdown-item" href="/historico">Historico</a></li>                    
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
</template>
   
  
 
  
  