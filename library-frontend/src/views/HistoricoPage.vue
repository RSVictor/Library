<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, {{ username }}</p>
    </div>
    <div class="row mt-3">
      <span>Editoras</span>
      <div class="mt-3 mb-5 row circulos">
        <div class="circle" style="background-color: #93BFA7;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #335844;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #93BFA7;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #335844;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #93BFA7;">
          <span>Galáxia dos Livros</span>
        </div>
        <div class="circle" style="background-color: #335844;">
          <span>Galáxia dos Livros</span>
        </div>
      </div>

      <div class="titulo-emprestimo mt-5">
        <div class="text-emp">Item</div>
        <div class="text-emp">Autor</div>
        <div class="text-emp">Data de Empréstimo</div>
        <div class="text-emp">Data de Devolução</div>
      </div>



      <div class="descricao-emprestimo mt-3">
        <div class="card-emp">
          <img src="#" class="card-img-top mt-2" style="height: 170px;" alt="Use a Cabeça Python">
          <div>
            <h5 class="card-title mt-3">Use a Cabeça Python</h5>
          </div>
        </div>

        <div class="hist-autor">
          <div class="hist-autor-nome">Autor: Maria Oliveira</div>
        </div>

        <div class="emp-data-emp">
          <div class="data">Data de Empréstimo: 01/09/2008</div>
        </div>

        <div class="emp-data-dev">
          <div class="data">Data de Devolução: 01/10/2008</div>
        </div>
      </div>

      <div class="descricao-emprestimo mt-3">
        <div class="card-emp">
          <img src="#" class="card-img-top mt-2" style="height: 170px;" alt="Programador Autodidata">
          <div>
            <h5 class="card-title mt-3">Programador Autodidata</h5>
          </div>
        </div>

        <div class="hist-autor">
          <div class="hist-autor-nome">Autor: João Sousa</div>
        </div>

        <div class="emp-data-emp">
          <div class="data">Data de Empréstimo: 15/09/2008</div>
        </div>

        <div class="emp-data-dev">
          <div class="data">Data de Devolução: 15/10/2008</div>
        </div>
      </div>

    </div>
  </div>

</template>
