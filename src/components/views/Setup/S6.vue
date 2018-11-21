<template>
  <div>
    <div className="careProviderQ2">
      <h3>Build your Profile!</h3>
      <div className="tellUs">
        <h3>Name</h3>
        <input type="text"/>
      </div>
      <div className="tellUs">
        <h3>Tell us a little bit about yourself</h3>
        <h5>(1000 characters)</h5>
      </div>
      <textarea className="longBio"></textarea>
      <div className="tellUs">
        <h3>Summary</h3>
        <h5>(200 characters)</h5>
      </div>
      <textarea className="shortBio"></textarea>
    </div>
    <v-btn
      color="purple"
      @click="nextStep(7)"
    >
      Next
    </v-btn>

    <v-btn flat @click="nextStep(5)">Back</v-btn>
  </div>
</template>

<script>
export default {
  name: 'CareProviderQ2',
  methods: {
    nextStep (num) {
      this.$emit('move', num)
    }
  }
}
</script>

<style>

</style>
