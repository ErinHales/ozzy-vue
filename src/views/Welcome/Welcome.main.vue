<template>
  <div class="welcome">
    <v-layout justify-center>
      <Logo class="welcome__logo"></Logo>
    </v-layout>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Welcome',

  components: {
    Logo: () => import('../../components/assets/logo')
  }
}
</script>

<style scoped lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Galada|Lato');

.welcome
  &__logo
    width 80%
    max-width 500px
  &__btn
    max-width 150px
</style>
