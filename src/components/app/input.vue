<template>
  <div>
    <input
      type="text"
      v-model="password"
      placeholder="Password"
    >
  </div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style scoped lang="stylus">
input
  background-color rgba(255, 255, 255, 0.7)
  padding 10px
  border-radius 20px
  border none
  outline none
  width 90%
  max-width 900px
</style>
