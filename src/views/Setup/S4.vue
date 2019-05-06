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
      </div>
      <v-btn
        color="rgba(255,255,255,0.3)"
        @click="nextStep(5)"
      >
        Next
      </v-btn>

      <v-btn flat @click="nextStep(3)">Back</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'ParentQ3',
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
  &__next
    width 150px
    margin auto
</style>
