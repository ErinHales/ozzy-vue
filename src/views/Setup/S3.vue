<template>
  <div class="step3">
    <v-layout column>
      <!-- <div className="parentQ2"> -->
      <h3>What channels would you like to see in your newsfeed?</h3>
      <v-select
        v-model="subscribedChannels"
        :items="channels"
        box
        chips
        multiple
      ></v-select>
      <v-btn
        color="rgba(255,255,255,0.3)"
        @click="nextStep(4)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(2)">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'ParentQ2',

  data () {
    return {
      channels: ['Just Moms', 'Just Dads', 'Expecting', 'Babies', 'Toddlers', 'Elementary', 'Pre-Teen', 'Teen'],
      subscribedChannels: []
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
.step3
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
