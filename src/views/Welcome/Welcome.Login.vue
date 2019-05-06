<template>
  <div class="login fade-in">
    <v-form class="login__form my-5" @submit.prevent="login">
      <v-text-field
        class="mb-5"
        color="#fac8bf"
        type="text"
        v-model="email"
        placeholder="Email"
        autofocus
      ></v-text-field>
      <v-text-field
        class="mb-4"
        color="#fac8bf"
        append-icon="remove_red_eye"
        :type="type"
        v-model="password"
        placeholder="Password"
        @click:append="showPassword"
      ></v-text-field>
      <v-layout justify-space-between>
        <h5 class="mt-3">Don't have an account? <router-link to="/signup" class="login__form__link">Sign Up</router-link></h5>
        <v-btn type="submit" color="#fac8bf" class="login__form__submit pl-4">LOG IN<i class="material-icons">keyboard_arrow_right</i></v-btn>
      </v-layout>
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

  // mounted () {
  //   let elements = document.getElementsByClassName('fade-in')
  //   let delay = 0.5
  //   elements.forEach(element => {
  //     element.style.animationDelay = `${delay}s`
  //     delay += 0.5
  //   })
  // },

  methods: {
    showPassword () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    login () {
      console.log('Login attempt')
      this.$router.push({ path: '/setup' })
      // axios.get(`/api/user/${this.email}/${this.password}`).then(response => {
      //   if (response.data === 'Username does not exist') {
      //     alert('Email does not exist. Try again or go to sign up page')
      //   } else if (response.data === 'Password did not match the email') {
      //     alert('Incorrect password. Try again or go to sign up page.')
      //   } else {
      //     this.$store.commit({
      //       type: 'setUserData',
      //       data: response.data
      //     })
      //     this.$store.commit({
      //       type: 'toggleLogin',
      //       toggle: true
      //     })
      //     window.location.hash = '#/users'
      //   }
      // })
    }
  }
}
</script>

<style scoped lang="stylus">
@keyframes fadeIn
  from
    opacity 0
    top 20px
  to
    opacity 1
    top 0px

.fade-in
  opacity 0
  position relative
  top 20px
  animation fadeIn 0.5s forwards 1s

.login
  display flex
  justify-content center
  align-items center
  height 100vh
  &__form
    width 90%
    max-width 400px
    &__link
      color black
</style>
