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
$babyBlue = #CBEAEB

.application-wrap
  min-width 100vw
  min-height 100vh

/* * * * *  TRANSITIONS * * * * */
.fade-enter-active, .fade-leave-active
  transition opacity .3s

.fade-enter, .fade-leave-to
  opacity 0

/* * * * *  APP STYLE CLASSES * * * * */
.view-container
  padding-top 64px
  background-color #F3F3F0
  min-height calc(100vh - 64px)
.link
  text-decoration none
  color white

button
  outline none
</style>
