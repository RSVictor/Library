<template>
    <div class="container">
    <div class="user">
      <p>Bem vindo, Usuario!</p>      
    </div>

    <div class="titulo-adm-button ">
      <div class="button-adm"><RouterLink to="/listalivro" >Livros</RouterLink></div>
      <div class="button-adm"><RouterLink to="/listaUser">Usuários</RouterLink></div>
      <div class="button-adm"><RouterLink to="/adicionarLivro">Adicionar Livros</RouterLink></div>
      <div class="input-adm">
        <input type="text" name="" id="" placeholder="Pesquisar livros">
        <button><i class="bi bi-search"></i></button>
      </div>
    </div>


    <div class="titulo-adm mt-5">
      <div class="text-emp">Id</div>
      <div class="text-emp">Título</div>
      <div class="text-emp">Autor</div>
      <div class="text-emp">Gênero</div>
      <div class="text-emp">Quantidade</div>
      <div class="text-emp">Option</div>

    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">1</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <RouterLink to="/adicionarlivro" class="button-link"  ><i class="bi bi-pencil-square"></i></RouterLink>
          </div>
          <div class="button-excluir-adm">
            <RouterLink to="/listalivro" class="button-link"  > <i class="bi bi-trash"></i></RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">2</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <RouterLink to="/adicionarlivro" class="button-link"  ><i class="bi bi-pencil-square"></i></RouterLink>
          </div>
          <div class="button-excluir-adm">
            <RouterLink to="/listalivro" class="button-link"  > <i class="bi bi-trash"></i></RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">3</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">4</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">5</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href=" " class=" button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">6</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">7</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="lista-adm mt-2">
      <div class="text-lista">8</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">9</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">10</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">11</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">12</div>
      <div class="text-lista">Programador pragmatico </div>
      <div class="text-lista">Autor</div>
      <div class="text-lista">Humor</div>
      <div class="text-lista">1</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <a href="" class="button-link">
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>
          <div class="button-excluir-adm">
            <a href="" class="button-link">
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
