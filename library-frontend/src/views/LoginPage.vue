<template>
   <main class="form-container m-auto ">
      <form>
       
        <h1 class="h3 mb-3 fw-normal">Entrar</h1>
    
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mt-2">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Senha</label>
        </div>
    
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Adiministrador
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
             Usuário
            </label>
          </div>
        <button class="btn text-bg-success w-100 mt-2 py-2" type="submit">Sign in</button>
        <p class="mt-1 mb-3 text-body-secondary">Não tem conta? <a href="cadastro.html">Cadastre-se</a></p>
            
      </form>
    </main>
</template>

<script>
import { userService } from '../services/api';
import { useAuthStore } from '../stores/authStore';

export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async loginUser() {
    try {
        const response = await userService.login({
            email: this.email, // Deve ser um email válido
            password: this.password // Deve ser a senha correta
        });

        console.log('Login bem-sucedido:', response);
        this.message = 'Login bem-sucedido!';
        this.$router.push('/PerfilUser'); // Redireciona após login bem-sucedido
    } catch (error) {
        this.message = 
            error.response && error.response.data && error.response.data.error
                ? error.response.data.error
                : 'Erro ao fazer o login.';
        console.error('Erro ao fazer login:', error); // Loga o erro no console
    }
  }
  }
};
</script>

<style scoped>
.form-container{  
  width: 100%;
  
}
html, body, main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
}
</style>
