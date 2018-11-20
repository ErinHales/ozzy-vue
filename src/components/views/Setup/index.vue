<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

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
export default {
  name: 'Setup',
  components: {
    S1: import('./S1.vue'),
    S2: import('./S2.vue'),
    S3: import('./S3.vue'),
    S4: import('./S4.vue'),
    S5: import('./S5.vue'),
    S6: import('./S2.vue'),
    S7: import('./S7.vue'),
    S8: import('./S8.vue')
  },
  data () {
    return {
      el: 1,
      loading: false,
      error: ''
    }
  },
  methods: {
    setStepper (step) {
      this.el = step
    }
  }
}
</script>

<style>

</style>
