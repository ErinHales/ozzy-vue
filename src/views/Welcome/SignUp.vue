<template>
  <div class="signup">
    <v-form class="signup__form fade-in my-5" v-model="valid" @submit.prevent="signup">
      <v-text-field
        class="my-3"
        color="deepBlue"
        type="text"
        :rules="nameRules"
        v-model="userData.name"
        placeholder="Name"
        validate-on-blur
        autofocus
        solo
      ></v-text-field>
      <v-text-field
        class="my-3"
        color="deepBlue"
        type="text"
        :rules="emailRules"
        v-model="userData.email"
        placeholder="Email"
        validate-on-blur
        solo
      ></v-text-field>
      <v-text-field
        class="my-3"
        color="deepBlue"
        append-icon="remove_red_eye"
        :type="passwordType.first"
        :rules="passwordRules"
        v-model="userData.password1"
        placeholder="Password"
        validate-on-blur
        solo
        @click:append="showPasswords('first')"
      ></v-text-field>
      <v-text-field
        color="deepBlue"
        append-icon="remove_red_eye"
        :type="passwordType.second"
        :rules="confirmPasswordRules"
        v-model="userData.password2"
        placeholder="Confirm Password"
        validate-on-blur
        solo
        @click:append="showPasswords('second')"
      ></v-text-field>
      <v-layout justify-space-between>
        <h5 class="mt-3">Already have an account? <router-link to="/login" class="signup__form__link">Login</router-link></h5>
        <v-btn type="submit" color="orange" class="signup__form__submit pl-4">LOG IN<i class="material-icons">keyboard_arrow_right</i></v-btn>
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
      valid: false,
      userData: {
        name: '',
        email: '',
        password1: '',
        password2: ''
      },
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
      },
      nameRules: [
        v => !!v || 'Username is required'
      ],
      // TODO: Make better email validation
      // TODO: Check that email is not already in database
      emailRules: [
        v => !!v || 'Email is required',
        v => v.indexOf('@') > -1 || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Must be at least 8 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirm Password',
        v => v === this.userData.password1 || 'Passwords must match'
      ]
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
      if (this.valid) {
        this.$router.push({ path: '/setup' })
      }
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
      // TODO: change this
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

.signup
  display flex
  justify-content center
  align-items center
  height 100vh
  background-color #CBEAEB
  &__form
    width 90%
    max-width 400px
    &__link
      color black
</style>
