<template>
  <div class="actions">
    <v-layout class="actions__section">
      <v-layout align-center class="actions__action">
        <div class="actions__action__icon">
          <Heart></Heart>
        </div>
        <p class="ma-0">{{ numLikes }}</p>
      </v-layout>
      <v-layout align-center class="actions__action">
        <button @click="comment = !comment">
          <img src="@/assets/Comment.png" alt="Comment" class="actions__action__icon">
        </button>
        <p class="ma-0">{{ numComments }}</p>
      </v-layout>
    </v-layout>
    <v-layout v-if="comment" class="actions__comment">
      <v-avatar size="60px" class="actions__comment__avatar">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="profile" aspect-ratio="1"></v-img>
      </v-avatar>
      <v-text-field outline color="deepBlue" placeholder="Comment. . ."></v-text-field>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Actions',

  data: () => ({
    numLikes: 10,
    numComments: 3,
    comment: false
  }),

  components: {
    Heart: () => import('@/components/app/Heart')
  }
}
</script>

<style scoped lang="stylus">
.actions
  &__section
    width 200px
    margin-bottom 10px
  &__action
    margin-right 40px
    &__icon
      width 30px
      height 30px
      margin 10px
  &__comment
    &__avatar
      margin 0px 10px
</style>
