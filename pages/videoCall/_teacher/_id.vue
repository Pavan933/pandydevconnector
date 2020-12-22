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
                    <span id="chat_head">Mohit Suri</span>
                    <br />
                    <span class="agent">Teacher</span>
                    <span class="online">(Mathematics)</span>
                    <span id="chat_fullscreen_loader" class="chat_fullscreen_loader" style="display: block;">
                      <i class="fullscreen zmdi zmdi-window-maximize"></i>
                    </span>
                  </div>
                </div>

                <div id="chat_fullscreen" class="chat_conversion chat_converse">
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
                <a type="button" data-toggle="tooltip" title="Mute all" data-original-title="Mute all">
                  <img src="~/assets/images/icons/unmuteall.png" class="w-20px mr-2" />
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
                <!-- <div class="dropdown-menu navbar-dropdown" aria-labelledby="dropUsers">
                  <div class="profile-wrap">
                    <a class="dropdown-item dropuser-link user-links" href="#">
                      <div
                        class="wrapper d-flex align-items-center csr user-list"
                        onclick="window.location.href='#'"
                      >
                        <img src="~/assets/images/faces/face1.jpg" class="mr-2" alt="image" />
                        <div class="wrapper">
                          <h6 class="ml-1 mb-0" for="fname">Rahul</h6>
                          <h6 class="ml-1 mb-0" for="lname">Varma</h6>
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-divider"></div>
                  </div>
                </div>-->
              </div>
            </div>
          </div>
          <div class="card-body bg-dark">
            <Whiteboard v-show="whiteboard" @closeWhiteboard="closeWhiteboard" />
            <!--  <div v-if="!whiteboard">
             <img src='~/assets/images/dashboard/bg_cover.jpg'/>
            </div>-->
            <div v-show="!whiteboard" class="video-wrapper">
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
                        fToggleQnA
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
                      @click="fFullScreen()"
                    >
                      <i class="mdi" :class="{ 'mdi-fullscreen': fullScreen, 'mdi-fullscreen-exit': !fullScreen }"></i>
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
                      @click="fPresentNow()"
                    >
                      <i class="mdi mdi-presentation-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="slide-fade">
        <div v-if="displayVideoStrip" class="col-lg-3 stretch-card">
          <div class="video-wrap-userlist">
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap" data-toggle="tooltip" title="Andrew">Andrew</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" data-toggle="tooltip" title="Unmute">
                    <i class="mdi mdi-microphone"></i>
                  </a>
                  <a href="#" data-toggle="tooltip" title="Remove">
                    <i class="mdi mdi-close-circle"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Mathew Anthony Gonsalves</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute" data-toggle="tooltip" title="Mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Tony</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Paul S</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="videothumbnail">
              <div class="d-flex align-items-center justify-content-between w-100">
                <div class="d-flex">
                  <img class="img-xs rounded-circle" src="~/assets/images/faces/face1.jpg" />
                  <div class="pl-3 m-auto">
                    <h6 class="mb-0 uname-wrap">Mathew</h6>
                  </div>
                </div>
                <div class="ml-auto user-list-controllers">
                  <a href="#" class="mute">
                    <i class="mdi mdi-microphone-off"></i>
                  </a>
                </div>
              </div>
            </div>
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
import Whiteboard from '@/components/Whiteboard/Whiteboard'

export default {
  components: { Whiteboard },

  data() {
    return {
      meetingId: this.$route.params.id,
      displayQnA: false,
      audioMute: true,
      videoMute: true,
      toggleQnA: true,
      fullScreen: true,
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
      }
    }
  },
  watch: {
    displayQnA(newValue, oldValue) {
      document.querySelector('.fc-view-container').style.display = newValue ? 'none' : 'block'
    },
    displayVideoStrip(newValue, oldValue) {
      document.querySelector('.left-container').style.display = newValue ? 'none' : 'block'
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
            description: 'Asst. Prof. Paul Sharma',
            url: 'videoCallStudent',
            start: '2020-06-28'
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
    fToggleQnA() {
      this.toggleQnA = !this.toggleQnA
    },
    fFullScreen() {
      this.fullScreen = !this.fullScreen
    },
    fWhiteBoard() {
      this.whiteboard = !this.whiteboard
    },
    fPresentNow() {
      this.presentNow = !this.presentNow
    },
    closeWhiteboard() {
      this.whiteboard = !this.whiteboard
    }
  }
}
</script>

<style scoped>
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
