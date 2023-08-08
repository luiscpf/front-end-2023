<template>
  <div class="login-view box is-link">
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
 
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
 
  name: 'RegistrationView',
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
  created() {
    // Check if user is already logged in
    firebase.auth().onAuthStateChanged((user) => {
      if (user && !this.registering) {
        // User is logged in and not registering
        this.loggedIn = true;
        this.user = {
          name: user.displayName,
          email: user.email,
        };
      } else {
        // User is not logged in or registering
        this.loggedIn = false;
        this.user = {};
      }
    });
  },
  methods: {
    login() {
      if (!this.registering) {
        // Authentication of the user in Firebase
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Successful login
            const user = userCredential.user;

            // Update loggedIn state
            this.loggedIn = true;

            // Update user details
            this.user = {
              name: user.displayName,
              email: user.email,
            };

            // Clear form data
            this.email = '';
            this.password = '';
          })
          .catch((error) => {
            // Error during login
            console.error(error);
            alert('Failed to log in. Please check your credentials.');
          });
      }
    },
    logout() {
      // Logout the user from Firebase
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Successful logout

          // Update loggedIn state
          this.loggedIn = false;

          // Clear user details
          this.user = {};
        })
        .catch((error) => {
          // Error during logout
          console.error(error);
          alert('Failed to log out.');
        });
    },
    register() {
      if (this.registering && !this.loggedIn) {
        // User registration in Firebase
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Successful registration
            const user = userCredential.user;

            // Clear form data
            this.email = '';
            this.password = '';

            // Exibir mensagem de sucesso
            this.registerSuccess = 'Registo efetuado com sucesso!';
          })
          .catch((error) => {
            // Error during registration
            console.error(error);
            alert('Falha no registro. Verifique suas credenciais.');
          });
      }
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
