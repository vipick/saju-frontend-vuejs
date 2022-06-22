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
        <member-to-group-form @memberToGroupAdd="onClickMemberToGroupAdd" :member="member" />
        <member-delete-form @memberDelete="onClickMemberDelete" :member="member" />
      </div>
      <div v-else>
        <div>본인</div>
        <member-to-group-form @memberToGroupAdd="onClickMemberToGroupAdd" :member="member" />
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
import MemberRemoveForm from "../group-member/MemberRemoveForm";
import MemberToGroupForm from "../group-member/MemberToGroupForm";

export default {
  name: "MemberListView",
  components: {
    MemberDeleteForm,
    MemberRemoveForm,
    MemberToGroupForm,
  },
  data() {
    return {
      id: this.member.id,
    };
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
    async onClickMemberToGroupAdd(payload) {
      await this.addMemberToGroup(payload);
    },
    async onClickMemberDelete(payload) {
      await this.deleteMember(payload);
      await this.getMembers(this);
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

    ...mapActions(["deleteMember", "getMembers", "removeMemberFromGroup", "getGroupMembers", "addMemberToGroup"]),
  },
};
</script>
