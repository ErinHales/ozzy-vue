<template>
  <div>
    <v-btn
      color="primary"
      @click="nextStep"
    >
      Continue
    </v-btn>

    <v-btn flat>Cancel</v-btn>
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

<style>

</style>
