<template>
  <div>
    <div className="parentQ2">
      <h3>What channels would you like to see in your newsfeed?</h3>
      <v-btn>Just Moms</v-btn>
      <v-btn>Just Dads</v-btn>
      <v-btn>Expecting</v-btn>
      <v-btn>Babies</v-btn>
      <v-btn>Toddlers</v-btn>
      <v-btn>Elementary</v-btn>
      <v-btn>Pre-Teen</v-btn>
      <v-btn>Teen</v-btn>
      <v-btn>All Grown Up</v-btn>
    </div>
    <v-btn
      color="purple"
      @click="nextStep(4)"
    >
      Next
    </v-btn>

    <v-btn flat @click="nextStep(2)">Back</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ParentQ2',
  methods: {
    nextStep (num) {
      this.$emit('move', num)
    }
  }
}
</script>

<style>

</style>
