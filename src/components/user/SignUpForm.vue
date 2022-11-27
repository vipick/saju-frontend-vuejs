<template>
  <div>
    <v-card>
      <v-form ref="form">
        <v-card-text>
          <v-container v-if="status === 'signup'">
            <v-row justify="center" align="center">
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="* 닉네임 필수"
                  required
                  v-model="nickname"
                  :rules="[
                    () => !!nickname || '닉네임 입력은 필수 입니다.',
                    () =>
                      (!!nickname && nickname.length >= 2 && nickname.length <= 30) ||
                      '닉네임은 2 글자 이상 30 글자 이하 이어야 합니다.',
                  ]"
                ></v-text-field>

                <v-text-field
                  :rules="[emailRules.required, emailRules.email]"
                  color="red"
                  label="* 이메일"
                  required
                  v-model="email"
                ></v-text-field>

                <v-text-field
                  :rules="[passwordRules.required, passwordRules.counter]"
                  color="red"
                  label="* 패스워드"
                  required
                  v-model="password"
                ></v-text-field>

                <v-text-field
                  :rules="[passwordRules.required, passwordRules.counter, passwordConfirmationRule]"
                  color="red"
                  label="* 패스워드 확인"
                  required
                  v-model="rePassword"
                ></v-text-field>

                <v-radio-group v-model="gender" row>
                  <v-radio label="남" value="MALE"></v-radio>
                  <v-radio label="여" value="FEMALE"></v-radio>
                </v-radio-group>
                <v-radio-group v-model="birthdayType" row>
                  <v-radio label="양력" value="SOLAR"></v-radio>
                  <v-radio label="음력" value="LUNAR"></v-radio>
                </v-radio-group>

                <v-text-field
                  label="* 생일 (예: 19950318) 필수"
                  required
                  v-model="birthday"
                  :rules="[
                    () => !!birthday || '생년월일 입력은 필수입니다.',
                    () => (!!birthday && birthday.length == 8) || 'Birthday must be 8 characters',
                    (v) =>
                      /^(19[0-9][0-9]|20\d{2}|2100)(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/g.test(v) ||
                      'Input 1900 ~ 2100 year',
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
                      'Input 00 ~ 23 hours, 00 ~ 59 minutes',
                  ]"
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-btn outlined @click="onClickSignUp">회원가입</v-btn>
            </v-row>
            <br />
          </v-container>
          <v-container v-else>
            <v-row justify="center" align="center">
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  :rules="[emailRules.required, emailRules.email]"
                  color="red"
                  label="* 이메일"
                  required
                  v-model="email"
                ></v-text-field>

                <v-text-field
                  :rules="[passwordRules.required, passwordRules.counter]"
                  color="red"
                  label="* 패스워드"
                  required
                  v-model="password"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-btn outlined @click="onClickSignIn">로그인</v-btn>
            </v-row>
            <br />
          </v-container>

          <v-radio-group v-model="status" row>
            <v-radio label="로그인" value="signin"></v-radio>
            <v-radio label="회원가입" value="signup"></v-radio>
          </v-radio-group>
        </v-card-text>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      nickname: "",
      email: "",
      password: "",
      rePassword: "",
      status: "signin",
      birthday: "",
      birthdayType: "SOLAR",
      gender: "MALE",
      time: "",
      passwordRules: {
        required: (value) => !!value || "패스워드 입력이 필요합니다.",
        counter: (value) =>
          (value.length >= 4 && value.length <= 100) || "패스워드는 4글자 이상 100글자 이하 이어야 합니다.",
      },
      emailRules: {
        required: (value) => !!value || "이메일 입력이 필요합니다.",
        counter: (value) => value.length <= 100 || "Max 100 characters",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "이메일 타입을 입력해주세요.";
        },
      },
    };
  },
  computed: {
    passwordConfirmationRule() {
      return () => this.password === this.rePassword || "패스워드가 일치해야 합니다.";
    },
  },
  methods: {
    onClickSignUp() {
      if (this.$refs.form.validate() == false) {
        return;
      }

      this.$emit("signup", this);
    },
    onClickSignIn() {
      if (this.$refs.form.validate() == false) {
        return;
      }

      this.$emit("signin", this);
    },
  },
};
</script>
