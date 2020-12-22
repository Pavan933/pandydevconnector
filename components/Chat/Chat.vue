<template>
  <div>
    <!--chatpanel starts-->
    <div id="the_chat">
      <div class="empty sub-menu nav">
        <div class="container1">
          <div class="the_chat">
            <div class="head text-center">
              <p>Messages</p>
              <i class="mdi mdi-magnify" id="search" @click="Open_search()"></i>
            </div>
            <div class="search_box" id="search_box1">
              <i class="mdi mdi-magnify"></i>
              <input type="text" placeholder="search here " />
            </div>
            <div class="cl">
              <p class="name2">Contacts</p>
              <div class="contact_list">
                <div class="left">
                  <div id="left-button">
                    <i class="mdi mdi-arrow-left"></i>
                  </div>
                </div>
                <div class="center" id="content">
                  <div class="internal">
                    <div class="person" @click="close1()" style="cursor:pointer;">
                      <img src="~/assets/images/chat_contact/man.jpg" alt class="rounded-circle" />
                      <div class="name">
                        <p class="text-capitalize">Steve</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (3).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (17).jpg" alt class="rounded-circle" />

                      <div class="name text-center">
                        <p class="text-capitalize">Bartan</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (8).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>

                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (8).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (5).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (6).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (7).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (6).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (7).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>
                  <div class="internal">
                    <div class="person">
                      <img src="~/assets/images/chat_contact/man (8).jpg" alt class="rounded-circle" />

                      <div class="name">
                        <p class="text-capitalize">Stephen</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div id="right-button">
                    <i class="mdi mdi-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div class="settings_tray" id="settings_tray1">
                <i class="mdi mdi-arrow-left" @click="close_chat()"></i>

                <span>Steven</span>
                <img src="assets/images/chat_contact/man.jpg" alt height="30px" width="30px" />
              </div>
              <div class="conversation" id="conversation1">
                <div class="left_text">
                  <span>Hi there?</span>
                  <p>12:00AM</p>
                </div>

                <div class="right_text text-right">
                  <span>
                    Gd Noon
                  </span>

                  <p>12:31AM</p>
                </div>
                <div class="left_text">
                  <span>had couple of doubts in civics chapter 5</span>
                  <p>12:32AM</p>
                </div>

                <div class="right_text text-right">
                  <span>Sure, i can help you out</span>

                  <p>12:32AM</p>
                </div>
                <div class="left_text">
                  <span>Great!!</span>
                  <p>12:33AM</p>
                </div>
                <div class="right_text text-right">
                  <span>We have class at 02:00 PM right</span>

                  <p>12:34AM</p>
                </div>
                <div class="left_text">
                  <span>Oh yes!!</span>
                  <p>12:35AM</p>
                </div>
                <div class="left_text">
                  <span>I completly forgot about it</span>
                  <p>12:35AM</p>
                </div>
              </div>
              <div class="input_text" id="input_text1">
                <i class="mdi mdi-face smiley"></i>
                <input type="text" placeholder="Type a message" />
                <i class="mdi mdi-send send"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--chatpanel ends-->
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },

  methods: {
    close1() {
      document.getElementById('conversation1').style.display = 'block'
      document.getElementById('input_text1').style.display = 'block'
      document.getElementById('settings_tray1').style.display = 'block'
      document.getElementById('settings_tray1').style.display = 'flex'
    },
    close_chat() {
      document.getElementById('conversation1').style.display = 'none'
      document.getElementById('input_text1').style.display = 'none'
      document.getElementById('settings_tray1').style.display = 'none'
    },
    Open_search() {
      document.getElementById('search_box1').style.display = 'block'
      document.getElementById('search').style.display = 'none'
    }
  }
}
</script>
