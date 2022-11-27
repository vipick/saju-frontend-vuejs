<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-row justify="center" align="center">
          <v-btn outlined small v-on="on">삭제</v-btn>
        </v-row>
      </template>
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              {{ this.group.name }} 을 삭제 하시겠습니까?
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined text @click="onClickGroupDeleteCancel">취소</v-btn>
            <v-btn outlined text @click="onClickGroupDelete">삭제</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "GroupDeleteForm",
  data() {
    return {
      dialog: false,
      id: this.group.id,
    };
  },
  props: {
    group: {
      type: Object,
    },
  },
  methods: {
    onClickGroupDeleteCancel() {
      this.dialog = false;
    },
    onClickGroupDelete() {
      this.dialog = false;
      const { id } = this;
      this.$emit("groupDelete", id);
    },
  },
};
</script>
