<template>
  <tr class="group-list-view">
    <td>{{ index }}</td>
    <td>
      <router-link
        class="pointer"
        tag="span"
        :to="{
          name: 'GroupMemberPage',
          params: { groupId: group.id },
        }"
      >
        <span class="orange--text">{{ group.name }}</span>
      </router-link>
    </td>
    <td>{{ group.memberCount }}명</td>
    <td>
      <group-update-form @groupUpdate="onClickGroupUpdate" :group="group" />
    </td>
    <td>
      <group-delete-form @groupDelete="onClickGroupDelete" :group="group" />
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
import GroupUpdateForm from "./GroupUpdateForm";
import GroupDeleteForm from "./GroupDeleteForm";

export default {
  name: "GroupListView",
  components: {
    GroupUpdateForm,
    GroupDeleteForm,
  },
  props: {
    group: {
      type: Object,
    },
    index: {
      type: Number,
    },
    page: {
      type: Number,
    },
  },
  methods: {
    async onClickGroupUpdate(payload) {
      await this.updateGroup(payload);
      await this.getGroups(this);
    },
    async onClickGroupDelete(payload) {
      await this.deleteGroup(payload);
      await this.getGroups(this);
    },
    ...mapActions(["getGroups", "updateGroup", "deleteGroup"]),
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
