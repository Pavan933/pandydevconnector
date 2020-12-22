<template>
  <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a class="navbar-brand brand-logo" href="/"><img src="~/assets/images/PRISMM-1.png" alt="logo"/></a>
      <a class="navbar-brand brand-logo-mini" href="/"><img src="~/assets/images/favicon.png" alt="logo"/></a>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-stretch">
      <button
        class="navbar-toggler navbar-toggler align-self-center"
        type="button"
        data-toggle="minimize"
        @click="hideSidebar"
      >
        <span class="mdi mdi-menu"></span>
      </button>
      <!--  <div class="search-field d-none d-md-block">
        <form class="d-flex align-items-center h-100" action="#">
          <div class="input-group">
            <div class="input-group-prepend bg-transparent">
              <i class="input-group-text border-0 mdi mdi-magnify"></i>
            </div>
            <input type="text" class="form-control bg-transparent border-0 w-50" placeholder="Search" />
          </div>
        </form>
      </div>     -->
      <ul class="navbar-nav navbar-nav-right">
        <li class="nav-item dropdown">
          <a class="nav-link count-indicator dropdown-toggle" @click="showChatbox">
            <i class="mdi mdi-message-reply-text"></i>
            <span class="count-symbol bg-danger"></span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a id="notificationDropdown" class="nav-link count-indicator dropdown-toggle" href="#" data-toggle="dropdown">
            <i class="mdi mdi-bell-outline"></i>
            <span class="count-symbol bg-danger"></span>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
            aria-labelledby="notificationDropdown"
          >
            <h6 class="p-3 mb-0">Notifications</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-success">
                  <i class="mdi mdi-calendar"></i>
                </div>
              </div>
              <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 class="preview-subject font-weight-normal mb-1">Event today</h6>
                <p class="text-gray ellipsis mb-0">Just a reminder that you have an event today</p>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-warning">
                  <i class="mdi mdi-settings"></i>
                </div>
              </div>
              <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 class="preview-subject font-weight-normal mb-1">Settings</h6>
                <p class="text-gray ellipsis mb-0">Update dashboard</p>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item preview-item">
              <div class="preview-thumbnail">
                <div class="preview-icon bg-info">
                  <i class="mdi mdi-link-variant"></i>
                </div>
              </div>
              <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 class="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                <p class="text-gray ellipsis mb-0">New admin wow!</p>
              </div>
            </a>
            <div class="dropdown-divider"></div>
            <a href="create-announcement"><h6 class="p-3 mb-0 text-center">See all notifications</h6></a>
          </div>
        </li>
        <li class="nav-item nav-profile dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="profileDropdown"
            href="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <div class="nav-profile-img">
              <img src="/_nuxt/assets/images/faces/face1.jpg" alt="image" />
              <span class="availability-status online"></span>
            </div>
            <div class="nav-profile-text">
              <p class="mb-1 text-white">David Greymaax</p>
            </div>
          </a>
          <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"> <i class="mdi mdi-logout mr-2 text-primary"></i> Signout </a>
          </div>
        </li>
      </ul>
      <button
        class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        type="button"
        data-toggle="offcanvas"
      >
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    hideSidebar() {
      this.$emit('hideSidebar')
    },
    showChatbox() {
      this.$emit('toggleChatbox')
    }
  }
}
</script>
