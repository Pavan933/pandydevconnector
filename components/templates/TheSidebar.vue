<template>
  <nav id="sidebar" class="sidebar sidebar-offcanvas">
    <ul class="nav">
      <!--  <li class="nav-item nav-profile">
        <nuxt-link to="/" class="nav-link">
          <div class="nav-profile-image">
            <img src="~/assets/images/faces/face1.jpg" alt="profile" />
            <span class="login-status online"></span>
          </div>
          <div class="nav-profile-text d-flex flex-column">
            <span class="font-weight-bold mb-2">Rohan Mathew</span>
            <span class="text-secondary text-small">Class X 'A'</span>
          </div>
          <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
        </nuxt-link>
      </li> -->
      <li
        class="nav-item"
        :class="{ 'hover-open': current == 'home', active: current == 'home' || selected == 'home' }"
        @mouseover="current = 'home'"
        @click="onSidebarClick('home')"
        @mouseleave="onMouseLeave"
      >
        <nuxt-link class="nav-link" to="/">
          <span class="pl-2 menu-title">Dashboard</span>
          <i class="mdi mdi-home menu-icon"></i>
        </nuxt-link>
      </li>
       <li
        class="nav-item"
        :class="{ 'hover-open': current == 'homepage', active: current == 'homepage' || selected == 'homepage' }"
        @mouseover="current = 'homepage'"
        @click="onSidebarClick('homepage')"
        @mouseleave="onMouseLeave"
      >
        <nuxt-link class="nav-link" to="/home">
          <span class="pl-2 menu-title">Home Page</span>
          <i class="mdi mdi-home menu-icon"></i>
        </nuxt-link>
      </li>
      <li
        class="nav-item"
        :class="{ 'hover-open': current == 'profile', active: current == 'profile' || selected == 'profile' }"
        @mouseover="current = 'profile'"
        @click="onSidebarClick('profile')"
        @mouseleave="onMouseLeave"
      >
        <nuxt-link class="nav-link" to="/profile">
          <span class="pl-2 menu-title">Profile</span>
          <i class="mdi mdi-account menu-icon"></i>
        </nuxt-link>
      </li>
     <!--  <li
        class="nav-item"
        :class="{ 'hover-open': current == 'chat', active: current == 'chat' || selected == 'chat' }"
        @click="onSidebarClick('chat')"
        @mouseover="current = 'chat'"
        @mouseleave="current = 'none'"
      >
        <nuxt-link class="nav-link" to="/chat">
          <span class="pl-2 menu-title">Chat</span>
          <i class="mdi mdi-message-text menu-icon"></i>
        </nuxt-link>
      </li> -->
      <li
        class="nav-item"
        :class="{
          'hover-open': current == 'notifications',
          active: current == 'notifications' || selected == 'notifications'
        }"
        @click="onSidebarClick('notifications')"
        @mouseover="current = 'notifications'"
        @mouseleave="current = 'none'"
      >
        <nuxt-link class="nav-link" to="/create-announcement">
          <span class="pl-2 menu-title">Announcements</span>
          <i class="mdi mdi-bell menu-icon"></i>
        </nuxt-link>
      </li>
      <li
        class="nav-item"
        :class="{ 'hover-open': current == 'calendar', active: current == 'calendar' || selected == 'calendar' }"
        @click="onSidebarClick('calendar')"
        @mouseover="current = 'calendar'"
        @mouseleave="current = 'none'"
      >
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#ui-calendar"
          aria-expanded="false"
          aria-controls="ui-calendar"
        >
          <span class="pl-2 menu-title">Calendar</span>
          <i class="menu-arrow"></i>
          <i class="mdi mdi-calendar menu-icon"></i>
        </a>
        <div id="ui-calendar" class="collapse">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/create-timetable">Create Timetable</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/manage-timetable">Manage Timetable</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/view-class-calendar">View Class Calendar</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/holiday">Holiday</nuxt-link>
            </li>
          </ul>
        </div>
      </li>
      <li
        class="nav-item"
        :class="{ 'hover-open': current == 'elearning', active: current == 'elearning' || selected == 'elearning' }"
        @click="onSidebarClick('elearning')"
        @mouseover="current = 'elearning'"
        @mouseleave="current = 'none'"
      >
        <nuxt-link class="nav-link" to="/elibrary">
          <span class="pl-2 menu-title">E-Learning</span>
          <i class="mdi  mdi-desktop-mac menu-icon"></i>
        </nuxt-link>
      </li>
      <li
        class="nav-item"
        :class="{ 'hover-open': current == 'settings', active: current == 'settings' || selected == 'settings' }"
        @click="onSidebarClick('settings')"
        @mouseover="current = 'settings'"
        @mouseleave="current = 'none'"
      >
        <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <span class="pl-2 menu-title">Settings</span>
          <i class="menu-arrow"></i>
          <i class="mdi mdi-settings menu-icon"></i>
        </a>
        <div id="ui-basic" class="collapse">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/user-management">Users</nuxt-link>
            </li>
          </ul>
        </div>
      </li>
      <li
        class="nav-item disabled"
        :class="{ 'hover-open': current == 'reporting', active: current == 'reporting' || selected == 'reporting' }"
        @click="onSidebarClick('reporting')"
        @mouseover="current = 'reporting'"
        @mouseleave="current = 'none'"
      >
        <nuxt-link class="nav-link " to="/">
          <span class="pl-2 menu-title">Reporting</span>
          <i class="mdi mdi-clipboard-text menu-icon"></i>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      current: 'none',
      selected: 'none'
    }
  },
  mounted() {
    /*   this.addActiveClass() */
  },

  methods: {
    addActiveClass(e) {
      const element = e.target
      if (this.current === '') {
        // for root url
        if (element.attr('href').includes('index.html')) {
          element
            .parents('.nav-item')
            .last()
            .addClass('active')
          if (element.parents('.sub-menu').length) {
            element.closest('.collapse').addClass('show')
            element.addClass('active')
          }
        }
      }
      // for other url
      else if (element.attr('href').includes(this.current)) {
        element
          .parents('.nav-item')
          .last()
          .addClass('active')
        if (element.parents('.sub-menu').length) {
          element.closest('.collapse').addClass('show')
          element.addClass('active')
        }
        if (element.parents('.submenu-item').length) {
          element.addClass('active')
        }
      }
    },

    makeActive() {},
    mouseOut() {
      this.active = false
    },
    onMouseLeave() {
      this.current = 'none'
    },
    onSidebarClick(pagename) {
      this.selected = pagename
      this.current = 'none'
    },
    async logoutUser() {
      try {
        this.$store.commit('userProfile/LOGOUT')
        this.$store.commit('LOGOUT')
        this.$store.commit('settings/LOGOUT')
        this.$store.commit('userManagement/LOGOUT')
        this.$store.commit('calendar/LOGOUT')
        this.$store.commit('notification/LOGOUT')
        this.$store.commit('timetable/LOGOUT')
        await this.$auth.logout()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
