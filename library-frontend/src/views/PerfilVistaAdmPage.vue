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

  <div class="perfil mt-3">
    <div class="titulo-perfil">
      <span>Perfil do Usuário</span>
    </div>

    <div class="dados mt-4">
      <div class="foto-botao">
        <div class="img-foto">
          <img src="img/person.png" alt="Foto do usuário">
        </div>
      </div>

      <form>
        <div class="form-perfil mt-5">
          <label for="nomeInput">Nome:</label>
          <input class="form-control" id="nomeInput" value="Nome do Usuário" disabled>

          <label for="emailInput" class="mt-3">Email:</label>
          <input class="form-control" id="emailInput" value="usuario@email.com" disabled>

          <label for="idInput" class="mt-3">ID:</label>
          <input class="form-control" id="idInput" value="123456" disabled>

          <label for="statusInput" class="mt-3">Status:</label>
          <input class="form-control" id="statusInput" value="Ativo" disabled>
        </div>
      </form>
    </div>

    <div class="button-perfil-user mt-4">
      <div class="button-ver-historico">
        <a href="/historicoADM" class="button-link">
          <i class="bi bi-file-earmark-text"></i>
          <span class="button-text">Ver Histórico</span>
        </a>
      </div>
    </div>
  </div>
</div>

</template>