<template>
  <div>
    <v-card class="provider">
      <router-link to="/message">
        <v-btn fab dark color="pinkLemonade darken-1" class="provider__message">
          <v-icon dark>message</v-icon>
        </v-btn>
      </router-link>
      <v-img :src="img"></v-img>
      <v-layout justify-space-between align-center class="ma-3">
        <h2>{{ name }}</h2>
        <v-rating v-model="rating" readonly color="orange" background-color="orange"></v-rating>
      </v-layout>
      <v-card-text>
        <p>{{ about }}</p>
        <v-btn color="deepBlue" class="ma-0">View Profile</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Provider',

  props: {
    img: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      default: 'Name'
    },
    rating: {
      type: Number,
      default: 3
    },
    about: {
      type: String,
      default: 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah'
    }
  }
}
</script>

<style scoped lang="stylus">
.provider
  margin 20px 0
  &__message
    position absolute
    top 15px
    left 15px
    z-index 1
</style>
