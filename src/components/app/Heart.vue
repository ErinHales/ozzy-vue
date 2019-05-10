<template>
  <button class="love-btn" @click="love">
    <svg width="134" height="124" viewBox="0 0 134 124" fill="none" xmlns="http://www.w3.org/2000/svg" class="love-btn__icon">
      <path d="M64.3302 23.5706L66.6484 26.3937L68.9669 23.5709C69.5703 22.8363 70.1548 22.1208 70.7237 21.4244C75.2369 15.8997 78.7706 11.574 82.9707 8.43022C87.4966 5.04267 92.8783 3 101.288 3C110.208 3 117.39 6.1046 122.352 11.3495C127.328 16.6102 130.3 24.27 130.3 33.7701C130.3 44.7768 125.632 57.3315 114.479 68.955L114.471 68.9628L114.464 68.9706L66.6491 119.53L18.8432 68.9708L18.8355 68.9626L18.8277 68.9545C7.67055 57.3309 3 44.7763 3 33.7701C3 24.2698 5.97157 16.61 10.9474 11.3494C15.9082 6.10458 23.0893 3 32.0101 3C40.4157 3 45.7982 5.04258 50.3254 8.43041C54.531 11.5777 58.0696 15.9099 62.5893 21.4431C63.1533 22.1336 63.7325 22.8427 64.3302 23.5706Z" :fill="fill ? '#FED3C0' : ''" stroke="black" stroke-width="4"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'Heart',
  props: {
    fill: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    love () {
      this.fill = !this.fill
    }
  }
}
</script>

<style scoped lang="stylus">
.love-btn
  width 100%
  height 100%
  outline none
  &__icon
    width 100%
    height 100%
</style>
