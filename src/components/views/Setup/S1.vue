<template>
  <div id="step1">
    <h3>Are you a:</h3>
    <v-btn>Parent</v-btn>
    <v-btn>Care Provider</v-btn>
    <v-btn
      color="purple"
      @click="nextStep"
    >
      Next
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'S1',
  methods: {
    nextStep () {
      this.$emit('move', 2)
    }
  }
}
</script>

<style>
#step1 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
}
.v-btn {
  width: 100%;
}
</style>
