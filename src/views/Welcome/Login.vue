<template>
  <div class="login">
    <v-form class="login__form fade-in my-5" v-model="valid" @submit.prevent="login">
      <v-text-field
        class="mb-5"
        color="deepBlue"
        type="text"
        :rules="emailRules"
        v-model="email"
        placeholder="Email"
        validate-on-blur
        autofocus
        solo
      ></v-text-field>
      <v-text-field
        class="mb-4"
        color="deepBlue"
        append-icon="remove_red_eye"
        :type="type"
        :rules="passwordRules"
        v-model="password"
        placeholder="Password"
        solo
        @click:append="showPassword"
      ></v-text-field>
      <v-layout justify-space-between>
        <h5 class="mt-3">Don't have an account? <router-link to="/signup" class="login__form__link">Sign Up</router-link></h5>
        <v-btn type="submit" color="orange" class="login__form__submit pl-4">LOG IN<i class="material-icons">keyboard_arrow_right</i></v-btn>
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
      valid: false,
      type: 'password',
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'Email is required'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ]
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
      if (this.valid) {
        // console.log(this.$store.state.user.hasFinishedSetup)
        if (this.$store.state.user.hasFinishedSetup) {
          this.$router.push({ path: '/feed' })
        } else {
          this.$router.push({ path: '/setup' })
        }
      }
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
  height 100vh
  display flex
  justify-content center
  align-items center
  background-color #CBEAEB
  &__card
    display flex
    justify-content center
    width 60%
    max-width 700px
  &__form
    width 90%
    max-width 400px
    &__link
      color black
</style>
