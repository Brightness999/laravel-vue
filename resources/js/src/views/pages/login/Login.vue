<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center text-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto" />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container pt-24">
                <div class="vx-card__title mb-4 mt-32">
                  <h4 class="mb-4">Login to your workspace</h4>
                </div>
                <login-firebase></login-firebase>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
import LoginJwt from "./LoginJWT.vue";
import LoginFirebase from "./LoginFirebase.vue";
import LoginAuth0 from "./LoginAuth0.vue";

export default {
  components: {
    LoginJwt,
    LoginFirebase,
    LoginAuth0,
  },
  mounted() {
    this.$store.commit("auth/INITIALIZE", this.$cookie.get("authentication"));

    this.$cookie.delete("authentication");
  },
  methods: {
    AuthProvider(provider) {
      var self = this;
      this.$http
        .get("/sociallogin/" + provider)
        .then((response) => {
          if (response.data.error) {
            this.error = err.response.data.error;
          } else if (response.data.redirectUrl) {
            window.location.href = response.data.redirectUrl;
          }
        })
        .catch((err) => {
          if (err.response.data.error) {
            this.error = err.response.data.error;
          }
          this.isProcessing = false;
        });
    },
    SocialLogin(provider, response) {
      this.$http
        .post("/sociallogin/" + provider, response)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
};
</script>

<style lang="scss">
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}
</style>
