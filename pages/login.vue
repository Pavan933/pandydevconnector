<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper custom-log-pad">
    <div class="content-wrapper d-flex align-items-stretch auth">
      <div class="row flex-grow login-half-bg">
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div class="card bg-transparent">
            <div class="card-body login-border">
              <div class="auth-form-transparent text-left p-3">
                <div class="brand-logo text-center">
                  <img src="~/assets/images/PRISMM.png" alt="logo" />
                </div>
                <form class="pt-3" @submit.prevent="loginUser">
                  <div class="form-group">
                    <!-- 
                        <label for="username">Username</label> -->
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-account-outline text-primary"></i>
                        </span>
                      </div>
                      <input
                        id="username"
                        v-model="login.username"
                        type="text"
                        class="form-control form-control-lg border-left-0"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <!-- 
                        <label for="password">Password</label> -->
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span class="input-group-text bg-transparent border-right-0">
                          <i class="mdi mdi-lock-outline text-primary"></i>
                        </span>
                      </div>
                      <input
                        id="password"
                        v-model="login.password"
                        type="password"
                        class="form-control form-control-lg border-left-0"
                        placeholder="Password"
                        autocomplete="on"
                      />
                    </div>
                  </div>
                  <div class="my-3">
                    <input
                      class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      value="Login"
                      type="submit"
                    />
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <nuxt-link to="forgot-password" class="auth-link text-black">Forgot password?</nuxt-link>
                  </div>
                  <div class="text-center mt-4 auth-link text-black">
                    Sign up a School ? <nuxt-link to="/register" class="auth-link text-black">Create</nuxt-link>
                  </div>
                </form>
              </div>
            </div>
            <div class="tc pt-3 text-center">
              <nuxt-link to="web-pages/terms-and-condition" class="auth-link text-black"
                >Terms and Conditions</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-6 d-flex flex-row"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  layout: 'login',
  auth: 'guest',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      if (this.$auth.$storage.getUniversal('redirect')) {
        this.$router.replace(this.$auth.$storage.getUniversal('redirect'))
        this.$auth.$storage.removeUniversal('redirect')
        return
      }

      this.$router.replace('/')
    }
  },
  methods: {
    async loginUser() {
      const schoolCode = this.login.username ? this.login.username.substring(0, 3) : undefined
      let path = ''
      if (schoolCode && schoolCode === 'adm') {
        path = 'master'
      } else {
        path = 'school/' + schoolCode
      }
      try {
        await this.$auth.loginWith('local', {
          data: this.login,
          url: path + '/auth/login'
        })
        this.$store.commit('SET_PATH', path)
        await this.$store.dispatch('fetchRole', path)
        this.$store.dispatch('userProfile/fetchProfile', path)
        this.$showSuccessToast(this, 'Login success')
        this.$router.go('/')
      } catch (e) {
        if (e.response && e.response.data && e.response.data.message) console.log(e.response.data.message)
        else console.log(e)
        this.$auth.logout()
      }
    },
    alertSuccess(msg) {
      this.swal({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        type: 'success',
        title: msg
      })
    }
  }
}
</script>
