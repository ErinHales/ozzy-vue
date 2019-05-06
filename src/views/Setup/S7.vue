<template>
  <div class="step7">
    <v-layout column>
      <v-text-field
        color="darkstormblue"
        label="Address Line 1"
        v-model="address.line1"
        box
      ></v-text-field>
      <v-text-field
        color="darkstormblue"
        label="Address Line 2"
        v-model="address.line2"
        box
      ></v-text-field>
      <v-text-field
        color="darkstormblue"
        label="City"
        v-model="address.city"
        box
      ></v-text-field>
      <v-select
        color="darkstormblue"
        :items="states"
        label="State"
        v-model="address.state"
        box
      ></v-select>
      <v-text-field
        color="darkstormblue"
        label="ZIP Code"
        v-model="address.zip"
        box
      ></v-text-field>
      <v-btn
        class="step7__next"
        color="darkstormblue"
        dark
        @click="nextStep(8)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(6)" class="step7__back">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'CareProviderQ3',

  data () {
    return {
      address: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: ''
      },
      states: ['Alabama(AL)', 'Alaska(AK)', 'Arizona(AZ)', 'Arkansas(AR)', 'California(CA)', 'Colorado(CO)', 'Connecticut(CT)', 'District of Columbia(DC)', 'Delaware(DE)', 'Florida(FL)', 'Georgia(GA)', 'Hawaii(HI)', 'Idaho(ID)', 'Illinois(IL)', 'Indiana(IN)', 'Iowa(IA)', 'Kansas(KS)', 'Kentucky(KY)', 'Louisiana(LA)', 'Maine(ME)', 'Maryland(MD)', 'Massachusetts(MA)', 'Michigan(MI)', 'Minnesota(MN)', 'Mississippi(MS)', 'Missouri(MO)', 'Montana(MT)', 'Nebraska(NE)', 'Nevada(NV)', 'New Hampshire(NH)', 'New Jersey(NJ)', 'New Mexico(NM)', 'New York(NY)', 'North Carolina(NC)', 'North Dakota(ND)', 'Ohio(OH)', 'Oklahoma(OK)', 'Oregon(OR)', 'Pennsylvania(PA)', 'Puerto Rico(PR)', 'Rhode Island(RI)', 'South Carolina(SC)', 'South Dakota(SD)', 'Tennessee(TN)', 'Texas(TX)', 'Utah(UT)', 'Vermont(VT)', 'Virginia(VA)', 'Washington(WA)', 'West Virginia(WV)', 'Wisconsin(WI)', 'Wyoming(WY)']
    }
  },

  methods: {
    nextStep (num) {
      this.$emit('move', num)
    }
  }
}
</script>

<style lang="stylus">
.v-chip
  background-color white !important

.step7
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
