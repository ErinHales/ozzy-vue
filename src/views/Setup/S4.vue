<template>
  <div class="step4">
    <v-layout column>
      <div className="parentQ3">
      <h3 class="mb-2">Upload Your Picture</h3>
      <Vue-Dropzone :options="dropzoneOptions" id="myDropzone" class="step4__dropzone"></Vue-Dropzone>
      </div>
      <v-btn
        :loading="loading"
        :disabled="loading"
        class="step4__next"
        color="deepBlue darken-1"
        dark
        @click="nextStep(3)"
      >
        {{ url ? 'Next' : 'Skip' }}
      </v-btn>

      <v-btn flat @click="nextStep(1)" class="step4__back">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from 'axios'

export default {
  name: 'S4',

  components: {
    VueDropzone: vue2Dropzone
  },

  mounted () {
    console.log(process.env.VUE_APP_CLOUD_NAME)
    // axios.get('/api/test', (res) => {
    //   console.log(res)
    // })
  },

  data: function () {
    const vm = this
    return {
      loading: false,
      url: '',
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        maxFilesize: 5,
        maxFiles: 1,
        init: function () {
          this.on('addedfile', function (file) {
            if (this.files.length > 1) {
              this.removeFile(this.files[0])
            }
          })
          this.on('processing', function () {
            vm.loading = true
          })
          this.on('complete', function (file) {
            vm.loading = false
            vm.upload(file)
          })
        }
      }
    }
  },

  methods: {
    triggerLoad () {
      this.loading = true
    },
    upload (file) {
      const { VUE_APP_CLOUDINARY_UPLOAD_PRESET, VUE_APP_CLOUDINARY_API_KEY, VUE_APP_CLOUD_NAME } = process.env
      console.log(VUE_APP_CLOUDINARY_UPLOAD_PRESET, VUE_APP_CLOUDINARY_API_KEY, VUE_APP_CLOUD_NAME)

      // Information must be in form data, that's the way Cloudinary wants it
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', VUE_APP_CLOUDINARY_UPLOAD_PRESET) // Replace the preset name with your own
      formData.append('api_key', VUE_APP_CLOUDINARY_API_KEY) // Replace API key with your own Cloudinary key
      formData.append('timestamp', (Date.now() / 1000) | 0)

      return axios.post(`https://api.cloudinary.com/v1_1/${VUE_APP_CLOUD_NAME}/image/upload`, formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      }).then(response => {
        const data = response.data
        const fileURL = data.secure_url // You should store this URL for future references in your app
        console.log('File uploaded successfully to Cloudinary', fileURL)
        this.url = fileURL
      })
    },
    nextStep (num) {
      this.$store.dispatch('user/setProfile', this.url)
      console.log(this.$store.state.user.profilePicture)
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
  &__dropzone
    display flex
    flex-direction column
    align-items center
    margin 20px 0
    background-color transparent
    border 2px dotted white
  &__next,
  &__back
    width 200px
    margin 5px auto
</style>
