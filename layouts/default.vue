<template>
  <main>
    <TheHeader />
    <div class="sidebar-fixed" :class="{ 'sidebar-icon-only': !sideBar }">
      <div class="container-scroller">
        <TheNavbar @hideSidebar="hideSidebar" @toggleChatbox="showChatbox"/>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
          <TheSidebar />
          <!-- partial -->
          <div class="main-panel">
            <div class="content-wrapper">
              <Chatsidebar :class="{ 'chatbox-close': chatbox }" />
              <!-- all custom pages here -->
              <nuxt />
              <!-- all custom pages here -->
            </div>
            <TheFooter />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TheHeader from '@/components/templates/TheHeader'
import TheSidebar from '@/components/templates/TheSidebar'
import TheNavbar from '@/components/templates/TheNavbar'
import TheFooter from '@/components/templates/TheFooter'
import Chatsidebar from '@/components/Chat/Chat'
export default {
  components: {
    TheHeader,
    TheSidebar,
    TheNavbar,
    TheFooter,
    Chatsidebar
  },
  data() {
    return {
      sideBar: true,
      chatbox: true
    }
  },
  mounted() {
    this.makeToast()
  },
  methods: {
    makeToast(append = false) {
      // this.$showErrorToast(this, 'This Page is under Development')
      this.$showCenterWarningToast(this, 'This Site is under Development')
    },
    hideSidebar() {
      this.sideBar = !this.sideBar
    },
    showChatbox() {
      this.chatbox = !this.chatbox
    }
  }
}
</script>
<style scoped>
.chatbox-close {
  display: none;
}
</style>
