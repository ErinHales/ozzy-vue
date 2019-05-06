<template>
  <div class="signup">
    <v-form class="signup__form my-5" @submit.prevent="signup">
      <v-text-field
        class="my-3"
        color="black"
        type="text"
        v-model="name"
        placeholder="Name"
        autofocus
        box
      ></v-text-field>
      <v-text-field
        class="my-3"
        color="black"
        type="text"
        v-model="email"
        placeholder="Email"
        box
      ></v-text-field>
      <v-text-field
        class="my-3"
        color="black"
        append-icon="remove_red_eye"
        :type="passwordType.first"
        v-model="password1"
        placeholder="Password"
        box
        @click:append="showPasswords('first')"
      ></v-text-field>
      <v-text-field
        color="black"
        append-icon="remove_red_eye"
        :type="passwordType.second"
        v-model="password"
        placeholder="Password"
        box
        @click:append="showPasswords('second')"
      ></v-text-field>
      <v-layout justify-space-between>
        <h5 class="mt-3">Already have an account? <router-link to="/" class="signup__form__link link">Login</router-link></h5>
        <v-btn type="submit" class="signup__form__submit pl-4">LOG IN<i class="material-icons">keyboard_arrow_right</i></v-btn>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
// import axios from 'axios'
// import { debounce } from 'lodash'

export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password1: '',
      password2: '',
      modal: false,
      validEmail: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 12 || 'Min 12 characters',
        passwordMatch: v => v === this.password1 || 'Passwords do not match',
        email: v => this.validate() || 'Invalid Email'
        // unique: v => this.checkEmail() || 'Email must be unique'
      },
      passwordType: {
        first: 'password',
        second: 'password'
      }
    }
  },
  // watch: {
  //   email: debounce((email) => {
  //     axios.get(`/api/finduser/${email}`).then(response => {
  //       if (response.data[0]) {
  //         this.validEmail = false
  //         alert('Email must be unique!')
  //       }
  //     })
  //   }, 500)
  // },
  methods: {
    showPasswords (prop) {
      if (this.passwordType[prop] === 'password') {
        this.passwordType[prop] = 'text'
      } else {
        this.passwordType[prop] = 'password'
      }
    },
    signup () {
      this.$router.push({ path: '/setup' })
      // let userData = {
      //   name: this.name,
      //   email: this.email,
      //   password: this.password1
      // }
      // if (
      //   this.name !== '' &&
      //   this.validEmail === true &&
      //   this.password1.length >= 8 &&
      //   this.password1 === this.password2
      // ) {
      //   axios.post('/api/signup', userData).then(response => {
      //     this.$store.commit({
      //       type: 'setUserData',
      //       data: response.data[0]
      //     })
      //     this.$store.commit({
      //       type: 'toggleLogin',
      //       toggle: true
      //     })
      //     window.location.hash = '#/users'
      //   })
      // }
    },
    validate () {
      if (this.email.indexOf('@') >= 0 && this.email.indexOf('.com') === this.email.length - 4) {
        this.validEmail = true
        return true
      }
      return false
    }
  }
}
</script>

<style scoped lang="stylus">
.signup
  &__form
    width 90%
    max-width 600px
    min-width 400px
    margin auto
    &__link
      margin 0 5px
      padding 5px
      border 1px solid black
      color black
</style>
