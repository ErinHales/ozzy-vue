<template>
  <div class="step6">
    <v-layout column>
      <h3>Tell us a little bit about yourself!</h3>
      <v-form v-model="valid">
        <v-text-field
          color="darkstormblue"
          label="Name"
          :rules="nameRules"
          v-model="userData.name"
          box
        ></v-text-field>
      </v-form>
      <v-btn
        class="step6__next"
        color="darkstormblue"
        dark
        @click="nextStep(4)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(2)" class="step6__back">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'S6',

  data () {
    return {
      valid: false,
      userData: {
        name: '',
        bio: '',
        summary: ''
      },
      nameRules: [
        v => !!v || 'Name is Required'
      ],
      bioRules: [
        v => v.length <= 1000 || 'Maximum characters reached'
      ],
      summaryRules: [
        v => v.length <= 100 || 'Maximum characters reached'
      ]
    }
  },

  methods: {
    nextStep (num) {
      this.$store.dispatch('user/setProfileData', this.userData)
      console.log(this.$store.state.user.profileData)
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
  &__next,
  &__back
    width 200px
    margin 5px auto
</style>
