<template>
  <div>
    <v-card :color="author === 'Erin Hales' ? 'pinkLemonade' : 'mintGreen'" :style="style" class="message">
      <p class="message__date">{{ date }}</p>
      <v-text>
        {{ text }}
      </v-text>
      <p class="message__subtext">2 hours ago</p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Message',

  props: {
    author: {
      type: String,
      default: 'Erin Hales'
    }
  },

  data: () => ({
    date: 'May 2, 2019',
    text: 'Blah blah blah'
  }),

  computed: {
    style () {
      if (this.author === 'Erin Hales') {
        return ''
      } else {
        return 'float: right; text-align: right;'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.message
  position relative
  margin 15px 10px
  padding 10px
  width 70%
  max-width 500px
  &__date
    font-size 75%
    margin 0
  &__subtext
    position absolute
    bottom -32px
    font-size 75%
    width calc(100% - 20px)
</style>
