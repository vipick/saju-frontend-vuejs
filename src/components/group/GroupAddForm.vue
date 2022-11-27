<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-row justify="center" align="center">
          <v-btn outlined large v-on="on">그룹 추가</v-btn>
        </v-row>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" sm="12" md="12">
                  <v-text-field label="그룹 명" required v-model="name" :rules="nameRules"></v-text-field>
                </v-col>
              </v-row>

              <v-row justify="center" align="center">
                <v-spacer></v-spacer>
                <v-btn outlined text @click="dialog = false">취소</v-btn>
                <v-btn outlined text @click="onClickAddGroup">확인</v-btn>
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
  name: "GroupAddForm",
  data() {
    return {
      name: "",
      nameRules: [(v) => !!v || "이름 입력이 필요합니다."],
      dialog: false,
    };
  },

  methods: {
    onClickAddGroup() {
      if (this.$refs.form.validate() == false) {
        return;
      }

      this.dialog = false;
      this.$emit("addGroup", this);
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
