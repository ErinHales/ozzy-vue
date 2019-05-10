<template>
  <div class="step6">
    <v-layout column>
      <h3 class="mb-2">Build your Profile!</h3>
      <v-form v-model="valid">
        <v-text-field
          color="deepBlue"
          label="Name"
          :rules="nameRules"
          v-model="userData.name"
          box
        ></v-text-field>
        <v-select
          color="deepBlue"
          :items="careTypes"
          :rules="typeRules"
          label="Type of business"
          v-model="response"
          box
        ></v-select>
        <v-textarea
          color="deepBlue"
          label="Description"
          v-model="userData.bio"
          :rules="bioRules"
          counter="1000"
          box
        ></v-textarea>
        <v-textarea
          color="deepBlue"
          label="Summary"
          v-model="userData.summary"
          :rules="summaryRules"
          counter="100"
          box
        ></v-textarea>
      </v-form>
      <v-btn
        class="step6__next"
        color="deepBlue darken-1"
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
      response: '',
      careTypes: ['School', 'Day Care', 'Preschool', 'Baby Sitter', 'Nanny'],
      nameRules: [
        v => !!v || 'Name is Required'
      ],
      typeRules: [
        v => !!v || 'Select an option'
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
      this.$store.dispatch('user/setCareType', this.response)
      console.log(this.$store.state.user.profileData, this.$store.state.user.careProviderType)
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
