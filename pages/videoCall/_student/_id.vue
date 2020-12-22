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
                    <span id="chat_head">Mohit Suri</span> <br />
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
                <h2 class="card-title ml-3">Mathematics</h2>
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
                          <h6 class="ml-1 mb-0" for="fname">Rahul</h6>
                          <h6 class="ml-1 mb-0" for="lname">Varma</h6>
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-divider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body bg-dark">
            <div class="video-wrapper">
              <div class="video-content text-white">
                <i class="mdi mdi-account"></i>
                <h4 class="text-center user-name">Teacher</h4>
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
                        fToggleQnA
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
                      @click="fRaiseHand()"
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
                      @click="fAudioMute()"
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
                      @click="fVideoMute()"
                    >
                      <i class="mdi" :class="{ 'mdi-camcorder-off': videoMute, 'mdi-camcorder': !videoMute }"></i>
                    </div>
                    <div
                      id="btn--end-call"
                      class="call-view__controls__icon-btn important"
                      data-toggle="tooltip"
                      title="End Call"
                      data-original-title="End Call"
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
                      <i class="mdi " :class="{ 'mdi-fullscreen': fullScreen, 'mdi-fullscreen-exit': !fullScreen }"></i>
                    </div>
                  </div>
                </div>
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
export default {
  data() {
    return {
      meetingId: this.$route.params.id,
      displayQnA: false,
      audioMute: true,
      videoMute: true,
      raiseHand: true,
      toggleQnA: true,
      attendanceCheck: true,
      fullScreen: true,
      rippleEffect: true
    }
  },
  watch: {
    displayQnA(newValue, oldValue) {
      document.querySelector('.fc-view-container').style.display = newValue ? 'none' : 'block'
    }
  },
  mounted() {
    this.loadCalendar()
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
            description: 'Asst. Prof. Rahul Sharma',
            start: '2020-06-26T15:00:00',
            end: '2020-06-26T16:00:00'
          }
        ]
      })
      calendar.render()
    },
    fAudioMute() {
      this.audioMute = !this.audioMute
    },
    fVideoMute() {
      this.videoMute = !this.videoMute
    },
    fRaiseHand() {
      this.raiseHand = !this.raiseHand
    },
    fToggleQnA() {
      this.toggleQnA = !this.toggleQnA
    },
    fAttendanceCheck() {
      this.attendanceCheck = false
    },
    fFullScreen() {
      this.fullScreen = !this.fullScreen
    },
    fRippleEffect() {
      this.rippleEffect = false
    }
  }
}
</script>

<style scoped>
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
  border: 8px solid rgba(255, 255, 255);
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
  border: 8px solid rgba(255, 255, 255);
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
