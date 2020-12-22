import Vue from 'vue'
import fullscreen from 'vue-fullscreen'
Vue.use(fullscreen)

Vue.prototype.$vueFullscreenView = vueFullscreenView

function vueFullscreenView() {
  this.$fullscreen.toggle(this.$el.querySelector('.video_body'), {
    wrap: false,
    callback: this.fullscreenChange
  })
}
