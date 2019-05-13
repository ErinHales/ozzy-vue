<template>
  <div class="feed">
    <v-layout column align-center class="feed__layout">
      <Post v-for="(post, i) in posts" :key="i" :post="post"></Post>
    </v-layout>
    <v-btn fab dark color="mintGreen darken-1" class="feed__write-post">
      <router-link to="/post" class="link"><v-icon dark>edit</v-icon></router-link>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Feed',

  data: () => ({
    posts: [
      {
        author: 'Joe Shmoe',
        date: 'Today',
        category: 'Just Dads',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        author: 'Jane Doe',
        date: 'Yesterday',
        category: 'Just Moms',
        text: 'Some text'
      },
      {
        author: 'Jane Doe',
        date: 'Yesterday',
        category: 'Just Moms',
        text: 'Some text'
      }
    ]
  }),

  components: {
    Post: () => import('./Feed.post.vue')
  }
}
</script>

<style scoped lang="stylus">
.feed
  padding-top 64px
  background-color #F3F3F0
  &__write-post
    position fixed
    bottom 15px
    right 15px
</style>
