<template>
  <div class="step5">
    <v-layout column>
      <h3 class="mb-2">What type of child care provider?</h3>
      <v-form v-model="valid">
        <v-select
          color="deepBlue"
          :items="careTypes"
          :rules="rules"
          v-model="response"
          box
        >
        </v-select>
      </v-form>
      <v-btn
        class="step5__next"
        color="deepBlue darken-1"
        dark
        @click="nextStep(5)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(3)" class="step5__back">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'S5',

  data () {
    return {
      valid: false,
      careTypes: ['School', 'Day Care', 'Preschool', 'Baby Sitter', 'Nanny'],
      response: '',
      rules: [
        v => !!v || 'Select an option'
      ]
    }
  },

  methods: {
    nextStep (num) {
      if (this.valid || num === 4) {
        this.$store.dispatch('user/setCareType', this.response)
        console.log(this.$store.state.user.careProviderType)
        this.$emit('move', num)
      }
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
