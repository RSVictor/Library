import axios from 'axios'; // Importa Axios para requisições HTTP

// Cria instância do Axios para gerenciamento de livros
const booksApiClient = axios.create({
    baseURL: 'http://localhost:3000/api/books', // API para livros
    headers: {
        'Content-Type': 'application/json',
    },
});

// Cria instância do Axios para login e outras rotas gerais
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api', // API para login/usuários
    headers: {
        'Content-Type': 'application/json',
    },
});

// Adiciona interceptores a ambas as instâncias para enviar token JWT
const attachInterceptor = (client) => {
    client.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
};

attachInterceptor(booksApiClient);
attachInterceptor(apiClient);

// Exporta funções CRUD para livros
export const booksService = {
    getBooks() {
        return booksApiClient.get('/'); // Obtém todos os livros
    },
    addBook(book) {
        return booksApiClient.post('/', book); // Adiciona um novo livro
    },
    fetchBookById(id) {
        console.log(`Buscando livro com ID: ${id}`);
        return booksApiClient.get(`/${id}`).then(response => response.data);
    },
    updateBook(id, book) {
        return booksApiClient.put(`/${id}`, book); // Atualiza um livro existente
    },
    deleteBook(id) {
        return booksApiClient.delete(`/${id}`); // Deleta um livro pelo ID
    },
};

// Exporta funções relacionadas ao usuário/login
export const userService = {
    login(credentials) {
        return apiClient.post('/auth/login', credentials); // Realiza login
    },
    async getProfile() {
        const response = await apiClient.get('/profile');
        return response.data;
      },
    register(userData) {
        return apiClient.post('/auth/register', userData); // Registra um novo usuário
    },
    getProfile() {
        return apiClient.get('/profile'); // Obtém perfil do usuário
    },
};


// Função para buscar os livros mais buscados da API
const fetchMostSearchedBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/books/most-searched');
    mostSearchedBooks.value = response.data; // Atualiza o estado com os livros mais buscados
  } catch (error) {
    console.error('Erro ao buscar livros mais buscados', error);
  }
};

// Função para registrar a visualização de um livro
const incrementSearchCount = async (bookId) => {
  try {
    await axios.post(`http://localhost:3000/api/books/viewed/${bookId}`);
  } catch (error) {
    console.error('Erro ao registrar busca', error);
  }
};

  

// Exporta os clientes de API para uso em outros módulos
export { booksApiClient, apiClient };