<template>
   <div class="container-scroller">
     <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center text-center error-page bg-gradient-primary-diagonal">
          <div class="row flex-grow">
            <div class="col-lg-7 mx-auto text-white">
              <div class="row align-items-center d-flex flex-row">
                <div class="col-lg-6 text-lg-right pr-lg-4">
                    <i class="mdi mdi-desktop-mac display-icon"></i>
                </div>
                <div class="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                  <h2>SORRY!</h2>
                  <h3 class="font-weight-light">Browser not supported</h3>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 text-center mt-xl-2">
                  <nuxt-link class="text-white font-weight-medium" to="login">Back to home</nuxt-link>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 mt-xl-2">
                  <p class="text-white font-weight-medium text-center">Copyright © 2020 <a href="#" target="_blank">PRISMM</a>. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>
<script>
import TheSidebar from '@/components/templates/TheSidebar'
export default {
  components: {
    TheSidebar
  }
}
</script>
<style scoped>
.display-icon{
  font-size: 150px;
}
</style>
