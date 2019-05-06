<template>
  <div class="welcome">
    <!-- <Logo :class="{ 'logo--small': appReady }" class="welcome__logo"></Logo> -->
    <!-- <Logo class="welcome__logo logo--small"></Logo> -->
    <!-- <transition name="fade" v-if="appReady"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'Welcome',

  data () {
    return {
      appReady: false
    }
  },

  components: {
    Logo: () => import('../../components/assets/logo')
  }

  // created () {
  //   var self = this
  //   setTimeout(function () {
  //     self.$nextTick(function () {
  //       self.appReady = true
  //     })
  //   }, 1000)
  // }
}
</script>

<style scoped lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Galada|Lato');

.logo--small
  width 150px !important

.welcome
  display flex
  flex-direction column
  justify-content center
  align-items center
  height 100vh
  transition all 1s
  &__logo
    width 80%
    max-width 500px
    transition all 1s
</style>
