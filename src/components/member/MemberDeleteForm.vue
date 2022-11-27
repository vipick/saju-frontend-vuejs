<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-row justify="center" align="center">
          <v-btn outlined x-small v-on="on">삭제</v-btn>
        </v-row>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container> {{ this.member.nickname }}({{ this.member.birthday }}) 를 삭제 하시겠습니까? </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined text @click="onClickMemberDeleteCancel">취소</v-btn>
            <v-btn outlined text @click="onClickMemberDelete">삭제</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "MemberDeleteForm",
  data() {
    return {
      dialog: false,
      id: this.member.id,
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
        this.id = this.member.id;
      },
    },
  },
  methods: {
    onClickMemberDeleteCancel() {
      this.dialog = false;
    },
    onClickMemberDelete() {
      this.dialog = false;
      const { id } = this;
      this.$emit("memberDelete", id);
    },
  },
};
</script>
