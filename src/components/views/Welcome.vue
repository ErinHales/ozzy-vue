<template>
  <div id="welcome">
    <img src="http://i67.tinypic.com/33lm8g4.jpg" alt="" />
    <div class="getStarted">
      <h1>Ozzy</h1>
      <router-link to="/signup" class="link">Get Started</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Galada|Lato');

#welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  background-image: linear-gradient(to bottom right, #b259b6, #8459b6);
  width: 100vw;
  height: 100vh;
}

#welcome img {
  margin-top: 40px;
  width: 100%;
}

#welcome h1 {
  font-family: "Galada", cursive;
  font-size: 50px;
  color: white;
  margin: 0px;
  font-weight: lighter;
  text-shadow: 5px 5px 5px rgba(0,0,0,0.25);
}
#welcome .link {
  margin: 10px;
  font-size: 20px;
  text-decoration: none;
  background-color: #592f6a;
  padding: 15px;
  color: white;
  font-family: "Lato", sans-serif;
}

#welcome .getStarted {
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
  #welcome img {
    margin-top: 0px;
    width: 400px;
  }
  #welcome .getStarted {
    margin-left: 20px;
  }
}

@media (min-width: 1000px) {
  #welcome h1 {
    font-size: 96px;
  }
  #welcome img {
    width: 500px;
  }
  #welcome .link {
    font-size: 30px;
  }
}
</style>
