<template>
  <div class="custom-bodypad">
    <div class="row mb-3">
      <div class="col-lg-3 stretch-card left-container">
        <div class="card">
          <div class="card-profiles">
            <!--    <h6>Users </h6>
                  <div class="profile-wrap">
                    <div class="wrapper d-flex align-items-center py-2 border-bottom csr" onclick="window.location.href='#'">
                        <h3 class="ml-1 font-weight-bold text-primary">U1</h3>
                        <div class="wrapper ml-3">
                          <h6 class="ml-1 mb-0">User 1</h6> 
                          <small class="ml-1 text-muted">Class X'A'</small>                     
                        </div>
                        <div class=" ml-auto px-1 py-1">
                            <i class="mdi mdi-microphone"></i>
                            <i class="mdi mdi-video"></i>
                        </div>
                    </div>
            </div>-->
            <transition name="fade">
              <div id="calendar"></div>
            </transition>
            <div v-if="displayQnA" class="qa-wrapper">
              <div class="chat is-visible">
                <div class="chat_header">
                  <div class="chat_option">
                    <div class="header_img">
                      <img src="~/assets/images/faces/face1.jpg" />
                    </div>
                    <span id="chat_head">Mathew Andrews</span>
                    <br />
                    <span class="agent">Teacher</span>
                    <span class="online">(Mathematics)</span>
                    <span id="chat_fullscreen_loader" class="chat_fullscreen_loader" style="display: block;">
                      <i class="fullscreen zmdi zmdi-window-maximize"></i>
                    </span>
                  </div>
                </div>

                <div id="chat_fullscreen" class="chat_conversion chat_converse">
                  <div id="std_view">
                    <span class="chat_msg_item chat_msg_item_admin bg-success text-white"
                      >Hey there! Any question?</span
                    >
                    <div class="fab_field border-bottom border">
                      <a id="fab_send" class="fab is-visible">
                        <i class="mdi mdi-send"></i>
                      </a>
                      <textarea
                        id="chatSend"
                        name="chat_message"
                        placeholder="Send a message"
                        class="chat_field chat_message"
                      ></textarea>
                    </div>
                  </div>
                  <span class="chat_msg_item chat_msg_item_admin">Hey there! Any question?</span>
                  <span class="chat_msg_item chat_msg_item_user">Hello!</span>
                  <div class="status">20m ago</div>
                  <span class="chat_msg_item chat_msg_item_admin">Any Queries</span>
                  <span class="chat_msg_item chat_msg_item_user"
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span
                  >
                  <span class="chat_msg_item chat_msg_item_admin"
                    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</span
                  >
                  <span class="chat_msg_item chat_msg_item_user">Where can I get some?</span>
                  <span class="chat_msg_item chat_msg_item_admin">The standard chuck...</span>
                </div>
                <div class="fab_field">
                  <a id="fab_send" class="fab is-visible">
                    <i class="mdi mdi-send"></i>
                  </a>
                  <textarea
                    id="chatSend"
                    name="chat_message"
                    placeholder="Send a message"
                    class="chat_field chat_message"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9 stretch-card">
        <div class="card card-statistics social-card card-default">
          <div class="card-header header-sm">
            <div class="d-flex align-items-center">
              <div class="wrapper d-flex align-items-center media-info text-facebook">
                <i class="mdi mdi-message-video icon-md"></i>
                <h2 class="card-title ml-3">Class X A - Mathematics</h2>
              </div>
              <div class="wrapper ml-auto action-bar custom dropdown">
                <a
                  v-if="audioMuteAll"
                  type="button"
                  data-toggle="tooltip"
                  title="Mute all"
                  data-original-title="Mute all"
                  @click="fToggleAllAudio"
                >
                  <img src="~/assets/images/icons/unmuteall.png" class="w-20px mr-2" />
                  <!-- <i class="mdi mdi-volume-off mr-3"></i> -->
                </a>
                <a
                  v-else
                  type="button"
                  data-toggle="tooltip"
                  title="UnMute all"
                  data-original-title="UnMute all"
                  @click="fToggleAllAudio"
                >
                  <!-- <img src="~/assets/images/icons/unmuteall.png" class="w-20px mr-2" /> -->
                  <img src="~/assets/images/icons/muteall_black.png" class="w-20px mr-2" />
                  <!-- <i class="mdi mdi-volume-off mr-3"></i> -->
                </a>
                <a
                  id="dropUsers"
                  class="dropdown-toggle"
                  type="button"
                  title="Student List"
                  @click="displayVideoStrip = !displayVideoStrip"
                >
                  <i class="mdi mdi-filter-variant mr-3"></i>
                </a>
              </div>
            </div>
          </div>
          <div v-show="hasMeetingStarted && !hasMeetingCompleted" class="card-body bg-dark video_body">
            <!-- video card -->

            <!-- video card -->
            <Whiteboard v-show="whiteboard" @closeWhiteboard="closeWhiteboard" />
            <!--  <div v-if="!whiteboard">
             <img src='~/assets/images/dashboard/bg_cover.jpg'/>
            </div>-->
            <div v-show="!whiteboard" class="video-wrapper">
              <div v-show="!isScreenShared && !videoMute" id="video-container" class="video-container">
                <video ref="videoTrack" class="video-track" autoplay="1" />
                <audio ref="audioTrack" muted="true" class="audio-track" autoplay="1" />
                <!-- <h6>{{ user.id }}</h6> -->
              </div>
              <div v-show="isScreenShared" class="video-content text-white">
                <i class="mdi mdi-presentation-play"></i>
                <h4 class="text-center user-name">You are presenting your Screen</h4>
                <!-- <h6>{{ user.id }}</h6> -->
              </div>
              <div v-show="videoMute && !isScreenShared" class="video-content text-white">
                <i class="mdi mdi-account"></i>
                <h4 class="text-center user-name">Mathew Andrews</h4>
              </div>
            </div>

            <div class="call-view__controls-container">
              <div class="call-view__controls">               
                <div class="call-view__controls-left">
                  <div
                    id="btn--qa"
                    class="call-view__controls__icon-btn"
                    data-toggle="tooltip"
                    title="Q&A"
                    data-original-title="Q&A"
                    :class="{ 'disable-icon': !toggleQnA }"
                    @click="
                      displayQnA = !displayQnA
                      displayVideoStrip = false
                      fToggleQnA()
                    "
                  >
                    <i
                      class="mdi"
                      :class="{ 'mdi-comment-question-outline': toggleQnA, 'mdi-calendar-today': !toggleQnA }"
                    ></i>
                  </div>
                  <div
                    id="btn--full-scrn"
                    class="call-view__controls__icon-btn"
                    data-toggle="tooltip"
                    title="Fullscreen"
                    data-original-title="Fullscreen"
                    :class="{ 'disable-icon': !fullScreen }"
                    @click="fFullScreen"
                  >
                    <i class="mdi" :class="{ 'mdi-fullscreen': !fullScreen, 'mdi-fullscreen-exit': fullScreen }"></i>
                  </div>
                </div>
                <div class="call-view__controls-center">
                  <div
                    id="btn--toggle-mic"
                    class="call-view__controls__icon-btn"
                    data-toggle="tooltip"
                    title="Microphone"
                    data-original-title="Microphone"
                    :class="{ 'disable-icon': !audioMute }"
                    @click="fToggleAudio"
                  >
                    <i class="mdi" :class="{ 'mdi-microphone-off': audioMute, 'mdi-microphone': !audioMute }"></i>
                  </div>
                  <div
                    id="btn--toggle-cam"
                    class="call-view__controls__icon-btn"
                    data-toggle="tooltip"
                    title="Camera"
                    data-original-title="Camera"
                    :class="{ 'disable-icon': !videoMute }"
                    @click="fToggleVideo"
                  >
                    <i class="mdi" :class="{ 'mdi-camcorder-off': videoMute, 'mdi-camcorder': !videoMute }"></i>
                  </div>
                  <div
                    id="btn--end-call"
                    class="call-view__controls__icon-btn important"
                    data-toggle="tooltip"
                    title="End Call"
                    data-original-title="End Call"
                    @click="closeMeeting"
                  >
                    <i class="mdi mdi-phone-hangup" style="color: #fff;"></i>
                  </div>
                </div>
                <div class="call-view__controls-right">
                  <div
                    id="btn--white-board"
                    class="call-view__controls__icon-btn"
                    title="Whiteboard"
                    data-original-title="Whiteboard"
                    :class="{ 'disable-icon': whiteboard }"
                    @click="fWhiteBoard"
                  >
                    <i class="mdi mdi-bulletin-board"></i>
                  </div>
                  <div
                    id="btn--present"
                    class="call-view__controls__icon-btn"
                    data-toggle="tooltip"
                    title="Present Now"
                    data-original-title="Present Now"
                    :class="{ 'disable-icon': !presentNow }"
                    @click="fPresentNow"
                  >
                    <i class="mdi mdi-presentation-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="!hasMeetingStarted && !hasMeetingCompleted" class="card-body bg-dark video_body">
            <div class="video-wrapper">
              <div class="video-content text-white">
                <i class="mdi mdi-account"></i>
                <h4 class="text-center user-name">Meeting starts at 9:30 AM</h4>
              </div>
            </div>
          </div>
          <div v-show="hasMeetingCompleted" class="card-body bg-dark video_body">
            <div class="video-wrapper">
              <div class="video-content text-white">
                <i class="mdi mdi-account"></i>
                <h4 class="text-center user-name">Meeting Completed</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="slide-fade">
        <div v-if="displayVideoStrip" class="col-lg-3 stretch-card">
          <div class="video-wrap-userlist">
            <RemoteVideoCard
              v-for="remoteUser in remoteUsers"
              :key="remoteUser.id"
              :user="remoteUser"
              @muteAudio="muteRemoteAudio"
              @removeParticipant="removeParticipant"
            />

            <RemoteVideoCard v-for="index in 13" :key="index" :user="remoteUserTest" />
            <!-- <div v-for="index in 13" :key="index" class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Rahul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div> -->

            <!--  <span class="prev" id="videoStrip-prev">
              <i class="mdi mdi-arrow-left" aria-hidden="true"></i>
            </span>
            <span class="next" id="videoStrip-next">
              <i class="mdi mdi-arrow-right" aria-hidden="true"></i>
            </span>-->
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { mapState } from 'vuex'
import Whiteboard from '@/components/Whiteboard/Whiteboard'
import RemoteVideoCard from '@/components/RemoteVideoCard'
export default {
  components: { Whiteboard, RemoteVideoCard },

  data() {
    return {
      // test data
      remoteUserTest: {
        name: 'Alex D Souza',
        id: '123',
        audioMute: true
      },
      // test data
      audioMuteAll: true,
      displayQnA: false,
      audioMute: false,
      videoMute: false,
      toggleQnA: true,
      fullScreen: false,
      whiteboard: false,
      presentNow: true,
      displayVideoStrip: false,
      settings: {
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true
      },

      // jitsi variables
      connection: null,
      isJoined: false,
      hasMeetingCompleted: false,
      hasMeetingStarted: false,
      // room = conference object
      roomName: 'testroom1',
      room: null,
      localTracks: [],
      isVideo: true,
      isScreenShared: false,
      remoteTracks: [],
      // new fields
      roomActive: false,
      isRemoteAudioMute: false,
      isRemoteVideoMute: false,
      remoteUsers: [
        {
          name: 'Tony J',
          id: '111',
          audioMute: false,
          raiseHand: true
        },
        {
          name: 'Julie',
          id: '222',
          audioMute: true
        },
        {
          name: 'Mathew Anthony ',
          id: '333',
          audioMute: true
        }
      ],
      user: {
        id: 'test-teacher-id',
        audioTrack: undefined,
        videoTrack: undefined
      }
    }
  },
  computed: {
    ...mapState({
      config: (state) => state.videoCall.videoConfig
    })
  },
  watch: {
    displayQnA(newValue, _oldValue) {
      document.querySelector('.fc-view-container').style.display = newValue ? 'none' : 'block'
    },
    displayVideoStrip(newValue, _oldValue) {
      document.querySelector('.left-container').style.display = newValue ? 'none' : 'block'
    }
  },
  mounted() {
    this.loadCalendar()
    this.startMeeting()
  },
  beforeDestroy() {
    this.closeMeeting()
  },
  methods: {
    loadCalendar() {
      const calendarEl = document.getElementById('calendar')

      const calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'timeGrid'],
        defaultView: 'timeGridDay',
        height: 550,
        header: {
          left: false,
          center: 'title',
          right: false
        },
        eventLimit: true,
        dayClick(date, jsEvent, view) {
          $('#calendar').fullCalendar('gotoDate', date)
          $('#calendar').fullCalendar('changeView', 'month') // This would take you to the respective month
        },

        events: [
          {
            title: 'All Day Event',
            description: 'description for All Day Event',
            start: '2020-05-01'
          },

          {
            groupId: '999',
            title: 'Repeating Event',
            description: 'description for Repeating Event',
            start: '2020-05-09T16:00:00'
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            description: 'description for Repeating Event',
            start: '2020-05-16T16:00:00'
          },
          {
            title: 'Conference',
            description: 'description for Conference',
            url: 'videoCallStudent',
            start: '2020-05-11',
            end: '2020-05-13'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2020-05-12T10:30:00',
            end: '2020-05-12T12:30:00'
          },
          {
            title: 'Lunch',
            description: 'description for Lunch',
            start: '2020-05-12T12:00:00'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2020-05-12T14:30:00'
          },
          {
            title: 'Birthday Party',
            description: 'description for Birthday Party',
            start: '2020-05-13T07:00:00'
          },
          {
            title: 'Mathematics Class',
            description: 'Asst. Prof. Rahul Sharma',
            url: 'videoCallStudent',
            start: '2020-06-28'
          }
        ]
      })
      calendar.render()
    },
   fToggleAudio() {
      const attributes = {}
      if (this.audioMute) {
        attributes.flag = 'false'
        this.setAudioMute(false)
      } else {
        attributes.flag = 'true'
        this.setAudioMute(true)
      }

      if (!this.room) {
        return
      }

      const command = 'teacher-audio-changed'
      const value = this.user.id
      this.room.removeCommand(command)
      this.room.sendCommandOnce(command, { value, attributes })
    },
    fToggleVideo() {
      const attributes = {}
      if (this.videoMute) {
        attributes.flag = 'false'

        if (!this.localTracks[1]) {
          this.loadVideo()
        }
        this.setVideoMute(false)
      } else {
        attributes.flag = 'true'
        this.setVideoMute(true)
      }

      if (!this.room) {
        return
      }

      const command = 'teacher-video-changed'
      const value = this.user.id
      this.room.removeCommand(command)
      this.room.sendCommandOnce(command, { value, attributes })
    },
    fToggleQnA() {
      this.toggleQnA = !this.toggleQnA
    },
    fFullScreen() {
      this.fullScreen = !this.fullScreen
      this.$vueFullscreenView()
    },
    fWhiteBoard() {
      this.whiteboard = !this.whiteboard
    },
    closeWhiteboard() {
      this.whiteboard = !this.whiteboard
    },
    fPresentNow() {
      if (this.isScreenShared) {
        return
      }
      this.shareScreen()
    },
    fStopPresenting() {
      if (this.isScreenShared) {
        this.isScreenShared = false
        this.presentNow = true
        const attributes = { flag: 'true' }
        const command = 'teacher-video-changed'
        const value = this.user.id
        if (this.room) {
        this.room.removeCommand(command)
        this.room.sendCommandOnce(command, { value, attributes })        
        }
        if (this.localTracks[1]) {
          this.localTracks[1].dispose()
          this.localTracks.pop()
        }
      }
    },
    loadVideo() {
      if (this.localTracks[1]) {
        this.localTracks[1].dispose()
        this.localTracks.pop()
      }
      JitsiMeetJS.createLocalTracks({
        devices: ['video']
      })
        .then((tracks) => {
          this.localTracks.push(tracks[0])
          this.localTracks[1].addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED, () =>
            console.log('local track muted')
          )
          this.localTracks[1].addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED, () => {
            console.log('user video track stopped')
          })
          this.localTracks[1].attach(this.$refs.videoTrack)
          this.videoMute = false
          this.isScreenShared = false
          if (this.room) this.room.addTrack(this.localTracks[1])
          this.presentNow = true
        })
        .catch((error) => {
          console.log('error loading user video')
          console.log(error)
        })
    },
    shareScreen() {
      if (this.localTracks[1]) {
        this.localTracks[1].dispose()
        this.localTracks.pop()
      }
      JitsiMeetJS.createLocalTracks({
        devices: ['desktop']
      })
        .then((tracks) => {
          this.localTracks.push(tracks[0])
          this.localTracks[1].addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED, () =>
            console.log('local track muted')
          )
          this.localTracks[1].addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED, this.fStopPresenting)
          this.localTracks[1].attach(this.$refs.videoTrack)
          this.isScreenShared = true
          this.presentNow = false
          this.videoMute = true
          if (this.room) this.room.addTrack(this.localTracks[1])
          const attributes = { flag: 'false' }
          const command = 'teacher-video-changed'
          const value = this.user.id
          this.room.removeCommand(command)
          this.room.sendCommandOnce(command, { value, attributes })
        })
        .catch((error) => {
          console.log('error sharing screen sharing, loading video back')
          console.log('error sharing screen:' + error)
        })
    },

    setAudioMute(flag) {
      if (this.localTracks.length) {
        try {
          for (let i = 0; i < this.localTracks.length; i++) {
            if (this.localTracks[i].getType() === 'audio') {
              if (flag) {
                this.localTracks[i].mute()
                this.audioMute = true
              } else {
                this.localTracks[i].unmute()
                this.audioMute = false
              }
            }
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    setVideoMute(flag) {
      if (this.localTracks.length) {
        try {
          for (let i = 0; i < this.localTracks.length; i++) {
            if (this.localTracks[i].getType() === 'video') {
              if (flag) {
                this.localTracks[i].mute()
                this.videoMute = true
              } else {
                this.localTracks[i].unmute()
                this.videoMute = false
              }
            }
          }
        } catch (err) {
          console.log(err)
        }
      }
    },
    // sendCommand
    muteRemoteAudio(flag, userId) {
      // console.log('testSingleSent')
      if (!this.room) {
        return
      }
      const command = 'mute-single-audio'
      const value = userId
      const attributes = { flag }
      this.room.removeCommand(command)
      this.room.sendCommandOnce(command, { value, attributes })
    },
    muteRemoteVideo(flag, userId) {
      if (!this.room) {
        return
      }
      console.log('testSingleSent')
      const command = 'mute-single-video'
      const value = userId
      const attributes = { flag }
      this.room.removeCommand(command)
      this.room.sendCommandOnce(command, { value, attributes })
    },

    fToggleAllAudio() {
      if (!this.room) {
        return
      }
      if (this.audioMuteAll) {
        const command = 'mute-all-audio'
        const value = 'false'
        this.audioMuteAll = false
        this.room.removeCommand(command)
        this.room.sendCommand(command, { value })
      } else {
        const command = 'mute-all-audio'
        const value = 'true'
        this.audioMuteAll = true
        this.room.removeCommand(command)
        this.room.sendCommand(command, { value })
      }
    },
    toggleMuteAllVideo() {
      if (!this.room) {
        return
      }
      if (this.isRemoteVideoMute) {
        const command = 'mute-all-video'
        const value = 'false'
        this.isRemoteVideoMute = !this.isRemoteVideoMute
        this.room.removeCommand(command)
        this.room.sendCommand(command, { value })
      } else {
        const command = 'mute-all-video'
        const value = 'true'
        this.isRemoteVideoMute = !this.isRemoteVideoMute
        this.room.removeCommand(command)
        this.room.sendCommand(command, { value })
      }
    },

    removeParticipant(userId) {
      if (this.remoteUsers.length) {
        const user = this.remoteUsers.find((user) => user.id === userId)
        const index = this.remoteUsers.indexOf(user)
        this.remoteUsers.splice(index, 1)
         if (this.room) {
          const command = 'remove-participant'
          const value = userId
          this.room.removeCommand(command)
          this.room.sendCommand(command, { value })
        }
      }
    },

    /**
     * Jitsi Meet Methods calls
     */
    startMeeting() {
      this.hasMeetingStarted = true
      this.initJitsi()
    },
    async closeMeeting() {
      for (let i = 0; i < this.localTracks.length; i++) {
        await this.localTracks[i].dispose()
      }
      if (this.room) this.room.leave()
      this.connection.disconnect()
      this.hasMeetingCompleted = true
      // this.$router.push({ name: 'view-class-calendar' })
    },

    // init jitsi here
    initJitsi() {
      if (!this.roomName) {
        return
      }

      JitsiMeetJS.init(this.config.initOptions)
      this.connection = new JitsiMeetJS.JitsiConnection(null, null, this.config.options)

      // set event listeners
      this.connection.addEventListener(
        JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,

        this.onConnectionSuccess
      )
      this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED, this.onConnectionFailed)
      this.connection.addEventListener(
        JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,

        this.disconnect
      )

      JitsiMeetJS.mediaDevices.addEventListener(
        JitsiMeetJS.events.mediaDevices.DEVICE_LIST_CHANGED,

        this.onDeviceListChanged
      )

      // call connect
      this.connection.connect()

      // seting up audio and video tracks
      JitsiMeetJS.createLocalTracks({ devices: ['audio', 'video'] })
        .then(this.onLocalTracks)
        .catch((error) => {
          throw error
        })

      if (JitsiMeetJS.mediaDevices.isDeviceChangeAvailable('output')) {
        JitsiMeetJS.mediaDevices.enumerateDevices((devices) => {
          const audioOutputDevices = devices.filter((d) => d.kind === 'audiooutput')

          if (audioOutputDevices.length > 1) {
            $('#audioOutputSelect').html(
              audioOutputDevices.map((d) => `<option value="${d.deviceId}">${d.label}</option>`).join('\n')
            )
            $('#audioOutputSelectWrapper').show()
          }
        })
      }
    },
    // end of jitsi init

    // event listener callbacks=============
    onConnectionSuccess() {
      console.log('connection success')
      this.room = this.connection.initJitsiConference(this.roomName, this.config.confOptions)
      this.room.on(JitsiMeetJS.events.conference.TRACK_ADDED, this.onRemoteTrackAdded)
      this.room.on(JitsiMeetJS.events.conference.TRACK_REMOVED, this.onRemoteTrackRemoved)
      this.room.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED, this.onConferenceJoined)
      this.room.on(JitsiMeetJS.events.conference.USER_JOINED, (id) => {
        this.remoteTracks[id] = []
      })
      this.room.on(JitsiMeetJS.events.conference.USER_LEFT, this.onUserLeft)
      this.room.on(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED, (track) => {
        console.log(`${track.getType()} - ${track.isMuted()}`)
      })
      this.room.on(JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED, this.setupRemoteUsers)
      this.room.on(JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED, (userID, audioLevel) =>
        console.log(`${userID} - ${audioLevel}`)
      )
      this.room.on(JitsiMeetJS.events.conference.PHONE_NUMBER_CHANGED, () =>
        console.log(`${this.room.getPhoneNumber()} - ${this.room.getPhonePin()}`)
      )

      // set all participants to join with audio mute
      this.room.setStartMutedPolicy({
        audio: false,
        video: true
      })

      this.room.join()
    },
    // end of connection success
    onConnectionFailed() {
      console.log('connection Failed ')
    },
    disconnect() {
      console.log('disconnect!')
      this.connection.removeEventListener(
        JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
        this.onConnectionSuccess
      )
      this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED, this.onConnectionFailed)
      this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED, this.disconnect)
    },
    onDeviceListChanged(devices) {
      console.info('current devices', devices)
    },
    // event listner callbacks================

    // onConnectionSuccess callbacks
    /**
     * Handles remote tracks
     * @param track JitsiTrack object
     */
    onRemoteTrackAdded(track) {
      if (track.isLocal()) {
        return
      }
      const participant = track.getParticipantId()
      console.log('Participant joined:' + participant)
      if (!this.remoteTracks[participant]) {
        this.remoteTracks[participant] = []
      }
      const idx = this.remoteTracks[participant].push(track)

      track.addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED, (audioLevel) =>
        console.log(`Audio Level remote: ${audioLevel}`)
      )
      track.addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED, () => console.log('remote track muted'))
      track.addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED, () => console.log('remote track stoped'))
      track.addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED, (deviceId) =>
        console.log(`track audio output device was changed to ${deviceId}`)
      )
      const id = participant + track.getType() + idx

      if (track.getType() === 'video') {
        // $('#video-container').append(`<video autoplay='1' id='${participant}video${idx}' />`)
        // add user to remoteUsers list
        // this.setupRemoteVideo({ id: participant, videoTrack: track })
        // track.attach($(`#${id}`)[1])
      } else {
        $('#video-container').append(`<audio autoplay='1' id='${participant}audio${idx}' />`)
        // temporary solution
        track.attach($(`#${id}`)[0])
      }
    },
    onRemoteTrackRemoved(track) {
      const tracks = this.remoteTracks.filter((d) => d.id === track.id)
      if (tracks.length >= 1) {
        tracks.forEach((track) => {
          this.remoteTracks.splice(this.remoteTracks.indexOf(track), 1)
        })
      }
    },

    setupRemoteUsers(id, name) {
      console.log('inside setup remote users')
      if (!id || !name) {
        return
      }
      const remoteUser = { id, name }
      const user = this.remoteUsers.find((user) => user.id === id)
      if (user) {
        this.remoteUsers.splice(this.remoteUsers.indexOf(user), 1, remoteUser)
      } else {
        const tracks = this.remoteTracks[id]
        if (tracks) {
          tracks.forEach((track) => {
            if (track.getType() === 'video') remoteUser.videoTrack = track
            else remoteUser.audioTrack = track
          })
        }
        this.remoteUsers.push(remoteUser)
      }
    },
    /**
     * That function is executed when the conference is joined
     */
    onConferenceJoined() {
      console.log('conference joined!')
      this.user.id = this.room.myUserId()
      // this.room.addCommandListener('lock-room', this.handleCommands)
      this.room.addCommandListener('raise-hand', this.handleRaiseHand)
      this.room.sendTextMessage(this.room.myUserId())
      this.isJoined = true
      for (let i = 0; i < this.localTracks.length; i++) {
        this.room.addTrack(this.localTracks[i])
      }
    },
    // command handler function
    handleCommands(values) {
      this.isRoomLocked = values.value === 'true'
    },

    handleRaiseHand(values) {
      console.log('inside raise hand:', JSON.stringify(values))
      if (values.attributes && this.room && values.value) {
        const isHandRaised = values.attributes.flag === 'true'
        const user = this.remoteUsers.find((user) => user.id === values.value)
        if (user) {
          console.log('inside raise hand 2:')
          user.raiseHand = isHandRaised
          this.remoteUsers.splice(this.remoteUsers.indexOf(user), 1, user)
        }
      }
    },

    /**
     *
     * @param id
     */
    onUserLeft(id) {
      console.log('user left')
      const userObj = this.remoteUsers.find((p) => p.id === id)
      if (userObj) {
        const index = this.remoteUsers.indexOf(userObj)
        this.remoteUsers.splice(index, 1)
        console.log('user removed: ' + userObj.id)
      }
      if (!this.remoteTracks[id]) {
        return
      }
      const tracks = this.remoteTracks[id]
      try {
        for (let i = 0; i < tracks.length; i++) {
          tracks[i].detach($(`#${id}${tracks[i].getType()}`))
        }
      } catch (error) {
        console.log('Track Detach Error : ' + error)
      }
    },
    // onConnectionSuccess callbacks

    /**
     * Handles local tracks(current user)
     * @param tracks Array with JitsiTrack objects
     */
    onLocalTracks(tracks) {
      this.localTracks = tracks
      for (let i = 0; i < this.localTracks.length; i++) {
        this.localTracks[i].addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED, (audioLevel) =>
          console.log(`Audio Level local: ${audioLevel}`)
        )
        this.localTracks[i].addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED, () =>
          console.log('local track muted')
        )
        this.localTracks[i].addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED, () =>
          console.log('local track stoped')
        )
        this.localTracks[i].addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED, (deviceId) =>
          console.log(`track audio output device was changed to ${deviceId}`)
        )
        if (this.localTracks[i].getType() === 'video') {
          this.localTracks[i].attach(this.$refs.videoTrack)
          this.user.videoTrack = this.localTracks[i]
        } else {
          // this.localTracks[i].attach(this.$refs.audioTrack)
          this.user.audioTrack = this.localTracks[i]
        }
        if (this.isJoined && this.room) {
          this.room.addTrack(this.localTracks[i])
        }
      }
      this.setVideoMute(true)
      this.setAudioMute(true)
    }
  }
}
</script>

<style scoped>
/* sample style */
.video-container {
  position: relative;
  background: rgb(27, 30, 53);
  /*   border: solid 1px rgb(3, 3, 3); */
  width: 100%; /* Play with this value */
  height: 100%; /* Play with this value */
  font-size: 0;
  text-align: center;
}

.video-container video {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  object-fit: cover;
}

.user-list-img {
  width: 36px;
  height: 36px;
  border-radius: 100%;
}

/* .slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 1;
}
.slick-prev:before,
.slick-next:before {
  color: #000;
}
.slick-prev {
  left: 50%;
  z-index: 10;
  top: -4%;
  transform: rotate(90deg);
}
.prev {
  background: #000;
  top: 0%;
  right: 43%;

  transform: rotate(90deg);
}
.next {
  background: #000;
  bottom: -3%;
  left: 43% !important;
  transform: rotate(90deg);
}
.prev,
.next {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: 25px;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.next {
  margin-left: auto;
  margin-right: 10px;
  text-indent: 2px;
} 
button.slick-prev {
  left: 6px !important;
}
.slick-arrow.slick-right {
  right: 6px !important;
}
.slick-arrow.slick-prev:before,
.slick-arrow.slick-next:before {
  font-size: 30px;
  opacity: 0.51 !important;
}
*/

.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.video-wrap-userlist {
  position: relative;
  width: 100%;
  overflow-y: scroll;
  max-height: 560px;
}
.video-wrap-userlist::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}
.video-wrap-userlist::-webkit-scrollbar-thumb {
  background-color: #b9b9b9;
  height: 50px;
  border-radius: 8px;
}
.video-wrap-userlist::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 8px;
}
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
