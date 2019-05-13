<template>
  <div class="view-container">
    <div class="convo">
      <v-layout class="convo__messages">
        <Message v-for="(message, i) in messages" :key="i" :author="message.author"></Message>
      </v-layout>
      <v-textarea
        solo
        autofocus
        no-resize
        color="black"
        append-icon="send"
        class="convo__textarea"
      ></v-textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageConvo',

  components: {
    Message: () => import('./Message.message.vue')
  },

  data: () => ({
    messages: [
      {
        author: 'Erin Hales'
      },
      {
        author: 'Erin Hales'
      },
      {
        author: 'Somebody Else'
      },
      {
        author: 'Erin Hales'
      },
      {
        author: 'Somebody Else'
      },
      {
        author: 'Erin Hales'
      },
      {
        author: 'Somebody Else'
      },
      {
        author: 'Erin Hales'
      },
      {
        author: 'Somebody Else'
      }
    ]
  })
}
</script>

<style scoped lang="stylus">
.convo
  max-width 700px
  margin auto
  &__messages
    height calc(100vh - 230px)
    overflow scroll
    flex-direction column-reverse
  &__textarea
    position absolute
    bottom 10px
    width 100%
    max-width 700px
</style>
