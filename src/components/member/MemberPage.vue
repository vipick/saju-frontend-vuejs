<template>
  <div class="member-page">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-row justify="center" align="center">
                <v-btn icon outlined @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>

                <div v-if="manse">
                  <manse-format-view :manse="manse" :number="Number(manse.fortune.big)" :memberId="memberId" />
                </div>
                <br />
                <br />
                <v-btn icon outlined @click="(dialog = false), (type = ''), (year = new Date().getFullYear())">
                  <v-icon>mdi-close</v-icon></v-btn
                >
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>

    <member-add-form @addMember="onClickAddMember" />

    <v-row justify="center" align="center">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">번호</th>
              <th class="text-left">멤버</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody v-if="members">
            <member-list-view
              @emitManse="onClickManse"
              v-for="(member, index) in members.memberList"
              :key="member.id"
              :member="member"
              :page="page"
              :index="members.totalItems - index - (page - 1) * 10"
            />
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
    <br />
    <template>
      <div class="text-center" v-if="members">
        <v-pagination v-model="page" :length="members.totalPages" :total-visible="5"></v-pagination>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MemberListView from "./MemberListView";
import MemberAddForm from "./MemberAddForm";
import ManseFormatView from "../format/ManseFormatView";

export default {
  name: "MemberPage",
  data() {
    return {
      page: 1,
      dialog: false,
      type: "",
      memberId: "",
      number: this.manse ? Number(this.manse.fortune.big) : 0,
    };
  },
  components: {
    MemberListView,
    MemberAddForm,
    ManseFormatView,
  },
  watch: {
    page: {
      deep: true,
      async handler() {
        await this.getMembers(this);
      },
    },
  },

  async created() {
    await this.getMembers(this);
  },
  methods: {
    async onClickAddMember(payload) {
      await this.addMember(payload);
      await this.getMembers(this);
    },
    onClickManse(payload) {
      const { memberId, dialog, type } = payload;
      this.memberId = memberId;
      this.dialog = dialog;
      this.type = type;
      this.getManse(this);
    },
    ...mapActions(["getMembers", "addMember", "getManse"]),
  },
  computed: {
    ...mapState(["members", "manse"]),
  },
};
</script>

<style scoped>
.container {
  max-width: 100vw;
  padding: 3px;
  margin: 3px;
}
.manse-format-view {
  margin: 10px;
}
</style>
