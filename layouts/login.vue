<template>
  <!-- <% include templates/head-login %> -->
  <div class="login-bg">
    <div class="container-scroller">
      <HeadLogin />
      <nuxt />
      <FooterLogin />
      <!-- <% include templates/footer-login %> -->
    </div>
  </div>
</template>

<script>
import HeadLogin from '@/components/templates/head-login.vue'
import FooterLogin from '@/components/templates/footer-login.vue'
export default {
  components: {
    HeadLogin,
    FooterLogin
  }
}
</script>
