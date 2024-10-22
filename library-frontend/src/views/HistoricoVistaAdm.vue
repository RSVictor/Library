<template>
<div class="container"> 
  <div class="user">      
    <p>Bem-vindo, Usuário!</p>  
    <div class="notificacao">
      <a href="#" style="color: black;">
        <i class="bi bi-bell"></i>
      </a>
      <a href="#" style="color: black; text-decoration: none; margin-left: 10px;">Sair?</a> 
    </div>
  </div>
   
  <div class="titulo-emp mt-4">
    <span>Histórico de Empréstimo do Usuário(a)</span>     
  </div>

  <div class="titulo-emprestimo mt-5">
    <div class="text-emp">Item</div>  
    <div class="text-emp">Autor</div>     
    <div class="text-emp">Data de Empréstimo</div>
    <div class="text-emp">Data Devolvida</div>
  </div>

  <div class="descricao-emprestimo mt-3">          
    <div class="card-emp">
      <img src="C:\Users\Victor\Desktop\Biblioteca_Victor\library-frontend\src\assets\img\Programador Autodidata.png" class="card-img-top mt-2" style="height: 170px;" alt="Java Guia do Programador">
      <div>
        <h5 class="card-title mt-3">Java Guia do Programador</h5>
      </div>
    </div>   

    <div class="hist-autor">
      <div class="hist-autor-nome">Autor: José da Silva</div>           
    </div>

    <div class="emp-data-dev">
      <div class="data">Data de Empréstimo: 25/08/2008</div>           
    </div>

    <div class="emp-data-emp">
      <div class="data">Data Devolvida: 25/09/2008</div>           
    </div>    
  </div>    

  <div class="descricao-emprestimo mt-3">          
    <div class="card-emp">
      <img src="C:\Users\Victor\Desktop\Biblioteca_Victor\library-frontend\src\assets\img\Programador Autodidata.png" class="card-img-top mt-2" style="height: 170px;" alt="Use a Cabeça Python">
      <div>
        <h5 class="card-title mt-3">Use a Cabeça Python</h5>
      </div>
    </div>   

    <div class="hist-autor">
      <div class="hist-autor-nome">Autor: Maria Oliveira</div>           
    </div>

    <div class="emp-data-dev">
      <div class="data">Data de Empréstimo: 01/09/2008</div>           
    </div>

    <div class="emp-data-emp">
      <div class="data">Data Devolvida: 01/10/2008</div>           
    </div>    
  </div> 

  <div class="descricao-emprestimo mt-3">          
    <div class="card-emp">
      <img src="C:\Users\Victor\Desktop\Biblioteca_Victor\library-frontend\src\assets\img\Programador Autodidata.png" class="card-img-top mt-2" style="height: 170px;" alt="Programador Autodidata">
      <div>
        <h5 class="card-title mt-3">Programador Autodidata</h5>
      </div>
    </div>   

    <div class="hist-autor">
      <div class="hist-autor-nome">Autor: João Sousa</div>           
    </div>

    <div class="emp-data-dev">
      <div class="data">Data de Empréstimo: 15/09/2008</div>           
    </div>

    <div class="emp-data-emp">
      <div class="data">Data Devolvida: 15/10/2008</div>           
    </div>    
  </div> 
</div>

</template>