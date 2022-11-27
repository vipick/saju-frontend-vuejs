<template>
  <div class="group-member-page">
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
              <v-col class="text-right">
                <v-btn icon outlined @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
              <v-row justify="start" align="start">
                <v-row dense>
                  <v-col cols="12" md="12" sm="12">
                    <div v-if="manse">
                      <manse-format-view :manse="manse" :number="Number(manse.fortune.big)" :memberId="memberId" />
                    </div>
                  </v-col>
                </v-row>
              </v-row>
            </v-container>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>

    <span>그룹별 멤버 관리</span>
    <div v-if="groupMembers">{{ groupMembers.group.name }}</div>

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
          <tbody v-if="groupMembers">
            <member-list-view
              @emitManse="onClickManse"
              v-for="(member, index) in groupMembers.members.memberList"
              :key="member.id"
              :member="member"
              :groupId="groupId"
              :memberId="member.id"
              :type="'group'"
              :index="groupMembers.members.totalItems - index - (page - 1) * 10"
              :page="page"
            />
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
    <br />
    <template>
      <div class="text-center" v-if="groupMembers">
        <v-pagination v-model="page" :length="groupMembers.members.totalPages" :total-visible="15"></v-pagination>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MemberListView from "../member/MemberListView";
import ManseFormatView from "../format/ManseFormatView";

export default {
  name: "GroupMemberPage",
  components: {
    MemberListView,
    ManseFormatView,
  },
  props: {
    groupId: {
      type: Number,
    },
  },
  data() {
    return {
      page: 1,
      dialog: false,
      memberId: "",
      number: this.manse ? Number(this.manse.fortune.big) : 0,
      comment: "",
    };
  },
  watch: {
    page: {
      deep: true,
      async handler() {
        await this.getGroupMembers(this);
      },
    },
  },
  created() {
    this.getGroupMembers(this);
  },
  methods: {
    async onClickManse(payload) {
      const { memberId, dialog, type } = payload;
      this.memberId = memberId;
      this.dialog = dialog;
      this.type = type;
      await this.getManse(this);
    },
    onClickCancel() {
      this.dialog = false;
    },
    ...mapActions(["getGroupMembers", "getManse"]),
  },
  computed: {
    ...mapState(["groupMembers", "manse"]),
  },
};
</script>

<style scoped>
.group-member-page {
  margin: 10px;
}
table {
  border-collapse: collapse;
  width: 450px;
}
</style>
