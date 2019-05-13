<template>
  <div class="care">
    <h1>Find Child Care</h1>
    <Map></Map>
  </div>
</template>

<script>
export default {
  name: 'ChildCare',

  components: {
    Map: () => import('./ChildCare.map.vue')
  }
}
</script>

<style scoped lang="stylus">
.care
  margin-top 64px
</style>
