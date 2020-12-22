/* eslint-disable nuxt/no-cjs-in-config */
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config()
/* const webpack = require("webpack"); */
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Online Learning' || process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1 , shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [
      // lib jitsi
      {
        src: 'libs/strophe/strophe.js'
      },
      {
        src: 'libs/strophe/strophe.disco.min.js?v=1'
      },
      {
        src: 'libs/lib-jitsi-meet.min.js'
      },

      {
        src: 'vendors/fullcalendar/packages/core/main.js'
      },
      {
        src: 'vendors/fullcalendar/packages/daygrid/main.js'
      },
      {
        src: 'vendors/fullcalendar/packages/timegrid/main.js'
      },
      {
        src: 'vendors/fullcalendar/packages/interaction/main.js'
      },
      {
        src: 'vendors/fullcalendar/packages/list/main.js'
      },
      {
        src: 'vendors/js/vendor.bundle.base.js'
      },
      {
        src: 'vendors/chart.js/Chart.min.js'
      },
      {
        src: 'js/off-canvas.js'
      },
      {
        src: 'js/hoverable-collapse.js'
      },
      {
        src: 'js/dashboard.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/dragula/3.7.2/dragula.min.js'
      }
      /* 
           { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.4.2/cjs/popper.min.js' },
           { src: 'https://cdnjs.cloudflare.com/ajax/libs/tooltip.js/1.3.3/esm/tooltip.min.js' }, */
    ],
    link: [{
        rel: 'icon',
        type: 'image/png',
        href: '_nuxt/assets/images/favicon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/dragula/3.7.2/dragula.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/style.css',
    '~/assets/css/chat.css',
    '~/assets/css/chat4.css',
    '~/assets/vendors/mdi/css/materialdesignicons.min.css',
    '~/assets/vendors/css/vendor.bundle.base.css',
    '~/static/vendors/fullcalendar/packages/core/main.css',
    '~/static/vendors/fullcalendar/packages/daygrid/main.css',
    '~/static/vendors/fullcalendar/packages/timegrid/main.css',
    '~/static/vendors/fullcalendar/packages/list/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/misc.js',
    '~/plugins/global.js',
    '~/plugins/notifications.js',
    {
      src: '~/plugins/fullscreen.js',
      mode: 'client'
    },
    {
      src: '~/plugins/localStorage.js',
      mode: 'client'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'vue-sweetalert2/nuxt'
  ],
  /*  router: {
     middleware: ['auth']
   }, */
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BK_URL || 'http://localhost:8000/v1'
  },
  /**
   * auth module
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'data.access_token'
          },
          user: false,
          // user: { url: 'users/profile', method: 'get', propertyName: 'data' },
          logout: false
        },
        autoRefresh: true,
        autoLogout: true
      }
    }
  },
  /*
   ** Build configuration
   */
  server: {
    host: process.env.SERVER || 'localhost',
    port: process.env.PORT || '3000' // default: localhost
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
    /*   vendor: [
      'jquery'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery'
      })
    ] */
  }
}
