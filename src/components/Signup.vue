<template>
  <div class="form-inline">
    <h3>Sign Up</h3>
    <div class="form-group">
      <input type="text" placeholder="Email" class="form-control" v-model='email'>
      <input type="password" placeholder="Password" class="form-control" v-model='password'>
      <button class="btn btn-primary" @click="signUp">Sign Up</button>
    </div>
    <br><br>
    <p>{{error.message}}</p>
    <br>
    <router-link to="/signin">Already a user? Sign in</router-link>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },

    methods: {
      signUp() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
          .cath(error => {
            this.error = error
          })
      }
    }
  }
</script>