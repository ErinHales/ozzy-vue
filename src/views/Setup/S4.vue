<template>
  <div class="step4">
    <v-layout column>
      <div className="parentQ3">
      <h3>Update Your Profile Picture</h3>
      <!-- <Dropzone onDrop={this.onDrop} className='dropzone setProfilePic' multiple={false}>
        <div className="overlayContainer">
            <img src={this.state.userPic} alt="upload" className="postImg introImg" />
            <div className="middle">
            <div className="text">Drag or click to select photo</div>
          </div>
        </div>
      </Dropzone> -->
      <Vue-Dropzone :options="dropzoneOptions"></Vue-Dropzone>
      </div>
      <v-btn
        class="step4__next"
        color="darkstormblue"
        dark
        @click="nextStep(5)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(3)" class="step4__back">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'ParentQ3',

  components: {
    VueDropzone: vue2Dropzone
  },

  data: function () {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { 'My-Awersome-Header': "header value"}
      }
    }
  },

  methods: {
    nextStep (num) {
      this.$emit('move', num)
    }
  }
}
</script>

<style scoped lang="stylus">
.step4
  display flex
  align-items center
  height calc(100vh - 100px)
  width 90%
  max-width 500px
  margin auto
  &__next,
  &__back
    width 200px
    margin 5px auto
</style>
