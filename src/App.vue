<template>
  <v-app>
    <v-card>
      <v-app-bar app color="#fff59d">
        <v-icon color="black">mdi-yin-yang</v-icon>
        <strong class="logo">SajuPick</strong>

        <v-spacer></v-spacer>

        <div v-if="isAuthorized">
          <span @click="onClickMyPage"> 내 정보 20230729-3</span>
        </div>
      </v-app-bar>

      <v-main app v-if="isAuthorized">
        <router-view />
      </v-main>
      <v-main v-else>
        <sign-up-page />
      </v-main>

      <v-bottom-navigation v-if="isAuthorized" app fixed grow dark color="#fff59d">
        <v-btn bottom to="/mypage">
          <span>내 정보</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn bottom to="/member">
          <span>멤버</span>
          <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
        <v-btn bottom to="/group">
          <span>그룹</span>
          <v-icon>mdi-account-group</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import SignUpPage from "./components/user/SignUpPage";

export default {
  name: "App",
  components: {
    SignUpPage,
  },
  computed: {
    ...mapGetters(["isAuthorized"]),
    ...mapState(["me"]),
  },
  methods: {
    onClickMyPage() {
      this.$router.push({ path: "/mypage" });
    },
  },
};
</script>

<style scoped>
.v-btn {
  margin-left: 5px;
}
.logo {
  margin-left: 5px;
  font-size: 20px;
}
.intro {
  margin: 10px;
  font-size: 15px;
}
</style>
