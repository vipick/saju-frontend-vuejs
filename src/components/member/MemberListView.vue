<template>
  <tr class="member-list-view" v-if="member">
    <td>{{ index }}</td>
    <td>
      {{ member.birthday }}(<span v-if="member.gender === 'MALE'">남</span> <span v-else>여</span>,
      {{ member.age }})<br />(<span v-if="member.birthdayType === 'SOLAR'">양력</span><span v-else>음력</span>){{
        member.time
      }}
      {{ member.nickname }}
    </td>

    <td v-if="type !== 'group'">
      <div v-if="member.type === 'MEMBER'">
        <div class="member-to-group">
          <member-to-group-form @memberToGroupAdd="onClickMemberToGroupAdd" :member="member" />
        </div>
        <div><member-delete-form @memberDelete="onClickMemberDelete" :member="member" /></div>
      </div>
      <div v-else>
        <div class="member-to-group">본인</div>
        <div><member-to-group-form @memberToGroupAdd="onClickMemberToGroupAdd" :member="member" /></div>
      </div>
    </td>
    <td v-else><member-remove-form @memberRemove="onClickMemberRemove" :member="member" :group="groupId" /></td>

    <td>
      <v-btn justify-center outlined x-small @click="onClickManse">만세력</v-btn>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
import MemberDeleteForm from "./MemberDeleteForm";
import MemberToGroupForm from "../group-member/MemberToGroupForm";
import MemberRemoveForm from "../group-member/MemberRemoveForm";

export default {
  name: "MemberListView",
  data() {
    return {
      id: this.member.id,
    };
  },
  components: {
    MemberDeleteForm,
    MemberToGroupForm,
    MemberRemoveForm,
  },
  props: {
    page: {
      type: Number,
    },
    member: {
      type: Object,
    },
    index: {
      type: Number,
    },
    type: {
      type: String,
    },
    groupId: {
      type: Number,
    },
    memberId: {
      type: Number,
    },
  },
  methods: {
    async onClickMemberDelete(payload) {
      await this.deleteMember(payload);
      await this.getMembers(this);
    },
    async onClickMemberToGroupAdd(payload) {
      await this.addMemberToGroup(payload);
    },
    async onClickMemberRemove(payload) {
      await this.removeMemberFromGroup(payload);
      await this.getGroupMembers(this);
    },
    onClickManse() {
      this.memberId = this.member.id;
      this.dialog = true;
      this.$emit("emitManse", this);
    },
    ...mapActions(["getMembers", "deleteMember", "addMemberToGroup", "removeMemberFromGroup", "getGroupMembers"]),
  },
};
</script>

<style scoped>
.member-to-group {
  margin-bottom: 10px;
}
</style>
