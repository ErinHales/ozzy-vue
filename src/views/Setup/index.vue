<template>
  <v-stepper v-model="el" id="setup">
    <v-stepper-header>
      <v-stepper-step step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Name of step 3</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">Name of step 4</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="5">Name of step 5</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="6">Name of step 6</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="7">Name of step 7</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="8">Name of step 8</v-stepper-step>
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

<style>
#setup {
  background-image: linear-gradient(to bottom right, #b259b6, #8459b6);
  height: calc(100vh - 30px);
  overflow: hidden;
}
</style>
