<template>
  <div class="login">
    <v-form class="login__form my-5" @submit.prevent="login">
      <v-text-field
        class="my-5"
        color="black"
        type="text"
        v-model="email"
        placeholder="Email"
        box
      ></v-text-field>
      <v-text-field
        color="black"
        append-icon="remove_red_eye"
        :type="type"
        v-model="password"
        placeholder="Password"
        box
        @click:append="showPassword"
      ></v-text-field>
      <h5>Don't have an account? <router-link to="/signup" class="link">Sign Up</router-link></h5>
      <button type="submit" class="submit">LOG IN</button>
    </v-form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      type: 'password',
      email: '',
      password: ''
    }
  },
  methods: {
    showPassword () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    }
  //   login () {
  //     axios.get(`/api/user/${this.email}/${this.password}`).then(response => {
  //       if (response.data === 'Username does not exist') {
  //         alert('Email does not exist. Try again or go to sign up page')
  //       } else if (response.data === 'Password did not match the email') {
  //         alert('Incorrect password. Try again or go to sign up page.')
  //       } else {
  //         this.$store.commit({
  //           type: 'setUserData',
  //           data: response.data
  //         })
  //         this.$store.commit({
  //           type: 'toggleLogin',
  //           toggle: true
  //         })
  //         window.location.hash = '#/users'
  //       }
  //     })
  //   }
  }
}
</script>

<style scoped lang="stylus">
.login
  &__form
    width 90%
    max-width 600px
    margin auto
</style>
