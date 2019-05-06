<template>
<transition name="fade">
  <div class="signup">
    <transition name="fade">
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
        <!-- onChange="(e) => checkEmail(e.target.value)"> -->
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
    </form>
  </div>
</transition>
</template>

<script>
import Modal from './Modal'
import axios from 'axios'
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
  components: {
    Modal
  },
  methods: {
    signup () {
      let userData = {
        name: this.name,
        email: this.email,
        password: this.password1
      }
      if (
        this.name !== '' &&
        this.validEmail === true &&
        this.password1.length >= 8 &&
        this.password1 === this.password2
      ) {
        axios.post('/api/signup', userData).then(response => {
          this.$store.commit({
            type: 'setUserData',
            data: response.data[0]
          })
          this.$store.commit({
            type: 'toggleLogin',
            toggle: true
          })
          window.location.hash = '#/users'
        })
      }
    },
    popUp () {
      if (
        this.name !== '' &&
        // this.validEmail === true &&
        this.email !== '' &&
        this.password1.length >= 8 &&
        this.password1 === this.password2
      ) {
        this.modal = !this.modal
      } else {
        alert('You must fill in all fields!')
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signup {
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
}
</style>
