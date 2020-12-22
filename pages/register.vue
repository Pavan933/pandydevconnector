<template>
  <div class="container-fluid page-body-wrapper full-page-wrapper custom-log-pad">
    <div class="content-wrapper d-flex align-items-stretch auth">
      <!-- <div class="logo-reg">
              <img src="../Images/Logo.png">
            </div> -->
      <div class="row flex-grow login-half-bg">
        <div class="col-lg-12 d-flex align-items-center justify-content-center">
          <div class="card bg-transparent">
            <div class="card-body bg-transparent">
              <div class="auth-form-light text-left p-5 login-border-reg">
                <div class="brand-logo text-center">
                  <img src="~/assets/images/PRISMM.png" />
                </div>
                <form class="pt-3" @submit.prevent="registerSchool">
                  <div class="row flex-grow">
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label for="institutionfullname">Institution Full Name</label>
                        <div class="input-group">
                          <input
                            id="institutionfullname"
                            v-model="registerForm.name"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Institution Full Name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="institutionfulladdress">Institution Full Address</label>
                        <div class="input-group">
                          <input
                            id="institutionfulladdress"
                            v-model="registerForm.address"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Institution Full Address"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="affiliatedboard">Affiliated Board</label>
                        <div class="input-group">
                          <input
                            id="affiliatedboard"
                            v-model="registerForm.board"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Affiliated Board"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label for="contactpersonprincipal">Contact Person/Principal name</label>
                        <div class="input-group">
                          <input
                            id="contactpersonprincipal"
                            v-model="registerForm.contactName"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="Contact Person/Principal name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="emailaddress">Email Address</label>
                        <div class="input-group">
                          <input
                            id="emailaddress"
                            v-model="registerForm.email"
                            type="email"
                            class="form-control form-control-lg"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="schoolwebsiteurl">School Website Url</label>
                        <div class="input-group">
                          <input
                            id="schoolwebsiteurl"
                            v-model="registerForm.schoolURL"
                            type="text"
                            class="form-control form-control-lg"
                            placeholder="School Website Url"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label for="noofstudents">Number of Students</label>
                        <div class="input-group">
                          <input
                            id="noofstudents"
                            v-model="registerForm.numOfStudents"
                            type="number"
                            class="form-control form-control-lg"
                            placeholder="Number of Students"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="contactno1">Contact Phone Number-1</label>
                        <div class="input-group">
                          <input
                            id="contactno1"
                            v-model="registerForm.contactPhone"
                            type="tel"
                            class="form-control form-control-lg"
                            placeholder="Contact Phone Number-1"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="contactnomobile">Contact Mobile Number</label>
                        <div class="input-group">
                          <input
                            id="contactnomobile"
                            v-model="registerForm.contactMobile"
                            type="tel"
                            class="form-control form-control-lg"
                            placeholder="Contact Mobile Number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 d-flex">
                    <div class="form-check m-auto">
                      <label class="form-check-label text-muted reg-mar-auto">
                        <input type="checkbox" class="form-check-input"> I agree to all Terms &amp; Conditions <i class="input-helper"></i></label>
                    </div>
                  </div>                 
                  <div class="mt-3 text-center">
                    <button class="btn btn-primary btn-lg font-weight-medium auth-form-btn text-center" type="submit">
                      Register
                    </button>
                  </div>
                  <div class="text-center mt-4 auth-link text-black">
                    Already have an account? <nuxt-link to="/login" class="auth-link text-black">Login</nuxt-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  auth: 'guest',
  data() {
    return {
      registerForm: {
        name: '',
        contactName: '',
        numOfStudents: '',
        contactPhone: '',
        contactMobile: '',
        email: '',
        schoolURL: '',
        address: '',
        board: ''
      }
    }
  },
  methods: {
    async registerSchool() {
      try {
        const response = await this.$axios.$post('master/schoolrequests', {
          data: this.registerForm
        })
        console.log(response.message)
        this.$router.push('/login')
      } catch (err) {
        console.log('Registraion Error: ' + err)
      }
    }
  }
}
</script>
