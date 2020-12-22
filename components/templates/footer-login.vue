<template>
  <div class="footer-login">
    <div class="row flex-grow">
      <div class="col-lg-2 mb-2">
        <h5 class=" mr-2 mb-2">Product</h5>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <!-- 
            <img src="~/assets/images/icons/home.png" class="mr-2 icon-foot" /> -->
            <p class="mb-0"><nuxt-link to="web-pages/about">About</nuxt-link></p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <p class="mb-0"><nuxt-link to="web-pages/features">Features</nuxt-link></p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <p class="mb-0"><nuxt-link to="register">Enquire</nuxt-link></p>
          </div>
        </div>
      </div>
      <div class="col-lg-2 mb-2">
        <h5 class=" mr-2 mb-2">Tools and Apps</h5>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <p class="mb-0"><a href="#">Downloads</a></p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <p class="mb-0"><a href="#">Sitemap</a></p>
          </div>
        </div>
      </div>
      <div class="col-lg-2 mb-2">
        <h5 class=" mr-2 mb-2">About</h5>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <p class="mb-0"><a target="_blank" href="#">Company info</a></p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <p class="mb-0"><a target="_blank" href="#">Investors</a></p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <p class="mb-0"><a target="_blank" href="#">Careers</a></p>
          </div>
        </div>
        <div class="d-flex align-items-center mb-2">
          <div class="wrapper d-flex align-items-center font-weight-medium">
            <p class="mb-0"><a target="_blank" href="#">Advertise with us</a></p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-2">
        <h5 class=" mr-2 mb-2">Get in touch</h5>
      </div>
      <div class="col-lg-3 mb-2">
        <h5 class=" mr-2 mb-2">Stay in touch</h5>
        <div class="foot-social">
          <ul class="pl-0">
            <li>
              <a href="#" target="_blank"
                ><img class="icon-foot" src="~/assets/images/icons/facebook.png"
              /></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><img class="icon-foot" src="~/assets/images/icons/twitter.png"
              /></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><img class="icon-foot" src="~/assets/images/icons/instagram.png"
              /></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><img class="icon-foot" src="~/assets/images/icons/linkedin.png"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row flex-grow foot-bottom">
      <div class="col-lg-12">
        <p>
          <img class="icon-foot-bot" src="~/assets/images/favicon.png" />Copyright © 2020 <a href="#" target="_blank">PRISMM</a>. All rights reserved.
          <nuxt-link class="foot-underline" to="#">Privacy Policy</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>
