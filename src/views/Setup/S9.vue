<template>
  <div class="step8">
    <v-layout column>
      <v-btn
        class="step8__next"
        color="darkstormblue"
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
  methods: {
    nextStep () {
      this.$emit('move', 6)
    },
    finish () {
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
  &__next,
  &__back
    width 200px
    margin 5px auto
</style>
