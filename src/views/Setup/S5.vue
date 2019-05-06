<template>
  <div class="step5">
    <v-layout column>
      <h3>What type of child care provider?</h3>
      <v-select
        color="darkstormblue"
        :items="careTypes"
        v-model="response"
        box
      >
      </v-select>
      <v-btn
        class="step5__next"
        color="darkstormblue"
        dark
        @click="nextStep(6)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(4)" class="step5__back">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'CareProviderQ',

  data () {
    return {
      careTypes: ['School', 'Day Care', 'Preschool', 'Baby Sitter', 'Nanny'],
      response: ''
    }
  },

  methods: {
    nextStep (num) {
      this.$emit('move', num)
    }
  }
}
</script>

<style scoped lang="stylus">
.step5
  display flex
  align-items center
  height calc(100vh - 100px)
  width 90%
  max-width 500px
  margin auto
  &__next
  &__back
    width 200px
    margin 5px auto
</style>
