<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-row justify="center" align="center">
          <v-btn outlined x-small v-on="on">제거</v-btn>
        </v-row>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              {{ this.member.nickname }}({{ this.member.birthday }}) 을 그룹에서 제거 하시겠습니까?
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined text @click="onClickMemberRemoveCancel">취소</v-btn>
            <v-btn outlined text @click="onClickMemberRemove">제거</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "MemberRemoveForm",
  data() {
    return {
      dialog: false,
      memberId: this.member.id,
      groupId: this.group,
    };
  },
  props: {
    member: {
      type: Object,
    },
    group: {
      type: Number,
    },
  },
  watch: {
    member: {
      deep: true,
      async handler() {
        this.memberId = this.member.id;
        this.groupId = this.group;
      },
    },
  },
  methods: {
    onClickMemberRemoveCancel() {
      this.dialog = false;
    },
    onClickMemberRemove() {
      this.dialog = false;
      this.$emit("memberRemove", this);
    },
  },
};
</script>
