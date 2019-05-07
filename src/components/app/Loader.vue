<template>
  <div class="loader">
    <div class="loader__animation--start" :class="{ 'loader__animation--finish': appReady }"></div>
    <v-layout justify-center align-center class="loader__img-container">
      <Logo class="loader__img-container__img"></Logo>
    </v-layout>
    <audio autoplay>
      <source src="../../assets/jingle2.mp3">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'Loader',

  data () {
    return {
      appReady: false
    }
  },

  components: {
    Logo: () => import('../app/logo.vue')
  },

  created () {
    var self = this
    setTimeout(function () {
      self.$nextTick(function () {
        self.appReady = true
      })
      setTimeout(function () {
        self.$router.push({ path: '/login' })
      }, 1000)
    }, 1500)
  }
}
</script>

<style scoped lang="stylus">
.loader
  background-image linear-gradient(to bottom right, #fac8bf, #a7bcc5)
  &__animation
    &--start
      background-color rgba(255,255,255,0.3)
      border-radius 50%
      width 0
      height 0
      position absolute
      top 35%
      left 50%
      transition all 1s ease-in-out
    &--finish
      background-color rgba(255,255,255,1)
      // background-color #fac8bf
      width 100%
      height 135%
      padding-top 200%
      top -35%
      left 0%
      border-radius 0
      box-shadow: 0px -2px 2px rgba(255,255,255,0.6);
      z-index 2
  &__img-container
    height 100vh
    &__img
      position relative
      top -15%
      width 80%
      max-width 500px
      padding 50px
      background-color rgba(255,255,255,0.3)
      border-radius 50%
      // z-index 1
</style>
