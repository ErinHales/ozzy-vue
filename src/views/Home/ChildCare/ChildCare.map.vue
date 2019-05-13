<template>
  <div class="map">
    <GmapMap
      :center="{lat:position.lat, lng:position.long}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 50vh; max-height: 500px; min-height: 400px;"
    >
      <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      /> -->
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'Map',

  data: () => ({
    position: {
      lat: 37,
      long: -111
    }
  }),

  created () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition)
    } else {
      alert('Sorry, Geolocation is not supported by this browser.')
    }
  },

  methods: {
    setPosition (position) {
      console.log('something')
      this.position = {
        long: position.coords.longitude,
        lat: position.coords.latitude
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.map
  background-color gray
</style>
