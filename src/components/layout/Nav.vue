<template>
  <div class="nav">
    <v-toolbar color="deepBlue" fixed dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <!-- <v-toolbar-title>Title</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat><router-link to="/feed" class="nav__link">News Feed</router-link></v-btn>
        <v-btn flat><router-link to="/findchildcare" class="nav__link">Care Providers</router-link></v-btn>
        <!-- <v-btn flat></v-btn> -->
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
    color white
    text-decoration none
</style>
