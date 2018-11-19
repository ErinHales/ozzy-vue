<template>
  <div id="welcome">
    <img src="http://i67.tinypic.com/33lm8g4.jpg" alt="" />
    <div class="getStarted">
      <h1>Ozzy</h1>
      <router-link to="/setup" class="link">Get Started</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Galada');

#welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  background-color: #9B59B6;
  width: 100vw;
  height: 100vh;
}

img {
  margin-top: 40px;
  width: 100%;
}

h1 {
  font-family: "Galada", cursive;
  font-size: 50px;
  color: white;
  margin: 0px;
  font-weight: lighter;
  text-shadow: 5px 5px 5px rgba(0,0,0,0.25);
}
.link {
  margin-bottom: 20px;
  margin-top: -15px;
  font-size: 15px;
  margin-left: 5px;
}

.getStarted {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 250px) {
  #welcome img {
    width: 250px;
  }
}

@media (min-width: 600px) {
  #welcome {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  img {
    margin-top: 0px;
    width: 400px;
  }
  .getStarted {
    margin-left: 20px;
  }
}

@media (min-width: 1000px) {
  h1 {
    font-size: 96px;
  }
  img {
    width: 500px;
  }
  .link {
    font-size: 30px;
  }
}
</style>
