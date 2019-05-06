<template>
  <div class="step8">
    <v-layout column>
      <v-btn
        class="step8__next"
        color="darkstormblue"
        dark
        @click="nextStep"
      >
        Continue
      </v-btn>

      <v-btn flat class="step8__back">Cancel</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'S1',
  methods: {
    nextStep () {
      this.$emit('move', 1)
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
