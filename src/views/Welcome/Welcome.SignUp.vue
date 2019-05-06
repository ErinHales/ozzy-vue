<template>
<!-- <transition name="fade"> -->
  <div class="signup">
    <!-- <transition name="fade">
      <Modal v-if="modal" :name="name" :email="email" :signup="signup" :popUp="popUp" />
    </transition>
    <img src="http://i67.tinypic.com/33lm8g4.jpg" alt="" />
    <form @submit.prevent="popUp">
      <input
        type="text"
        v-model="name"
        placeholder="Name">
      <input
        type="text"
        v-model="email"
        placeholder="Email">
        onChange="(e) => checkEmail(e.target.value)">
      <input
        type="text"
        v-model="password1"
        placeholder="Password">
      <input
        type="text"
        v-model="password2"
        placeholder="Confirm Password">
      <h5>Already have an account? <router-link to="/" class="link">Login</router-link></h5>
      <button type="submit" class="submit">Create Account</button>
    </form> -->
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
        autofocus
        box
      ></v-text-field>
      <v-text-field
        class="my-3"
        color="black"
        append-icon="remove_red_eye"
        :type="passwordType.first"
        v-model="password1"
        placeholder="Password"
        autofocus
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
<!-- </transition> -->
</template>

<script>
// import Modal from './Modal'
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
  // components: {
  //   Modal
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
    // popUp () {
    //   if (
    //     this.name !== '' &&
    //     // this.validEmail === true &&
    //     this.email !== '' &&
    //     this.password1.length >= 8 &&
    //     this.password1 === this.password2
    //   ) {
    //     this.modal = !this.modal
    //   } else {
    //     alert('You must fill in all fields!')
    //   }
    // },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.signup
  // opacity 0
  // height 0px
  // overflow hidden
  // animation fade-in 1.5s forwards
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
/* .signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to bottom right, #b259b6, #8459b6);
  height: 100vh;
}
form {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 300px);
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  padding-top: 10px;
}
input {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 70%;
}
img {
  width: 200px;
  margin: 10px;
}
.link {
  color: black;
  background-color: transparent;
  padding: 5px;
  text-decoration: none;
  border: 1px solid black;
  margin: 5px;
}
.arrow {
  margin: 0px 5px;
}
.submit {
  background-color: #592f6a;
  color: white;
  border: none;
  outline: none;
  width: 100vw;
  height: 100px;
  position: absolute;
  bottom: 0px;
  font: 20px;
}
@media (max-width: 1000px) {
  .v-form {
    width: 60%;
  }
}
@media (max-width: 700px) {
  .v-form {
    width: 80%;
  }
}
@media (max-width: 500px) {
  .v-input {
    width: 80%;
  }
} */
</style>
