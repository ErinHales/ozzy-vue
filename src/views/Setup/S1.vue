<template>
  <div class="step1">
    <v-layout column>
      <h3 class="mb-2">Please select your status</h3>
      <v-select
        color="deepBlue"
        :items="items"
        v-model="status"
        box
      >
      </v-select>
      <v-btn
        class="step1__next"
        color="deepBlue darken-1"
        dark
        @click="nextStep"
      >
        Next
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'S1',

  data () {
    return {
      items: ['Parent', 'Care Provider'],
      status: 'Parent'
    }
  },

  methods: {
    nextStep () {
      this.$store.dispatch('user/setStatus', this.status)
      console.log(this.$store.state.user.status)
      this.$emit('move', 2)
    }
  }
}
</script>

<style scoped lang="stylus">
.step1
  display flex
  align-items center
  height calc(100vh - 100px)
  width 90%
  max-width 500px
  margin auto
  &__next
    width 200px
    margin 5px auto
</style>
