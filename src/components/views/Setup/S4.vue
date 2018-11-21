<template>
  <div>
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
      color="purple"
      @click="nextStep(5)"
    >
      Next
    </v-btn>

    <v-btn flat @click="nextStep(3)">Back</v-btn>
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

<style>

</style>
