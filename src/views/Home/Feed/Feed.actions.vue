<template>
  <div class="actions">
    <v-layout>
      <div class="actions__icon">
        <Heart></Heart>
      </div>
      <p>{{ numLikes }}</p>
    </v-layout>
    <v-text-field outline color="deepBlue" placeholder="Comment. . ."></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'Actions',

  data: () => ({
    numLikes: 10
  }),

  components: {
    Heart: () => import('@/components/app/Heart')
  }
}
</script>

<style scoped lang="stylus">
.actions
  &__icon
    width 30px
    height 30px
    margin 10px
</style>
