<template>
  <div class="view-container">
    <div class="messages">
      <v-card v-for="(thread, i) in threads" :key="i" class="ma-3">
        <v-layout>
          <v-avatar size="50px" class="ma-2">
            <img :src="thread.img" alt="">
          </v-avatar>
          <div class="ma-2">
            <h3>{{ thread.name }}</h3>
            <p>{{ thread.lastMessage.text }}</p>
          </div>
        </v-layout>
        <p class="messages__time">{{ thread.lastMessage.time }}</p>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',

  data: () => ({
    threads: [
      {
        img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        name: 'Hailey Smith',
        lastMessage: {
          text: 'Sounds good.',
          time: '8:45 PM'
        }
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        name: 'Hailey Smith',
        lastMessage: {
          text: 'Sounds good.',
          time: '8:45 PM'
        }
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        name: 'Hailey Smith',
        lastMessage: {
          text: 'Sounds good.',
          time: '8:45 PM'
        }
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        name: 'Hailey Smith',
        lastMessage: {
          text: 'Sounds good.',
          time: '8:45 PM'
        }
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        name: 'Hailey Smith',
        lastMessage: {
          text: 'Sounds good.',
          time: '8:45 PM'
        }
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        name: 'Hailey Smith',
        lastMessage: {
          text: 'Sounds good.',
          time: '8:45 PM'
        }
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        name: 'Hailey Smith',
       lastMessage: {
          text: 'Sounds good.',
          time: '8:45 PM'
        }
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        name: 'Hailey Smith',
       lastMessage: {
          text: 'Sounds good.',
          time: '8:45 PM'
        }
      }
    ]
  })
}
</script>

<style scoped lang="stylus">
.messages
  position relative
  max-width 700px
  margin auto
  &__time
    position absolute
    top 10px
    right 10px
</style>
