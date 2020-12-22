<template>
  <!-- <% include templates/head-login %> -->
  <div class="login-bg">
      <CMSHead />
      <nuxt />
      <FooterLogin />
      <!-- <% include templates/footer-login %> -->    
  </div>
</template>

<script>
import CMSHead from '@/components/templates/TheCMSHeader.vue'
import FooterLogin from '@/components/templates/footer-login.vue'
export default {
  components: {
    CMSHead,
    FooterLogin
  }
}
</script>
