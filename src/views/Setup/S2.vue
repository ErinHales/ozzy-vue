<template>
  <div class="step2">
    <v-layout column>
      <div>
        <h3>Are you interested in finding child care?</h3>
        <v-select
          color="darkstormblue"
          :items="items"
          v-model="response"
          box
        >
        </v-select>
      </div>
      <v-btn
        class="step2__next"
        color="darkstormblue"
        dark
        @click="nextStep(5)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(3)" class="step2__back">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'S2',

  data () {
    return {
      items: ['Yes', 'No'],
      response: 'Yes'
    }
  },

  methods: {
    nextStep (num) {
      this.$store.dispatch('user/seekingChildCare', this.response)
      console.log(this.$store.state.user.seekingChildCare)
      this.$emit('move', num)
    }
  }
}
</script>

<style scoped lang="stylus">
.step2
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
