<template>
  <div class="step6">
    <v-layout column>
      <h3>Build your Profile!</h3>
      <v-text-field
        color="black"
        label="Name"
        v-model="name"
        box
      ></v-text-field>
      <v-textarea
        color="black"
        label="Tell us a little bit about yourself"
        v-model="bio"
        box
      ></v-textarea>
      <v-textarea
        color="black"
        label="Summary"
        v-model="header"
        box
      ></v-textarea>
      <v-btn
        color="rgba(255,255,255,0.3)"
        @click="nextStep(7)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(5)">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'CareProviderQ2',

  data () {
    return {
      name: '',
      bio: '',
      summary: ''
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
.step6
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
