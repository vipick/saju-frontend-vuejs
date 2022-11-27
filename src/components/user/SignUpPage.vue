<template>
  <div class="signup-page">
    <sign-up-form @signup="onClickSignUp" @signin="onClickSignIn" />
  </div>
</template>
<script>
import SignUpForm from "./SignUpForm";
import { mapActions, mapState } from "vuex";

export default {
  name: "SignUpPage",
  components: {
    SignUpForm,
  },
  methods: {
    onClickSignUp(payload) {
      this.signup(payload).then(() => {
        this.$router.push({ path: "/mypage" });
      });
    },
    onClickSignIn(payload) {
      this.signin(payload).then(() => {
        this.$router.push({ path: "/mypage" });
      });
    },

    ...mapActions(["signup", "signin"]),
  },
  computed: {
    ...mapState(["me"]),
  },
};
</script>

<style scoped>
.signup-page {
  margin: 10px;
}
</style>
