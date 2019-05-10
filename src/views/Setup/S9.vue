<template>
  <div class="step8">
    <v-layout column align-center>
      <h3 class="step8__title">Congratulations!  You're all set!</h3>
      <v-btn
        class="step8__next"
        color="deepBlue darken-1"
        dark
        @click="finish"
      >
        Finish
      </v-btn>

      <v-btn flat class="step8__back" @click="nextStep()">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'S9',

  // mounted () {
  //   const self = this
  //   setTimeout(function () {
  //     self.$nextTick(function () {
  //       self.finish()
  //     })
  //   }, 1000)
  // },

  methods: {
    nextStep () {
      this.$emit('move', 6)
    },
    finish () {
      this.$store.dispatch('user/completeSetup')
      this.$router.push('/feed')
    }
  }
}
</script>

<style scoped lang="stylus">
.step8
  display flex
  align-items center
  height calc(100vh - 100px)
  width 90%
  max-width 500px
  margin auto
  &__title
    font-size 200%
    margin-bottom 100px
  &__next,
  &__back
    width 200px
    margin 5px auto
</style>
