<template>
  <div class="custom-bodypad">
    <!--    <b-button @click="makeToast(true)">Show Toast (appended)</b-button>
    <b-button @click="$bvToast.show('my-toast')">Show toast</b-button>-->
    <div class="row mb-3">
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 stretch-card mob-mb-3">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <img class="w-40px" src="~/assets/images/icons/custom/performance.png" />
              </div>
              <div class="float-right">
                <p class="mb-0 text-center">School performance</p>
                <div class="fluid-container">
                  <p class="font-weight-medium text-center mb-0">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 stretch-card mob-mb-3">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <img class="w-40px" src="~/assets/images/icons/custom/class-attend.png" />
              </div>
              <div class="float-right">
                <p class="mb-0 text-center"># Online classes delivered</p>
                <div class="fluid-container">
                  <p class="font-weight-medium text-center mb-0">560</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 stretch-card mob-mb-3">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <img class="w-40px" src="~/assets/images/icons/custom/class-missed.png" />
              </div>
              <div class="float-right">
                <p class="mb-0 text-center"># Online classes cancelled</p>
                <div class="fluid-container">
                  <p class="font-weight-medium text-center mb-0">60</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 stretch-card mob-mb-3">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <img class="w-40px" src="~/assets/images/icons/custom/subscription.png" />
              </div>
              <div class="float-right">
                <p class="mb-0 text-center">Average licence usage</p>
                <div class="fluid-container">
                  <p class="font-weight-medium text-center mb-0">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 mb-3">
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 stretch-card mob-mb-3">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <img class="w-40px" src="~/assets/images/icons/custom/settings.png" />
              </div>
              <div class="float-right">
                <p class="mb-0 text-right">Admin Users</p>
                <div class="fluid-container">
                  <p class="font-weight-medium text-right mb-0">1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 stretch-card mob-mb-3">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <img class="w-40px" src="~/assets/images/icons/custom/staff.png" />
              </div>
              <div class="float-right">
                <p class="mb-0 text-right">Staff Users</p>
                <div class="fluid-container">
                  <p class="font-weight-medium text-right mb-0">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 stretch-card mob-mb-3">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <img class="w-40px" src="~/assets/images/icons/custom/student.png" />
              </div>
              <div class="float-right">
                <p class="mb-0 text-right">Student Users</p>
                <div class="fluid-container">
                  <p class="font-weight-medium text-right mb-0">1200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 stretch-card mob-mb-3">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <img class="w-40px" src="~/assets/images/icons/custom/teacher.png" />
              </div>
              <div class="float-right">
                <p class="mb-0 text-right s">Teacher Users</p>
                <div class="fluid-container">
                  <p class="font-weight-medium text-right mb-0">50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row">
            <div class="col-lg-12">
              <div class="search-field d-none d-md-block">
                <form class="d-flex align-items-center h-100" action="#">
                  <div class="input-group">
                    <div class="input-group-prepend bg-white">
                      <img class="input-group-text border-0 img-magnify" src="assets/images/icons/search.png">
                    </div>
                    <input type="text" class="form-control bg-white border-0 w-50" placeholder="Search">
                  </div>
                </form>
              </div>
            </div>
    </div>-->

    <div class="row">      
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title float-left">Classes Delivered Till-date by Teacher</h4>
            <TeachersSummary />
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title float-left">Total Online Classes delivered today (per standard)</h4>
            <StudentsSummary />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title float-left">Attendance today by Class</h4>
            <ClassAttendance />
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title float-left">Total Licenses used per Month</h4>
            <LicenseUsage />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title float-left">Holidays Elapsed and Upcoming</h4>
            <HolidaySummary />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title float-left">Online School Users</h4>
            <OnlineSchoolUsers />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title float-left">Offline School Users</h4>
            <OfflineSchoolUsers />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title float-left">License Expiry (in days)</h4>
            <LicenseExpire />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HolidaySummary from '@/components/Dashboard/SchoolAdmin/HolidaySummary'
import OnlineSchoolUsers from '@/components/Dashboard/SchoolAdmin/OnlineSchoolUsers'
import OfflineSchoolUsers from '@/components/Dashboard/SchoolAdmin/OfflineSchoolUsers'
import TeachersSummary from '@/components/Dashboard/SchoolAdmin/TeachersSummary'
import StudentsSummary from '@/components/Dashboard/SchoolAdmin/StudentsSummary'
import ClassAttendance from '@/components/Dashboard/SchoolAdmin/ClassAttendance'
import LicenseUsage from '@/components/Dashboard/SchoolAdmin/LicenseUsage'
import LicenseExpire from '@/components/Dashboard/SchoolAdmin/LicenseExpire'

export default {
  components: {
   HolidaySummary,
    OnlineSchoolUsers,
    OfflineSchoolUsers,
    TeachersSummary,
    StudentsSummary,
    ClassAttendance,
    LicenseUsage,
    LicenseExpire
  },
  data() {
    return {
      toastCount: 0
    }
  },
  methods: {
    makeToast(append = false) {
      this.toastCount++
      this.$showSuccessToast(
        this,
        'Login success'
      ) /* 
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: 'BootstrapVue Toast',
        autoHideDelay: 5000,
        appendToast: append
      }) */
    }
  }
}
</script>

<style scoped>
.text-color-admin {
  color: #573b92 !important;
}
.text-color-staff {
  color: #ad5129 !important;
}
.text-color-student {
  color: #0d6abf !important;
}
.text-color-teachers {
  color: #935f62 !important;
}
.card .card-title {
  text-transform: none !important;
}
</style>
