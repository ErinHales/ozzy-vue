<template>
  <div class="care view-container">
    <Map></Map>
    <v-layout column class="care__providers">
      <Provider v-for="(provider, i) in providers" :key="i" :img="provider.img" :name="provider.name" :rating="provider.rating" :about="provider.about"></Provider>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'ChildCare',

  components: {
    Map: () => import('./ChildCare.map.vue'),
    Provider: () => import('./ChildCare.provider.vue')
  },

  data: () => ({
    providers: [
      {
        img: 'http://i68.tinypic.com/339lfs5.jpg',
        name: 'Karen',
        rating: '2',
        about: 'Blah'
      },
      {
        img: 'http://i65.tinypic.com/xe4egp.jpg',
        name: 'Jessica',
        rating: '5',
        about: 'Blah'
      },
      {
        img: 'http://i63.tinypic.com/38rww.jpg',
        name: 'Lisa',
        rating: '4',
        about: 'Blah'
      }
    ]
  })
}
</script>

<style scoped lang="stylus">
.care
  &__providers
    width 100%
    max-width 700px
    margin auto
</style>
