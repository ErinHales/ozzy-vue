<template>
<transition name="fade">
  <div id="login">
    <img src="http://i67.tinypic.com/33lm8g4.jpg" alt="" />
    <form @submit.prevent="login">
      <input
        type="text"
        v-model="email"
        placeholder="Email">
      <input
        type="text"
        v-model="password"
        placeholder="Password">
        <h5>Don't have an account? <router-link to="/signup" class="link">Sign Up</router-link></h5>
      <button type="submit" class="submit">LOG IN</button>
    </form>
  </div>
</transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.get(`/api/user/${this.email}/${this.password}`).then(response => {
        if (response.data === 'Username does not exist') {
          alert('Email does not exist. Try again or go to sign up page')
        } else if (response.data === 'Password did not match the email') {
          alert('Incorrect password. Try again or go to sign up page.')
        } else {
          this.$store.commit({
            type: 'setUserData',
            data: response.data
          })
          this.$store.commit({
            type: 'toggleLogin',
            toggle: true
          })
          window.location.hash = '#/users'
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
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
.link {
  color: black;
  background-color: transparent;
  padding: 5px;
  text-decoration: none;
  border: 1px solid black;
  margin: 5px;
}
img {
  width: 200px;
  margin: 10px;
}
.arrow {
  margin: 0px 5px;
}
input {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  width: 70%;
}

@media (max-width: 1000px) {
  form {
    width: 60%;
  }
}
@media (max-width: 700px) {
  form {
    width: 80%;
  }
}
@media (max-width: 500px) {
  input {
    width: 80%;
  }
}
</style>
