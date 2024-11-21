<template>
  <div class="container">
    <div class="user">
      <p>Bem-vindo, {{ username }}! </p>
    </div>

    <div class="titulo-adm-button mt-2" style="display: flex; justify-content: center;">
      <div class="button-adm">
        <router-link to="/listalivro">Livros</router-link>
      </div>
      <div class="button-adm">
        <router-link to="/listaUser">Usuários</router-link>
      </div>
      <div class="button-adm">
        <router-link to="/adicionarLivro">Adicionar Livros</router-link>
      </div>

      <!-- Botão de adicionar notificação -->
      <div>
        <button class="button-adm" style="color: white; border: none;  margin-left: auto; display: block;" @click="showNotificationInput = !showNotificationInput">
          Enviar Notificação
        </button>
      </div>
    </div>

    <!-- Exibir o input de notificação se showNotificationInput for verdadeiro -->
    <div v-if="showNotificationInput" class="row">
      <span>Enviar Notificação</span>
      <div class="col-12">
        <input 
          type="text" 
          v-model="newNotification" 
          placeholder="Digite a mensagem da notificação..." 
          class="form-control"
        />
        <button @click="sendNotification" class="btn btn-custom-green mt-2">Enviar</button>

      </div>
    </div>

    <div class="painel mt-3 mb-5">
      <div class="dashboard">
        <span  class="titulo-card">Livros</span>
        <div class="icon-container">
          <i class="fas fa-book"></i>
        </div>        
        <p>{{ totalLivros }}</p> <!-- Aqui exibe a quantidade de livros cadastrados -->
      </div>

      <div class="dashboard">
        <span  class="titulo-card">Usuários </span>
        <div class="icon-container">
          <i class="fas fa-users"></i>
        </div>        
        <p>{{ totalUsuarios }}</p> <!-- Exibe a quantidade de usuários cadastrados -->
      </div>

      <div class="dashboard">
        <span class="titulo-card">Livros emprestados</span>
        <div class="icon-container">
          <i class="fas fa-hand-holding-usd"></i>
        </div>       
        <p>{{ totalLivrosEmprestados }}</p> <!-- Exibe a quantidade de livros emprestados -->
      </div>
      <!--
      <div class="dashboard">
        <span  class="titulo-card">Gráfico de atividades</span>
        <canvas id="activityChart"></canvas>
      </div>
       -->
  </div>
  </div>
 
</template>



<script>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/authStore'; // Importa a store de autenticação
import axios from 'axios';
import { useNotificationStore } from '../stores/notificationStore';

export default {
  setup() {
    // Acessa a store de autenticação
    const authStore = useAuthStore();
    const username = ref(authStore.username); // Obtém o nome do usuário da store

    // Variáveis reativas para armazenar os dados
    const totalLivros = ref(0);
    const totalUsuarios = ref(0);
    const totalLivrosEmprestados = ref(0);
    const newNotification = ref(''); // Notificação para enviar
    const showNotificationInput = ref(false);
    const notificationStore = useNotificationStore(); // Store de notificações

    // Função para fazer a requisição à API
    const getData = async () => {
      try {
        const responseLivros = await axios.get('http://localhost:3000/api/books');
        totalLivros.value = responseLivros.data.length;

        const responseUsuarios = await axios.get('http://localhost:3000/admin/api/users');
        totalUsuarios.value = responseUsuarios.data.length;

        const responseLivrosEmprestados = await axios.get('https://suaapi.com/api/livros/emprestados');
        totalLivrosEmprestados.value = responseLivrosEmprestados.data.length;
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    // Método para enviar notificações
    const sendNotification = () => {
      if (newNotification.value.trim()) {
        notificationStore.addNotification(newNotification.value);
        alert('Notificação enviada com sucesso!');
        newNotification.value = ''; // Limpa o campo
        showNotificationInput.value = false; // Esconde o input após o envio
      } else {
        alert('A mensagem não pode estar vazia.');
      }
    };

    // Chama a função ao montar o componente
    onMounted(() => {
      getData();
    });

    return {
      username,  // Exporte o username para o template
      totalLivros,
      totalUsuarios,
      totalLivrosEmprestados,
      newNotification,
      sendNotification,
      showNotificationInput
    };
  },
};
</script>



<style scoped>

.icon-container {
  font-size: 36px; /* Tamanho do ícone */
  margin-bottom: 15px; /* Espaço entre o ícone e o título */
}

.titulo-card{  
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px; /* Espaço entre o título e o número */
 text-align: center;
 font-size: 18px;
 font-family: Arial, Helvetica, sans-serif;
 font-weight: bold;
}


.dashboard {
    width: 100%;
    max-width: 250px; /* Mantém o limite de largura */
    height: 200px; /* Permite ajuste dinâmico de altura com base no conteúdo */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Sombra mais suave */
    display: flex;
    flex-direction: column; /* Coloca itens em coluna para maior organização */
    justify-content: center; /* Centraliza verticalmente os itens */
    align-items: center; /* Centraliza horizontalmente os itens */
    border: 1px solid #ccc; /* Bordas mais suaves */
    border-radius: 12px; /* Bordas mais arredondadas */
    padding: 20px; /* Mais espaço interno para respiro */
    background: linear-gradient(135deg, #ffffff, #f0f0f0); /* Gradiente leve para um toque moderno */
    overflow: hidden; /* Remove conteúdo que excede os limites */
    transition: all 0.3s ease; /* Suaviza animações */
}

/* Efeito de hover */
.dashboard:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Sombra mais pronunciada ao passar o mouse */
    transform: scale(1.02); /* Leve aumento no tamanho */
}

.painel{
    width: 100%;
    max-width: 833px; /* Mantém o limite de largura */
    height: auto; /* Permite ajuste dinâmico de altura com base no conteúdo */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Sombra mais suave */
    display: flex;    
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;    
    background-color: #f9f9f9;
    gap: 15px;
}

/* Cores para cada div */
.painel .dashboard:nth-child(1) {
  background: linear-gradient(to bottom,#335844, #93BFA7);/* Gradiente rosa e azul claro */
}

.painel .dashboard:nth-child(2) {
    background: linear-gradient(135deg, #335844, #93BFA7); /* Gradiente lilás e rosa */
}

.painel .dashboard:nth-child(3) {
  background: linear-gradient(to bottom, #335844, #93BFA7); /* Gradiente laranja e branco */
}


.dashboard i {
    font-size: 35px; /* Tamanho dos ícones */
    margin-right: 10px; /* Espaço entre o ícone e o texto */
    color: white; /* Cor do ícone */
}
.dashboard p, span {
    font-size: 35px; /* Tamanho do texto */
    font-weight: bold; /* Deixar o texto em negrito */
    color: white;
}
.dashboard span {
    font-size: 20px; /* Tamanho do texto */
    font-weight: bold; /* Deixar o texto em negrito */
    color: white;
}

.btn-custom-green {
  background-color: #335844; /* Cor de fundo verde */
  color: white; /* Cor do texto branca */
  border: none; /* Remove borda */
}

.btn-custom-green:hover {
  background-color: #335844; /* Mantém a cor de fundo original */
  border: none; /* Remove qualquer borda adicional no hover */
  box-shadow: none; /* Remove a sombra do hover */
  color: white;
}

</style>

