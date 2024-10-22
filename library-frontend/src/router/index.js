import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritosPage.vue')
    },
    {
      path: '/descricao',
      name: 'descricao',
      component: () => import('../views/DescricaoPage.vue')
    },
    {
      path: '/emprestimo',
      name: 'emprestimo',
      component: () => import('../views/EmprestimoPage.vue')
    },
    {
      path: '/historico',
      name: 'historico',
      component: () => import('../views/HistoricoPage.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroPage.vue')
    },
     {
      path: '/adicionarLivro',
      name: 'adicionarLivro',
      component: () => import('../views/AdicionarLivrosPage.vue')
    },
    {
      path: '/listalivro',
      name: 'listalivro',
      component: () => import('../views/ListaLivrosPage.vue')
    },
    {
      path: '/listaUser',
      name: 'listaUser',
      component: () => import('../views/ListaUserPage.vue')
    },
    {
      path: '/historicoADM',
      name: 'historicoADM',
      component: () => import('../views/ListaUserPage.vue')
    },
    {
      path: '/PerfilVistaADM',
      name: 'PerfilVistaADM',
      component: () => import('../views/PerfilVistaAdmPage.vue')
    },
    {
      path: '/maisBuscados',
      name: 'maisBuscados',
      component: () => import('../views/MaisBuscadosPage.vue')
    },
  
  ]
  
})

export default router
