import Vue from 'vue'

Vue.prototype.$showSuccessToast = showSuccessToast
Vue.prototype.$showErrorToast = showErrorToast
Vue.prototype.$showWarningToast = showWarningToast
Vue.prototype.$showCenterWarningToast = showCenterWarningToast
let toastObj = {
  position: 'top-end',
  icon: 'success',
  showConfirmButton: true,
  title: '',
  showCancelButton: true,
  toast: true,
  // background: '#ff0000',
  timer: 3000,
  timerProgressBar: false,
  allowOutsideClick: false,

  // showClass: {
  //   popup: 'animated fadeInDown faster'
  // },
  // hideClass: {
  //   popup: 'animated fadeOutUp faster'
  // },
  onOpen: (toast) => {},
  onClick: function() {}
}

function showSuccessToast(self, message) {
  toastObj.icon = 'success'
  toastObj.title = message
  toastObj.onOpen = (toast) => {
    toast.addEventListener('mouseenter', self.$swal.stopTimer)
    toast.addEventListener('mouseleave', self.$swal.resumeTimer)
  }
  self.$swal(toastObj)
}

function showErrorToast(self, message) {
  toastObj.icon = 'error'
  toastObj.title = message
  toastObj.onOpen = (toast) => {
    toast.addEventListener('mouseenter', self.$swal.resumeTimer)
    toast.addEventListener('mouseleave', self.$swal.resumeTimer)
    toast.addEventListener('click', () => {})
  }
  self.$swal(toastObj)
}

function showWarningToast(self, message) {
  toastObj.icon = 'warning'
  toastObj.title = message
  /*  toastObj.onOpen = (toast) => {
    toast.addEventListener('mouseenter', self.$swal.stopTimer)
    toast.addEventListener('mouseleave', self.$swal.resumeTimer)
  } */
  self.$swal(toastObj)
}

function showInfoToast(self, message) {
  toastObj.icon = 'info'
  toastObj.title = message
  toastObj.onOpen = (toast) => {
    toast.addEventListener('mouseenter', self.$swal.stopTimer)
    toast.addEventListener('mouseleave', self.$swal.resumeTimer)
  }
  self.$swal(toastObj)
}

function showQuestionToast(self, message) {
  toastObj.icon = 'question'
  toastObj.title = message
  toastObj.onOpen = (toast) => {
    toast.addEventListener('mouseenter', self.$swal.stopTimer)
    toast.addEventListener('mouseleave', self.$swal.resumeTimer)
  }
  self.$swal(toastObj)
}

function showCenterWarningToast(self, message) {
  toastObj.icon = 'warning'
  toastObj.position = 'top'
  toastObj.title = message
  toastObj.showCancelButton = false
  toastObj.timer = 0
  toastObj.onOpen = (toast) => {
    toast.addEventListener('mouseenter', self.$swal.resumeTimer)
    toast.addEventListener('mouseleave', self.$swal.resumeTimer)
    toast.addEventListener('click', () => {})
  }
  self.$swal(toastObj)
}
