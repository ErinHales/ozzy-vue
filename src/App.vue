<template>
  <v-app>
    <div class="application-wrap">
      <router-view></router-view>
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
  background-image linear-gradient(to bottom right, #b259b6, #8459b6)
  min-width 100vw
  min-height 100vh

.link
  text-decoration none
</style>
