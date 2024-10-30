<template>
   <div class="container">
        <div class="user">
          <p>Bem vindo, Usuario!</p>
          <div class="notificacao">
            <a href="#" style="color: black;"><i class="bi bi-bell style"></i></a>            
          </div>
        </div>

        <div class="titulo-emp ">
            <span>Adicionar ou editar livros</span>
        </div>

      
        <div class="teste">
            <div class="perfil-adicionar mt-3">


                <div class="dados  mt-2">
                    <div class="foto-botao">
                        <div class="img-foto">
                            <img src="img/person.png" alt="" style="width: 300px;">

                        </div>

                        <div class="button-foto mt-3">
                            <label for="fileInput" class="custom-file-upload " style="cursor: pointer;">
                                Adicionar Capa
                            </label>
                            <input type="file" id="fileInput" style="display: none; ">

                        </div>
                    </div>


                    <form>
                        <div class="form-adicionar mt-3">
                            <label for="floatingInput">Código ISBN:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="">


                            <label for="floatingInput">Título:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="">

                            <label for="floatingInput">Autor:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="">

                            <label for="floatingInput">Ano de pulblicação:</label>
                            <input type="date" class="form-control" id="floatingInput" placeholder="">

                            <label for="floatingInput">Gênero:</label>
                            <input type="text" class="form-control" id="floatingInput" placeholder="">

                            <label for="floatingInput">Quantidade:</label>
                            <input type="number" class="form-control" id="floatingInput" placeholder="">

                        </div>
                    </form>

                </div>
            </div>
        </div>
        <div class="caixa mt-5">
            <div class="form-descricao ">
                <label for="floatingInput">Descrição:</label>
                <input type="text" class="form-control" id="floatingInput" style="height: 150px;">

                <div class="button-perfil-user mt-5">
                    <div class="button-adicionar">
                        <a href="adicionarLivros.html" class="button-link">
                            <i class="bi bi-plus-lg"></i>
                            <span class="button-text">Novo</span>
                        </a>
                    </div>
                    <div class="button-salvar">
                      <a href="perfil.html" class="button-link">
                        <i class="bi bi-check2-square"></i>
                        <span class="button-text">Salvar</span>
                      </a>
                    </div>
                  </div>
                
            </div>

        </div>

    </div>
</template>