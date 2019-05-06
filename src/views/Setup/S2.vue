<template>
  <div>
    <div>
      <h3>Are you interested <br/>in finding child care?</h3>
      <button>Yes</button>
      <button>No</button>
    </div>
    <v-btn
      color="purple"
      @click="nextStep(3)"
    >
      Next
    </v-btn>

    <v-btn flat @click="nextStep(1)">Back</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ParentQ',
  methods: {
    nextStep (num) {
      this.$emit('move', num)
    }
  }
}
</script>

<style>

</style>
