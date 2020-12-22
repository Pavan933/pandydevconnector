<template>
  <div class="custom-bodypad">
    <div class="row mb-3">
      <div class="col-lg-3 stretch-card">
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
                    </div>    -->
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
                    <span id="chat_head">Mathew Andrews</span> <br />

                    <span class="agent">Teacher</span> <span class="online">(Mathematics)</span>
                    <span id="chat_fullscreen_loader" class="chat_fullscreen_loader" style="display: block;"
                      ><i class="fullscreen zmdi zmdi-window-maximize"></i
                    ></span>
                  </div>
                </div>

                <div id="chat_fullscreen" class="chat_conversion chat_converse">
                  <span class="chat_msg_item chat_msg_item_admin"> Hey there! Any question?</span>

                  <span class="chat_msg_item chat_msg_item_user"> Hello!</span>
                  <div class="status">20m ago</div>
                  <span class="chat_msg_item chat_msg_item_admin"> Any Queries</span>
                  <span class="chat_msg_item chat_msg_item_user">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span
                  >
                  <span class="chat_msg_item chat_msg_item_admin">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</span
                  >
                  <span class="chat_msg_item chat_msg_item_user"> Where can I get some?</span>
                  <span class="chat_msg_item chat_msg_item_admin"> The standard chuck...</span>
                </div>
                <div class="fab_field">
                  <a id="fab_send" class="fab is-visible"><i class="mdi mdi-send"></i></a>

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
        <!-- Video Call Screen Default Start-->
        <div class="card card-statistics social-card card-default">
          <div class="card-header header-sm">
            <div class="d-flex align-items-center">
              <div class="wrapper d-flex align-items-center media-info text-facebook">
                <i class="mdi mdi-message-video icon-md"></i>
                <h2 class="card-title ml-3">Class X A - Mathematics</h2>
              </div>
              <div class="wrapper ml-auto action-bar custom dropdown">
                <a
                  id="dropUsers"
                  class="dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  title="Student List"
                  data-original-title="Student List"
                >
                  <i class="mdi mdi-account-multiple mr-3"></i>
                </a>
                <div class="dropdown-menu navbar-dropdown" aria-labelledby="dropUsers">
                  <div class="profile-wrap">
                    <a class="dropdown-item dropuser-link user-links" href="#">
                      <div class="wrapper d-flex align-items-center csr user-list" onclick="window.location.href='#'">
                        <img src="~/assets/images/faces/face1.jpg" class="mr-2" alt="image" />
                        <div class="wrapper">
                          <h6 class="ml-1 mb-0" for="fname">John</h6>
                          <h6 class="ml-1 mb-0" for="lname">Vue</h6>
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-divider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="hasMeetingStarted && !hasMeetingFinished" class="card-body bg-dark video_body">
            <!--   <Whiteboard v-show="whiteboard"  @closeWhiteboard="closeWhiteboard" /> -->
            <div class="video-wrapper">
              <div v-show="!teacher.videoMute" id="video-container" class="video-container">
                <video ref="localVideoTrack" class="video-track" autoplay="1" />
                <audio ref="localAudioTrack" muted="true" class="audio-track" autoplay="1" />
                <!-- <h6>{{ user.id }}</h6> -->
              </div>

              <div v-show="teacher.videoMute" class="video-content text-white">
                <i class="mdi mdi-account"></i>
                <h4 class="text-center user-name">Teacher name</h4>
              </div>
            </div>

            <div class="call-view__controls-container">
               <transition name="fade">
               <div class="message-label">
                  <p class="pr-2"><i class="mdi mdi-camcorder-off pr-2 text-danger" ></i>Video Disabled</p>
                  <p><i class="mdi mdi-microphone-off pr-2 text-danger"></i>Audio Disabled</p>
                </div>
                </transition>
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
                      fToggleQnA()
                    "
                  >
                    <i
                      class="mdi"
                      :class="{ 'mdi-comment-question-outline': toggleQnA, 'mdi-calendar-today': !toggleQnA }"
                    ></i>
                  </div>
                  <div
                    id="btn--raisehand"
                    class="call-view__controls__icon-btn"
                    data-toggle="tooltip"
                    title="Raise Hand"
                    data-original-title="Raise Hand"
                    :class="{ 'disable-icon': !raiseHand }"
                    @click="fRaiseHand"
                  >
                    <i class="mdi mdi-human-greeting"></i>
                  </div>
                </div>
                <div class="call-view__controls-center">
                  <div
                    id="btn--toggle-mic"
                    class="call-view__controls__icon-btn "
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
                    id="btn--attendance"
                    class="call-view__controls__icon-btn"
                    data-toggle="tooltip"
                    title="Attendance"
                    data-original-title="Attendance"
                    :class="{ 'disable-icon': !attendanceCheck, rippleButton: rippleEffect }"
                    @click="
                      fAttendanceCheck()
                      fRippleEffect()
                    "
                  >
                    <i
                      class="mdi"
                      :class="{ 'mdi-account-check': !attendanceCheck, 'mdi-account': attendanceCheck }"
                    ></i>
                  </div>
                  <div
                    id="btn--full-scrn"
                    class="call-view__controls__icon-btn "
                    data-toggle="tooltip"
                    title="Fullscreen"
                    data-original-title="Fullscreen"
                    :class="{ 'disable-icon': !fullScreen }"
                    @click="fFullScreen()"
                  >
                    <i class="mdi " :class="{ 'mdi-fullscreen': !fullScreen, 'mdi-fullscreen-exit': fullScreen }"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="!hasMeetingStarted && !hasMeetingFinished" class="card-body bg-dark video_body">
            <div class="video-wrapper">
              <div class="video-content text-white">
                <i class="mdi mdi-account"></i>
                <h4 class="text-center user-name">Waiting For Teacher to Join...</h4>
              </div>
            </div>
          </div>
          <div v-show="hasMeetingFinished" class="card-body bg-dark video_body">
            <div class="video-wrapper">
              <div class="video-content text-white">
                <i class="mdi mdi-account"></i>
                <h4 class="text-center user-name">Meeting Completed</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { mapState } from 'vuex'

export default {
  data() {
    return {
      displayQnA: false,
      audioMute: true,
      videoMute: true,
      raiseHand: true,
      toggleQnA: true,
      attendanceCheck: true,
      fullScreen: false,
      rippleEffect: true,

      // jitsi variables
      connection: null,
      isJoined: false,
      hasMeetingStarted: false,
      hasMeetingFinished: false,
      // room = conference object
      roomName: 'testroom1',
      room: null,
      localTracks: [],
      remoteTracks: [],
      // new fields
      roomActive: false,
      teacher: {
        id: '',
        name: 'teacher',
        audioTrack: undefined,
        videoTrack: undefined,
        audioMute: false,
        videoMute: true
      },
      remoteUsers: [
        {
          name: 'Naveen Joshi',
          id: '111',

          audioMute: false
        },
        {
          name: 'Ramalingam Ganesh Reddy',
          id: '222',
          audioMute: true
        },
        {
          name: 'Mathew Anthony Gonsalves',
          id: '333',
          audioMute: true
        }
      ],
      user: {
        id: 'student-id',
        name: 'student',
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
    displayQnA(newValue, oldValue) {
      document.querySelector('.fc-view-container').style.display = newValue ? 'none' : 'block'
    }
  },
  mounted() {
    this.loadCalendar()
    this.initJitsi()
    this.startMeeting()
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
            start: '2020-05-26T10:30:00',
            end: '2020-05-30T12:30:00'
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
            title: 'Social Science',
            description: 'Mathew',
            start: '2020-06-26T17:00:00',
            end: '2020-06-26T18:00:00'
          },
          {
            title: 'Mathematics Class',
            description: 'Asst. Prof. Mathew Andrews',
            start: '2020-06-26T15:00:00',
            end: '2020-06-26T16:00:00'
          }
        ]
      })
      calendar.render()
    },
    fToggleAudio() {
      if (this.audioMute) {
        this.setAudioMute(false)
      } else {
        this.setAudioMute(true)
      }
    },
    fToggleVideo() {
      // if (this.videoMute) {
      //   this.setVideoMute(false)
      // } else {
      //   this.setVideoMute(true)
      // }
    },
    fRaiseHand() {
      if (!this.room) {
        return
      }
      this.raiseHand = !this.raiseHand
      const attributes = { flag: this.raiseHand ? 'true' : 'false' }
      const command = 'raise-hand'
      const value = this.user.id
      this.room.removeCommand(command)
      this.room.sendCommandOnce(command, { value, attributes })
    },
    fToggleQnA() {
      this.toggleQnA = !this.toggleQnA
    },
    fAttendanceCheck() {
      this.attendanceCheck = false
    },
    fFullScreen() {
      this.fullScreen = !this.fullScreen
      this.$vueFullscreenView()
    },
    fRippleEffect() {
      this.rippleEffect = false
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
          if (this.room) this.room.addTrack(localTracks[1])
          this.presentNow = true
        })
        .catch((error) => {
          console.log('error loading user video')
          console.log(error)
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

    /**
     * Jitsi Meet Methods calls
     */
    startMeeting() {
      this.hasMeetingStarted = true
      if (this.room) this.room.setDisplayName(this.user.name)
    },
    async closeMeeting() {
      for (let i = 0; i < this.localTracks.length; i++) {
        await this.localTracks[i].dispose()
      }
      if (this.room) this.room.leave()
      this.connection.disconnect()
      this.hasMeetingFinished = true
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
      JitsiMeetJS.createLocalTracks({ devices: ['audio'] })
        .then(this.onLocalTracks)
        .catch((error) => {
          throw error
        })

      if (JitsiMeetJS.mediaDevices.isDeviceChangeAvailable('output')) {
        JitsiMeetJS.mediaDevices.enumerateDevices((devices) => {
          const audioOutputDevices = devices.filter((d) => d.kind === 'audiooutput')

          if (audioOutputDevices.length > 1) {
            // $('#audioOutputSelect').html(
            //   audioOutputDevices.map((d) => `<option value="${d.deviceId}">${d.label}</option>`).join('\n')
            // )
            // $('#audioOutputSelectWrapper').show()
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
        // const userObj = { id }
        // this.remoteUsers.push(userObj)
      })
      this.room.on(JitsiMeetJS.events.conference.USER_LEFT, this.onUserLeft)
      this.room.on(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED, (track) => {
        console.log(`${track.getType()} - ${track.isMuted()}`)
      })
      this.room.on(
        JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED,
        (userID, displayName) => console.log(`${userID} - ${displayName}`)
        // handle remote display named changes here
      )
      this.room.on(JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED, (userID, audioLevel) =>
        console.log(`${userID} - ${audioLevel}`)
      )
      this.room.on(JitsiMeetJS.events.conference.PHONE_NUMBER_CHANGED, () =>
        console.log(`${this.room.getPhoneNumber()} - ${this.room.getPhonePin()}`)
      )

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
      track.addEventListener(JitsiMeetJS.events.track.TRACK_MUTE_CHANGED, (track) => {
        console.log('remote track changed')
      })
      track.addEventListener(JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED, () => console.log('remote track stoped'))
      track.addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED, (deviceId) =>
        console.log(`track audio output device was changed to ${deviceId}`)
      )
      const id = participant + track.getType() + idx

      if (track.getType() === 'video') {
        // $('#video-container').append(`<video autoplay='1' id='${participant}video${idx}' />`)
        // add user to remoteUsers list
        this.setupTeacherVideo()
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
    setupTeacherVideo() {
      console.log('setupTeacherVideo start')
      if (this.teacher.id !== '') {
        const tracks = this.remoteTracks[this.teacher.id]
        for (let i = 0; i < tracks.length; i++) {
          if (tracks[i].getType() === 'video') {
            this.teacher.videoTrack = tracks[i]
            tracks[i].attach(this.$refs.localVideoTrack)
          }
        }
        this.startMeeting()
      }
    },
    /**
     * That function is executed when the conference is joined
     */
    onConferenceJoined() {
      console.log('conference joined!')
      this.user.id = this.room.myUserId()
      this.room.setDisplayName(this.user.name)
      // attach conference specific listeners
      this.room.addCommandListener('mute-all-audio', this.handleAudioCommand)
      this.room.addCommandListener('mute-all-video', this.handleVideoCommand)
      this.room.addCommandListener('mute-single-audio', this.handleSingleAudio)
      this.room.addCommandListener('mute-single-video', this.handleSingleVideo)
      this.room.addCommandListener('remove-participant', this.handleRemoveParticipant)
      this.room.addCommandListener('teacher-video-changed', this.handleRemoteVideoChange)
      this.room.addCommandListener('teacher-audio-changed', this.handleRemoteAudioChange)
      this.room.on(JitsiMeetJS.events.conference.MESSAGE_RECEIVED, this.handleTextMessage)
      this.isJoined = true
      for (let i = 0; i < this.localTracks.length; i++) {
        this.room.addTrack(this.localTracks[i])
      }
    },

    handleRemoveParticipant(values) {
      if (values.attributes && this.room && values.value === this.room.myUserId()) {
        this.closeMeeting()
      }
    },

    handleRemoteVideoChange(values) {
      this.teacher.videoMute = values.attributes.flag === 'true'
    },
    handleRemoteAudioChange(values) {
      this.teacher.audioMute = values.attributes.flag === 'true'
    },

    handleTextMessage(_id, message) {
      this.teacher.id = message
      this.setupTeacherVideo()
    },
    handleSingleAudio(values) {
      if (values.attributes && this.room && values.value === this.room.myUserId()) {
        this.isAudioMute = values.attributes.flag === 'true'
        this.setAudioMute(this.isAudioMute)
      }
    },
    handleSingleVideo(values) {
      if (values.attributes && this.room && values.value === this.room.myUserId()) {
        this.isVideoMute = values.attributes.flag === 'true'
        this.setVideoMute(this.isVideoMute)
      }
    },
    // command handler function
    handleAudioCommand(values) {
      this.isAudioMute = values.value === 'true'
      this.setAudioMute(this.isAudioMute)
    },
    handleVideoCommand(values) {
      this.isVideoMute = values.value === 'true'
      this.setVideoMute(this.isVideoMute)
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
          // this.localTracks[i].attach(this.$refs.localVideoTrack)
          this.user.videoTrack = this.localTracks[i]
        } else {
          // this.localTracks[i].attach(this.$refs.localAudioTrack)
          this.user.audioTrack = this.localTracks[i]
        }

        if (this.isJoined && this.room) {
          this.room.addTrack(this.localTracks[i])
        }
      }
      this.setAudioMute(true)
    }
  }
}
</script>

<style scoped>
.message-label{
  display: flex;
  text-align: center;
  color: #fff;
  padding: 8px;
  justify-content: center;
}
.message-label p{
  margin: 0!important;
 }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.rippleButton::after {
  opacity: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  height: 100%;
  width: 100%;
  border: 8px solid rgb(255, 0, 0);
  border-radius: 100%;
  -webkit-animation-name: ripple;
  animation-name: ripple;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
  animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
  z-index: -1;
}
.rippleButton::before {
  opacity: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  height: 100%;
  width: 100%;
  border: 8px solid rgb(255, 0, 0);

  border-radius: 100%;
  -webkit-animation-name: ripple;
  animation-name: ripple;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
  animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
  z-index: -1;
}

@-webkit-keyframes ripple {
  from {
    opacity: 1;
    -webkit-transform: scale3d(0.75, 0.75, 1);
    transform: scale3d(0.75, 0.75, 1);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(1.5, 1.5, 1);

    transform: scale3d(1.5, 1.5, 1);
  }
}

@keyframes ripple {
  from {
    opacity: 1;
    -webkit-transform: scale3d(0.75, 0.75, 1);
    transform: scale3d(0.75, 0.75, 1);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(1.5, 1.5, 1);
    transform: scale3d(1.5, 1.5, 1);
  }
}
</style>
