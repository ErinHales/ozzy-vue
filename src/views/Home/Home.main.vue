<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    Nav: () => import('@/components/layout/Nav')
  }
}
</script>

<style scoped>

</style>
