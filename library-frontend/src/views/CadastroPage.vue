<template>
  <main class="form-container w-100 m-auto">
      <form>
        
        <h1 class="h3 mb-3 fw-normal">Cadastrar</h1>
        
        <div class="form-floating">
            <input type="name" class="form-control " id="floatingInput" placeholder="Nome">
            <label for="floatingInput">Nome</label>
          </div>
        <div class="form-floating mt-2">
          <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mt-2">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Senha</label>
        </div>
    
        
        <button class="btn text-bg-success w-100 mt-2 py-2" type="submit">Cadastrar</button>
       
      </form>
    </main>
</template>




<style scoped>
.form-container{
  
  width: 100%;
}
html, body, main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
}

</style>
