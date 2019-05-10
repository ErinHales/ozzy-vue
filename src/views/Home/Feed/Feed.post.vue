<template>
  <div>
    <v-card class="post">
      <v-card-title primary-title>
        <v-layout justify-space-between>
          <div>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
              aspect-ratio="1"
              class="post__header__img"
            ></v-img>
            <div class="post__header__post-info">
              <h3 class="headline mb-0">{{ post.author }}</h3>
              <div>{{ post.date }}</div>
            </div>
          </div>
          <div>
            <h3 class="post__category">{{ post.category }}</h3>
            <div class="post__category-box"></div>
          </div>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <div>
          <p>{{ post.text }}</p>
        </div>
      </v-card-text>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        aspect-ratio="2"
      ></v-img>
      <v-card-actions>
        <Actions class="post__actions"></Actions>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Post',

  components: {
    Actions: () => import('./Feed.actions.vue')
  },

  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({
        author: 'Joe Shmoe',
        date: 'Today',
        category: 'Just Dads',
        text: 'Some text'
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.post
  width 100vw
  max-width 700px
  margin 20px 0
  &__header
    &__img
      display inline-block
      width 60px
    &__post-info
      display inline-block
      position relative
      bottom 10px
      margin-left 10px
  &__category
    display inline-block
    position relative
    bottom 5px
    margin-right 5px
  &__category-box
    display inline-block
    width 20px
    height 20px
    background-color pink
  &__actions
    width 100%
</style>
