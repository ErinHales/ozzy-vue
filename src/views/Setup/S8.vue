<template>
  <div class="step8">
    <v-layout column>
      <v-btn
        color="rgba(255,255,255,0.3)"
        @click="nextStep"
      >
        Continue
      </v-btn>

      <v-btn flat>Cancel</v-btn>
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
  &__next
    width 150px
    margin auto
</style>
