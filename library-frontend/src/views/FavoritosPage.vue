<template>
<div class="container">
  <div class="user">
    <p>Bem-vindo, Usuário!</p>
    <div class="notificacao">
      <a href="#" style="color: black;">
        <i class="bi bi-bell"></i>
      </a>
      <button @click="Logout" class="button-sair">Sair?</button> 
    </div>
  </div>

  <div class="titulo-fav">
    <span>Sua lista de favoritos</span>
  </div>
  
  <div class="fav-item mt-3">
    <span>Você tem 1 item</span>
  </div>

  <div class="card-fav mt-5">
    <a href="/descricao">
      <img src="#" alt="Livro favorito">
    </a>
    <div class="card-body mt-4">
      <h5 class="card-title">Java Guia do Programador</h5>
      <a href="/emprestimo" class="btn btn-primary mt-3" style="background-color: #335844;">Emprestar</a>
    </div>
  </div>

  <div class="button-favorito mt-5">
    <div class="button-excluir">
      <a href="#" class="button-link">
        <i class="bi bi-trash"></i>
        <span class="button-text">Excluir</span>
      </a>
    </div>
    <div class="button-salvar">
      <a href="/" class="button-link">
        <i class="bi bi-plus-lg"></i>
        <span class="button-text">Adicionar</span>
      </a>
    </div>
  </div>
</div>

</template>

