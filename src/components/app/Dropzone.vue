<template>
  <div>

  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from 'axios'

export default {
  name: 'Dropzone',

  components: {
    VueDropzone: vue2Dropzone
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
  }
}
</script>

<style scoped lang="stylus">

</style>
