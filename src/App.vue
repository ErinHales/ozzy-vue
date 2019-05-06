<template>
  <v-app>
    <div class="application-wrap">
      <!-- <transition name="fade"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
.application-wrap
  min-width 100vw
  min-height 100vh

/* * * * *  TRANSITIONS * * * * */
.fade-enter-active, .fade-leave-active
  transition opacity .3s

.fade-enter, .fade-leave-to
  opacity 0

/* * * * *  APP STYLE CLASSES * * * * */
.link
  text-decoration none
</style>
