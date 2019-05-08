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
      <Vue-Dropzone :options="dropzoneOptions" id="myDropzone" class="step4__dropzone"></Vue-Dropzone>
      </div>
      <v-btn
        :loading="loading"
        :disabled="loading"
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
    const vm = this
    return {
      loading: false,
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        maxFilesize: 5,
        // headers: { 'My-Awersome-Header': 'header value' },
        maxFiles: 1,
        init: function () {
          console.log(this)
          this.on('addedfile', function (file) {
            if (this.files.length > 1) {
              this.removeFile(this.files[0])
            }
          })
          this.on('processing', function () {
            vm.loading = true
          })
          this.on('complete', function () {
            vm.loading = false
          })
        }
      }
    }
  },

  methods: {
    triggerLoad () {
      this.loading = true
    },
    // onDrop = files => {
    //   // This takes the file that is uploaded from react-dropzone and immediately uploads it onto Cloudinary. Cloudinary returns a public id and url for the image that can be used in website layouts
    //   // Push all the axios request promise into a single array
    //   let { REACT_APP_UPLOAD_PRESET, CLOUDINARY_API_KEY, REACT_APP_CLOUD_NAME } = process.env;
    //   const uploaders = files.map(file => {
    //     // Information must be in form data, that's the way Cloudinary wants it
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("upload_preset", REACT_APP_UPLOAD_PRESET); // Replace the preset name with your own
    //     formData.append("api_key", CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
    //     formData.append("timestamp", (Date.now() / 1000) | 0);

    //     // Make an AJAX upload request using Axios, pass in formData
    //     return axios.post(`https://api.cloudinary.com/v1_1/${REACT_APP_CLOUD_NAME}/image/upload`, formData, {
    //       headers: { "X-Requested-With": "XMLHttpRequest" },
    //     }).then(response => {
    //       const data = response.data;
    //       const fileURL = data.secure_url // You should store this URL for future references in your app
    //       console.log(file);
    //       this.setState({
    //         publicId: data.public_id,
    //         userPic: fileURL
    //         })
    //       })
    //     });
    //     axios.all(uploaders).then(() => {
    //         // ... perform after upload is successful operation

    //     });
    // },
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
