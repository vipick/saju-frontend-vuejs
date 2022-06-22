<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-row justify="center" align="center">
          <v-btn outlined x-small v-on="on">그룹</v-btn>
        </v-row>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12" sm="12" md="12">
                  <span>{{ nickname }}({{ birthday }})</span>
                  <v-select
                    v-if="groupNames"
                    label="그룹 선택"
                    :items="selectGroupOptions"
                    item-text="label"
                    item-value="value"
                    v-model="groupId"
                    :rules="[(v) => !!v || '그룹 선택 필요']"
                    required
                  ></v-select>
                </v-col>
              </v-row>

              <v-row justify="center" align="center">
                <v-spacer></v-spacer>
                <v-btn outlined text @click="dialog = false">취소</v-btn>
                <v-btn outlined text @click="onClickAddMemberToGroup">확인</v-btn>
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
import { mapState, mapActions } from "vuex";

export default {
  name: "MemberToGroupForm",
  data() {
    return {
      groupId: "",
      memberId: this.member.id,
      nickname: this.member.nickname,
      birthday: this.member.birthday,
      nameRules: [(v) => !!v || "이름 입력이 필요합니다."],
      dialog: false,
    };
  },
  props: {
    member: {
      type: Object,
    },
  },
  watch: {
    member: {
      deep: true,
      async handler() {
        this.memberId = this.member.id;
        this.nickname = this.member.nickname;
        this.birthday = this.member.birthday;
      },
    },
  },
  async created() {
    await this.getGroupNames();
  },
  methods: {
    onClickAddMemberToGroup() {
      if (this.$refs.form.validate() == false) {
        return;
      }
      this.dialog = false;
      this.$emit("memberToGroupAdd", this);
    },
    ...mapActions(["getGroupNames"]),
  },
  computed: {
    selectGroupOptions() {
      return this.groupNames.map((group) => ({
        label: group.name,
        value: group.id,
      }));
    },
    ...mapState(["groupNames"]),
  },
};
</script>
