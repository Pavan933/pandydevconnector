<template>
  <div>
    <div class="custom-bodypad">
      <div class="row">
        <div class="col-lg-12 grid-margin">
          <div class="d-flex flex-row flex-wrap pstn">
            <img
              src="~/assets/images/banners/banner-cover.jpg"
              class="mb-2 mw-100 w-100 rounded ban-img"
              alt="coverimage"
            />
            <div class="profile-avtr">
              <img
                src="~/assets/images/faces/face1.jpg"
                class="img-xl img-profile rounded-circle"
                alt="userimage"
              />
            </div>
          </div>
          <div class="card mt-5">
            <div class="card-body">
               <h4 class="d-flex border-bottom ml-3 pb-2">
                      My Profile
                      <small class="ml-auto align-self-end">
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#profile-edit"
                          class="btn btn-inverse-primary btn-rounded btn-icon"
                        >
                          <i class="mdi mdi-pencil"></i>
                        </button>
                      </small>
                    </h4>
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-8 grid-margin">
                    <h3>David Grey. H</h3>
                    <h5 class="mr-2 mb-2 text-muted">Class X 'A'</h5>
                    <div class="d-flex align-items-center mb-2">
                      <div class="wrapper d-flex align-items-center font-weight-medium text-muted">
                        <i class="mdi mdi-gender-male mr-2"></i>
                        <p class="mb-0 text-muted">Male</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      <div class="wrapper d-flex align-items-center font-weight-medium text-muted">
                        <i class="mdi mdi-calendar mr-2"></i>
                        <p class="mb-0 text-muted">15-06-93</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      <div class="wrapper d-flex align-items-center font-weight-medium text-muted">
                        <i class="mdi mdi-map-marker-outline mr-2"></i>
                        <p class="mb-0 text-muted">Washington, US</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 grid-margin">
                    <div class="d-flex align-items-center mb-2 mt-3">
                      <div class="wrapper d-flex align-items-center font-weight-medium text-muted">
                        <i class="mdi mdi-phone-classic mr-2"></i>
                        <p class="mb-0 text-muted">001 000000</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      <div class="wrapper d-flex align-items-center font-weight-medium text-muted">
                        <i class="mdi mdi-whatsapp mr-2"></i>
                        <p class="mb-0 text-muted">0180560000</p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                      <div class="wrapper d-flex align-items-center font-weight-medium text-muted">
                        <i class="mdi mdi-email-outline mr-2"></i>
                        <p class="mb-1 text-muted">dgrey@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <!--  <div class="col-lg-12">
                <h6 class="text-muted">Intro</h6>
                <div class="d-flex align-items-start profile-feed-item">
                  <div class="ml-4">
                    <p>"Tech-Savvy, Energetic College Student Seeking a Growth Role in Development"</p>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <!-- Education Section Starts -->
          <!-- <div class="card mt-3">
            <div class="card-body">
              <div class="col-lg-12">
                <h4 class="card-title d-flex">
                  Education
                  <small class="ml-auto align-self-end">
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#edu-add"
                      class="btn btn-inverse-primary btn-rounded btn-icon"
                    >
                      <i class="mdi mdi-plus"></i>
                    </button>
                  </small>
                </h4>
                <div
                  class="d-flex align-items-center justify-content-between pt-3 pb-3 border-bottom"
                >
                  <div class="d-flex">
                    <img class="img-xs rounded-circle" src="assets/images/faces/jgi.png" />
                    <div class="ml-3">
                      <h6 class="mb-0 font-weight-medium">Jain University</h6>
                      <p class="card-text mb-0 text-muted">E.C</p>
                      <small class="text-muted">2015-2019</small>
                    </div>
                  </div>
                  <div>
                    <a href="#" data-toggle="modal" data-target="#edu-edit">
                      <i class="mdi mdi-pencil"></i>
                    </a>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center justify-content-between pt-3 pb-3 border-bottom"
                >
                  <div class="d-flex">
                    <img class="img-xs" src="assets/images/faces/intern.png" />
                    <div class="ml-3">
                      <ul class="bullet-line-list">
                        <li class="pb-3">
                          <h6 class="mb-0 font-weight-medium">Ola</h6>
                          <p class="card-text mb-0 text-muted">Netowrk Engineer - Intern</p>
                          <small class="text-muted">2017-2018 (6 Months)</small>
                        </li>
                        <li class="pb-3">
                          <h6 class="mb-0 font-weight-medium">Uber</h6>
                          <p class="card-text mb-0 text-muted">Netowrk Engineer - Intern</p>
                          <small class="text-muted">2016-2017 (2 Months)</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <a href="#" data-toggle="modal" data-target="#edu-edit">
                      <i class="mdi mdi-pencil"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- Education Section End -->
        </div>
      </div>
    </div>
    <!--Modal Profile Field Edit Starts-->
    <div id="profile-edit" class="modal fade" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header modal-bg">
            <h5 class="modal-title">My Profile Edit</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modal-bg">
            <form class="forms-sample" @submit.prevent="updateProfile">
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <label for="alternateMobileNumber">Alternate Mobile Number</label>
                    <input
                      id="alternateMobileNumber"
                      v-model="editProfile.phoneS"
                      type="number"
                      class="form-control"
                      placeholder="Alternate Mobile Number"
                    />
                  </div>
                  <div class="form-group">
                    <label for="whatsappNumber">Whatsapp Number</label>
                    <input
                      id="whatsappNumber"
                      v-model="editProfile.phoneW"
                      type="number"
                      class="form-control"
                      placeholder="Whatsapp Number"
                    />
                  </div>
                  <div class="form-group">
                    <label for="homeaddress">Home Adderess</label>
                    <input
                      id="homeaddress"
                      v-model="editProfile.address"
                      type="text"
                      class="form-control"
                      placeholder="Home Adderess"
                    />
                  </div>
                  <div class="form-group">
                    <label for="pincode">Pincode</label>
                    <input
                      id="pincode"
                      v-model="editProfile.pinCode"
                      type="number"
                      class="form-control"
                      placeholder="Pincode"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <label for="city">City</label>
                    <input
                      id="city"
                      v-model="editProfile.city"
                      type="text"
                      class="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div class="form-group">
                    <label for="state">State</label>
                    <input
                      id="state"
                      v-model="editProfile.state"
                      type="text"
                      class="form-control"
                      placeholder="State"
                    />
                  </div>
                  <div class="form-group">
                    <label for="country">Country</label>
                    <input
                      id="country"
                      v-model="editProfile.country"
                      type="text"
                      class="form-control"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary mr-2">Save</button>
                <button class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--Modal Profile Field Edit Ends-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      passwordForm: {
        oldPassword: '',
        newPassword1: '',
        newPassword2: ''
      }
    }
  },
  computed: {
    isAdmin() {
      return this.profile && (this.profile.role === 'SUPER_ADMIN' || this.profile.role === 'SITE_ADMIN')
    },
    ...mapState({
      profile: (state) => state.userProfile.userProfile,
      orgProfile: (state) => state.userProfile.orgProfile
    }),
    editProfile() {
      const profile = this.profile ? JSON.parse(JSON.stringify(this.profile)) : {}
      return profile
    }
  },
  created() {
    this.$store.dispatch('userProfile/fetchProfile', this.$store.getters.getPath)
  },
  methods: {
    async changePassword() {
      if (this.passwordForm.newPassword1 !== this.passwordForm.newPassword2) {
        // add toast here
        // new password and confirm password do not match
        return
      }
      if (this.passwordForm.oldPassword === this.passwordForm.newPassword1) {
        // toast here
        // new password is same as old password
        return
      }
      try {
        const isSuccess = await this.$store.dispatch('userProfile/updatePassword', {
          path: this.$store.getters.getPath,
          data: {
            oldPassword: this.passwordForm.oldPassword,
            newPassword: this.passwordForm.newPassword1
          }
        })
        console.log(isSuccess) // replace with toast
        this.$router.go('/profile')
      } catch (err) {
        console.log(err)
      }
    },
    async updateProfile() {
      try {
        const isSuccess = await this.$store.dispatch('userProfile/updateProfile', {
          path: this.$store.getters.getPath,
          data: this.editProfile
        })
        console.log(isSuccess) // replace with toast
        this.$router.go('/profile')
      } catch (err) {
        // this.$refs.passwordForm.reset()
        console.log('success : ' + err)
      }
    }
  }
}
</script>

<style></style>
