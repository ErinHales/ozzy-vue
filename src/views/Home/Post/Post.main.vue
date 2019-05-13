<template>
  <div class="post view-container">
    <v-card class="post__content">
      <v-layout justify-space-between>
        <v-btn color="deepBlue">Post</v-btn>
        <v-select
          :items="categories"
          v-model="category"
          color="deepBlue"
          class="post__category"
          solo
        ></v-select>
      </v-layout>
      <v-textarea
        box
        color="deepBlue"
      ></v-textarea>
      <Vue-Dropzone :options="dropzoneOptions" id="postDropzone" class="post__dropzone"></Vue-Dropzone>
    </v-card>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from 'axios'

export default {
  name: 'Post',

  components: {
    VueDropzone: vue2Dropzone
  },

  data: function () {
    const vm = this
    return {
      categories: ['All', 'Just Moms', 'Just Dads', 'Expecting', 'Babies', 'Toddlers', 'Elementary', 'Pre-Teen', 'Teen'],
      category: 'All',
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
    }
  }
}
</script>

<style scoped lang="stylus">
.post
  display flex
  flex-direction column
  align-items center
  &__content
    width 100%
    max-width 700px
    margin 20px
    padding 10px
  &__category
    max-width 250px
  &__dropzone
    display flex
    flex-direction column
    align-items center
    max-width 200px
    margin 20px 0
    background-color transparent
    border 2px dotted black
</style>
