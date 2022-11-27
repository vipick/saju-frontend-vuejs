<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-row justify="center" align="center">
          <v-btn outlined large v-on="on">멤버 추가</v-btn>
        </v-row>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="* 닉네임 필수"
                    required
                    v-model="nickname"
                    :rules="[
                      () => !!nickname || '닉네임 입력은 필수 입니다.',
                      () =>
                        (!!nickname && nickname.length >= 2 && nickname.length <= 30) ||
                        '닉네임은 2 글자 이상 30 글자 이하이어야 합니다.',
                    ]"
                  ></v-text-field>
                  <v-radio-group v-model="gender" row>
                    <span>성별 :</span>
                    <v-radio label="남성" value="MALE"></v-radio>
                    <v-radio label="여성" value="FEMALE"></v-radio>
                  </v-radio-group>
                  <v-radio-group v-model="birthdayType" row>
                    <span>타입 :</span>
                    <v-radio label="양력" value="SOLAR"></v-radio>
                    <v-radio label="음력" value="LUNAR"></v-radio>
                  </v-radio-group>

                  <v-text-field
                    label="* 생일 (예: 19950318) 필수"
                    required
                    v-model="birthday"
                    :rules="[
                      () => !!birthday || '생년월일 입력은 필수 입니다.',
                      () => (!!birthday && birthday.length == 8) || 'Birthday must be 8 characters',
                      (v) =>
                        /^(19[0-9][0-9]|20\d{2}|2100)(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/g.test(v) ||
                        'input 1900 ~ 2100 year',
                    ]"
                    type="number"
                  ></v-text-field>
                  <v-text-field
                    label="시간 (예: 0724)  선택"
                    v-model="time"
                    :rules="[
                      () => !time || (!!time && time.length == 4) || 'Time must be 0 or 4 characters',
                      (v) =>
                        !time ||
                        /(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])$/g.test(v) ||
                        'input 00 ~ 23 hours, 00 ~ 59 minutes',
                    ]"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row justify="center" align="center">
                <v-spacer></v-spacer>
                <v-btn outlined text @click="dialog = false">취소</v-btn>
                <v-btn outlined text @click="onClickAddMember">확인</v-btn>
              </v-row>
              <br />
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "MemberAddForm",
  data() {
    return {
      nickname: "",
      gender: "MALE",
      birthdayType: "SOLAR",
      birthday: "",
      time: "",
      dialog: false,
    };
  },

  methods: {
    onClickAddMember() {
      if (this.$refs.form.validate() == false) {
        return;
      }

      this.dialog = false;
      this.$emit("addMember", this);
      this.resetFields();
    },
    resetFields() {
      this.nickname = "";
      this.gender = "MALE";
      this.birthdayType = "SOLAR";
      this.birthday = "";
      this.time = "";
    },
  },
};
</script>
<style scoped>
.v-btn {
  margin: 20px;
  padding: 20px;
}
</style>
