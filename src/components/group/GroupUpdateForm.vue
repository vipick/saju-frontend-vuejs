<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-row justify="center" align="center">
          <v-btn outlined small v-on="on">수정</v-btn>
        </v-row>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field label="그룹 명" required v-model="name" :rules="nameRules"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined text @click="onClickGroupUpdateCancel">취소</v-btn>
            <v-btn outlined text @click="onClickGroupUpdate">수정</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "GroupUpdateForm",
  data() {
    return {
      dialog: false,
      id: this.group.id,
      name: this.group.name,
      nameRules: [(v) => !!v || "이름 입력이 필요합니다."],
    };
  },
  props: {
    group: {
      type: Object,
    },
  },
  methods: {
    onClickGroupUpdateCancel() {
      this.resetFields();
      this.dialog = false;
    },
    onClickGroupUpdate() {
      if (this.$refs.form.validate() == false) {
        return;
      }
      this.dialog = false;
      this.$emit("groupUpdate", this);
    },
    resetFields() {
      this.name = this.group.name;
    },
  },
};
</script>
