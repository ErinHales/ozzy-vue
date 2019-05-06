<template>
  <v-stepper v-model="el" id="setup" color="black">
    <v-stepper-header color="black">
      <v-stepper-step step="1" :complete="el > 1"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2" :complete="el > 2"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" :complete="el > 3"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4" :complete="el > 4"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="5" :complete="el > 5"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="6" :complete="el > 6"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="7" :complete="el > 7"></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="8" :complete="el > 8"></v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <S1 @move="setStepper"></S1>
      </v-stepper-content>

      <v-stepper-content step="2">
        <S2 @move="setStepper"></S2>
      </v-stepper-content>

      <v-stepper-content step="3">
        <S3 @move="setStepper"></S3>
      </v-stepper-content>

      <v-stepper-content step="4">
        <S4 @move="setStepper"></S4>
      </v-stepper-content>

      <v-stepper-content step="5">
        <S5 @move="setStepper"></S5>
      </v-stepper-content>

      <v-stepper-content step="6">
        <S6 @move="setStepper"></S6>
      </v-stepper-content>

      <v-stepper-content step="7">
        <S7 @move="setStepper"></S7>
      </v-stepper-content>

      <v-stepper-content step="8">
        <S8 @move="setStepper"></S8>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import S1 from './S1'
import S2 from './S2'
import S3 from './S3'
import S4 from './S4'
import S5 from './S5'
import S6 from './S6'
import S7 from './S7'
import S8 from './S8'

export default {
  name: 'Setup',
  data () {
    return {
      el: 0
    }
  },
  components: { S1, S2, S3, S4, S5, S6, S7, S8 },
  methods: {
    setStepper (step) {
      this.el = step
    }
  }
}
</script>

<style scoped lang="stylus">
.v-stepper__step--active
  .v-stepper__step__step
    background-color black
#setup
  background-image linear-gradient(to bottom right, #b259b6, #8459b6)
  height 100vh
  overflow hidden
</style>
