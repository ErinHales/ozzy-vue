<template>
  <div>
    <img src="http://i67.tinypic.com/33lm8g4.jpg" alt="Ozzy Logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped lang="stylus">
.logo
  filter brightness(10) invert(1)
  opacity 0.5
  width 100%
</style>
