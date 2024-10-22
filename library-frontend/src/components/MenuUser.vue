<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

// Usamos useRoute para acessar a rota atual
const route = useRoute();
</script>

<template >
    <header v-if="route.name !== 'login'"  class="p-3">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <!-- Logo ou Ícone -->
          <a href="/" class="d-flex align-items-center text-black text-decoration-none">
            <h3>Localivros</h3>
          </a>
          <!-- Navegação e Campo de Pesquisa -->
          <div class="d-flex align-items-center">
            <ul class="nav mb-2 mb-lg-0 d-flex align-items-center list-unstyled">
              <li class="nav-item">
                <a href="/maisBuscados" class="nav-link px-2 text-black">
                  <i class="bi bi-list"></i> Categoria
                </a>
              </li>
              <li class="nav-item">
                <div class="input-logo">
                  <input type="text" name="" id="" placeholder="O que você procura...">
                  <button><i class="bi bi-search"></i></button>
                </div>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link px-2 text-black">
                  <i class="bi bi-person"></i> Login
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/favoritos" class="nav-link px-2 text-black">
                  <i class="bi bi-heart"></i> Favoritos
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/pagina-emprestimo" class="nav-link px-2 text-black">
                  <i class="bi bi-cart"></i> Carrinho
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </template>
  
 
  
  