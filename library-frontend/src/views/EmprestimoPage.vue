<template>
    <div class="container">
  <div class="user">
    <p>Bem-vindo, Usuário!</p>
    <div class="notificacao">
      <a href="#" style="color: black;"><i class="bi bi-bell"></i></a>
      <a href="#" style="color: black; text-decoration: none; margin-left: 10px;">Sair?</a>
    </div>
  </div>

  <div class="titulo-emp">
    <span>Finalizar Empréstimo</span>
  </div>

  <div class="titulo-emprestimo mt-5">
    <div class="text-emp">Descrição</div>
    <div class="text-emp">Data do empréstimo</div>
    <div class="text-emp">Data de devolução</div>
    <div class="text-emp">Opção</div>
  </div>

  <div class="descricao-emprestimo mt-3">
    <div class="card-emp">
      <img src="C:\Users\Victor\Desktop\Biblioteca_Victor\library-frontend\src\assets\img\React.png" class="card-img-top mt-2" style="height: 170px;" alt="Java Guia do Programador">
      <div>
        <h5 class="card-title mt-3">Java Guia do Programador</h5>
      </div>
    </div>

    <div class="emp-data-emp">
      <div class="data">25/08/2008</div>
    </div>

    <div class="emp-data-dev">
      <div class="data">25/08/2008</div>
    </div>

    <div class="emp-data">
      <div class="icon-emp">
        <a href="#" class="btn btn-primary" style="background-color: red; width: 100px; border: none;">
          <i class="bi bi-trash"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="button-emprestimo mt-5 mb-2">
    <div class="button-emp">
      <a href="/">Adicionar</a>
    </div>
    <div class="button-emp">
      <a href="/adicionarlivro">Cancelar</a>
    </div>
    <div class="button-emp">
      <a href="/historico">Confirmar</a>
    </div>
  </div>
</div>

</template>