<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, Usuário!</p>
    </div>

    <div class="titulo-adm-button ">
      <div class="button-adm">
        <RouterLink to="/listalivro">Livros</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/listaUser">Usuários</RouterLink>
      </div>
      <div class="button-adm">
        <RouterLink to="/adicionarLivro">Adicionar Livros</RouterLink>
      </div>
      <div class="input-adm">
        <input type="text" name="" id="" placeholder="Pesquisar Usuários">
        <button><i class="bi bi-search"></i></button>
      </div>
    </div>

    <div class="titulo-adm mt-5">
      <div class="text-emp">Id</div>
      <div class="text-emp">Nome</div>
      <div class="text-emp">Email</div>
      <div class="text-emp">Status</div>
      <div class="text-emp">Hierarquia</div>
      <div class="text-emp">Option</div>

    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">1</div>
      <div class="text-lista">Victor Ribeiro</div>
      <div class="text-lista">victor@victor</div>
      <div class="text-lista">Ativo</div>
      <div class="text-lista">Usuario</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <RouterLink to="/PerfilVistaADM" class="button-link"><i class="bi bi-person-fill-add"></i></RouterLink>
          </div>
          <div class="button-editar-adm">
            <RouterLink to="#" class="button-link"><i class="bi bi-person-fill-slash"></i></RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="lista-adm mt-2">
      <div class="text-lista">2</div>
      <div class="text-lista">Victor Ribeiro</div>
      <div class="text-lista">victor@victor</div>
      <div class="text-lista">Ativo</div>
      <div class="text-lista">Usuario</div>
      <div class="text-lista">
        <div class="button-perfil">
          <div class="button-editar-adm">
            <RouterLink to="/PerfilVistaADM" class="button-link"><i class="bi bi-person-fill-add"></i></RouterLink>
          </div>
          <div class="button-editar-adm">
            <RouterLink to="#" class="button-link"><i class="bi bi-person-fill-slash"></i></RouterLink>
          </div>
        </div>
      </div>
    </div>






  </div>
</template>

<script>

</script>

<style scoped>
/* Adicione seus estilos personalizados aqui */
</style>
