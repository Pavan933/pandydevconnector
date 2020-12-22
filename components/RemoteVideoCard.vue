<template>
  <div v-if="user" class="videothumbnail">
    <div class="d-flex align-items-center justify-content-between w-100">
      <div class="d-flex">
        <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
        <div class="pl-3 m-auto">
          <h6 class="mb-0 uname-wrap" data-toggle="tooltip" title="Akhil D Souza">
            {{ user ? user.name : 'student-' + user.id }}
          </h6>
        </div>
      </div>
      <div class="ml-auto user-list-controllers">
        <a v-if="handRaised" href="#" class="mute">
          <i class="mdi mdi-human-greeting"></i>
        </a>
        <a v-if="audioMute" href="#" class="mute" @click="fToggleAudio">
          <i class="mdi mdi-microphone-off"></i>
        </a>
        <a v-else href="#" data-toggle="tooltip" title="Unmute" @click="fToggleAudio">
          <i class="mdi mdi-microphone"></i>
        </a>
        <a href="#" data-toggle="tooltip" title="Remove" @click="fRemoveUser">
          <i class="mdi mdi-close-circle"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      audioMute: this.user ? this.user.audioMute : true,
      handRaised: this.user ? this.user.raiseHand : false
    }
  },

  computed: {
    isVideo() {
      return false
    },
    isAudio() {
      return this.audioMute
    }
  },
  mounted() {
    this.loadAudioTrack()
  },
  methods: {
    fToggleAudio() {
      this.audioMute = !this.audioMute
      this.$emit('muteAudio', this.audioMute, this.user.id)
    },
    fRemoveUser() {
      this.$emit('removeParticipant', this.user.id)
    },
    loadAudioTrack() {
      if (this.user.audioTrack !== undefined && this.user.audioTrack !== null) {
        this.user.audioTrack.attach(this.$refs.audioTrack)
      }
    }
  }
}
</script>

<style scoped>
.videothumbnail {
  display: flex !important;
  background-color: #3e4b5b;
  color: #fff;
  width: 100%;
  height: 42px;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid #fff;
  justify-content: space-between;
}
.videothumbnail .video-head {
  flex-grow: 0;
  justify-content: flex-start;
}
.videothumbnail .video-controler {
  justify-content: flex-end;
}

.videothumbnail .video-controler {
  justify-content: flex-end;
}
.uname-wrap {
  white-space: nowrap;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-list-controllers a {
  color: #fff;
}
.user-list-controllers a.mute {
  color: #ff4444;
}
</style>
