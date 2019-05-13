<template>
  <div class="nav">
    <v-toolbar color="deepBlue" fixed dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <!-- <v-toolbar-title>Title</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/feed" class="nav__link link"><v-btn flat>News Feed</v-btn></router-link>
        <router-link to="/findchildcare" class="nav__link link"><v-btn flat>Care Providers</v-btn></router-link>
        <router-link to="/messages" class="nav__link link"><v-btn flat>Messages</v-btn></router-link>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped lang="stylus">
.nav
  z-index 10
  &__link
    height 100%
</style>
