<template>
  <div class="my-page">
    <v-dialog v-model="dialog" persistent max-width="500px" fullscreen transition="dialog-bottom-transition" scrollable>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-btn icon outlined @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <div v-if="type === 'MANSE' && manse">
                  <manse-format-view :manse="manse" :number="Number(manse.fortune.big)" :memberId="memberId" />
                </div>

                <br />
                <br />
                <v-btn icon outlined text @click="(dialog = false), (type = ''), (year = new Date().getFullYear())">
                  <v-icon>mdi-close</v-icon></v-btn
                >
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>

    <div class="space">
      {{ me.member.nickname }}
      {{ me.member.birthday }}({{ me.member.age }}세, <span v-if="me.member.gender === 'MALE'">남</span
      ><span v-else>여</span>, <span v-if="me.member.birthdayType === 'SOLAR'">양력</span><span v-else>음력</span>)
      <span v-if="me.member.time"> {{ me.member.time }}</span>
      <br />

      <v-row class="space"
        ><saju-format-view :saju="me.saju" />
        <fortune-format-view :fortune="me.fortune" />
      </v-row>
    </div>

    <v-row class="button"><v-btn outlined small class="space" @click="onClickManse">만세력 보기</v-btn></v-row>

    <div class="space">
      <v-btn outlined @click="onClickSignOut" small>로그아웃</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SajuFormatView from "../format/SajuFormatView";
import FortuneFormatView from "../format/FortuneFormatView";
import ManseFormatView from "../format/ManseFormatView";

export default {
  name: "MyPage",
  data() {
    return {
      dialog: false,
      comment: "",
      type: "",
      memberId: "",
      number: this.manse ? Number(this.manse.fortune.big) : 0,
    };
  },
  components: {
    SajuFormatView,
    FortuneFormatView,
    ManseFormatView,
  },
  methods: {
    onClickSignOut() {
      this.signout().then(() => {
        this.$router.push({ name: "SignUpForm" });
      });
    },

    onClickManse() {
      this.memberId = this.me.member.id;
      this.type = "MANSE";
      this.dialog = true;
      this.getManse(this);
    },
    ...mapActions(["signout", "getManse"]),
  },
  computed: {
    ...mapState(["me", "manse"]),
  },
};
</script>

<style scoped>
.container {
  max-width: 100vw;
  padding: 3px;
  margin: 3px;
}
.my-page {
  margin: 1px;
}
.space {
  margin: 3px;
}
.button {
  margin: 20px;
}
.name {
  margin: 5px;
}
.manse-format-view {
  margin: 10px;
}
</style>
