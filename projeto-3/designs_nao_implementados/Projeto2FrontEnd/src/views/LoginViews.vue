<template>
  <Header />
  <div class="login-view">
    <h1>Página de Login e Registo</h1>
    <div v-if="loggedIn">
      <h2>Bem-vindo {{ user.email }}!</h2>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <form v-if="!registering" @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
      <form v-else @submit.prevent="register">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Registrar</button>
      </form>
      <button @click="toggleRegistering">{{ registering ? 'Voltar para o Login' : 'Registrar' }}</button>
      <p v-if="registerSuccess">{{ registerSuccess }}</p>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  components: {
    Footer,
  },
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      loggedIn: false,
      user: {},
      registerSuccess: '',
      registering: false,
    };
  },
  methods: {
    login() {
      // Autenticação do usuário no Firebase
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Login bem-sucedido
          const user = userCredential.user;

          // Atualizar o estado loggedIn
          this.loggedIn = true;

          // Atualizar os detalhes do usuário
          this.user = {
            name: user.displayName,
            email: user.email,
          };

          // Limpar dados do formulário
          this.email = '';
          this.password = '';
        })
        .catch((error) => {
          // Ocorreu um erro durante o login
          console.error(error);
          alert('Falha no login. Verifique suas credenciais.');
        });
    },
    logout() {
      // Logout do usuário no Firebase
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Logout bem-sucedido

          // Atualizar o estado loggedIn
          this.loggedIn = false;

          // Limpar os detalhes do usuário
          this.user = {};
        })
        .catch((error) => {
          // Ocorreu um erro durante o logout
          console.error(error);
          alert('Falha ao fazer logout.');
        });
    },
    register() {
      // Registro de usuário no Firebase
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Registro bem-sucedido
          const user = userCredential.user;

          // Limpar dados do formulário
          this.email = '';
          this.password = '';

          // Exibir mensagem de sucesso
          this.registerSuccess = 'Registo efetuado com sucesso!';
        })
        .catch((error) => {
          // Ocorreu um erro durante o registro
          console.error(error);
          alert('Falha no registro. Verifique suas credenciais.');
        });
    },
    toggleRegistering() {
      this.registering = !this.registering;
      this.registerSuccess = '';
    },
  },
  
};
</script>

<style scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
}

.login-view h1,
.login-view h2 {
  margin-bottom: 10px;
}

.login-view form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.login-view label {
  margin-bottom: 5px;
}

.login-view input {
  margin-bottom: 10px;
  padding: 5px;
}

.login-view button {
  padding: 8px 16px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}
</style>
