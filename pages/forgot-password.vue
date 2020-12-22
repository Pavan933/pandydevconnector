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
                    <h4>Forgot your password ?</h4>
                    <form class="pt-3">
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
                            type="text"
                            class="form-control form-control-lg border-left-0"
                            id="username"
                            placeholder="Username"
                            />
                        </div>
                        </div>
                        <div class="my-3">
                        <a
                            class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                            href="#"
                            >Reset</a
                        >
                        </div>
                        <div class="text-center mt-4 font-weight-light">
                        Back to <nuxt-link to="login" class="text-primary">Login</nuxt-link>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="tc pt-3 text-center">
                    <p>Terms and Conditions</p>
                </div>
                </div>
            </div>
            <div class="col-lg-6 d-flex flex-row"></div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
  layout: 'login'
}
</script>
