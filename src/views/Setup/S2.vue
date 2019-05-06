<template>
  <div class="step2">
    <v-layout column>
      <div>
        <h3>Are you interested in finding child care?</h3>
        <v-select
          color="black"
          :items="items"
          v-model="response"
          box
        >
        </v-select>
      </div>
      <v-btn
        class="step2__next"
        color="rgba(255,255,255,0.3)"
        @click="nextStep(3)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(1)">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'ParentQ',

  data () {
    return {
      items: ['Yes', 'No'],
      response: 'Yes'
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
.step2
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
