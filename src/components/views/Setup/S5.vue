<template>
  <div>
    <div className="careProviderQ">
      <h3>What type of child care provider?</h3>
      <v-btn>School</v-btn>
      <v-btn>Day Care</v-btn>
      <v-btn>Baby Sitter</v-btn>
      <v-btn>Nanny</v-btn>
    </div>
    <v-btn
      color="purple"
      @click="nextStep(6)"
    >
      Next
    </v-btn>

    <v-btn flat @click="nextStep(4)">Back</v-btn>
  </div>
</template>

<script>
export default {
  name: 'CareProviderQ',
  methods: {
    nextStep (num) {
      this.$emit('move', num)
    }
  }
}
</script>

<style>

</style>
