<template>
  <div class="group-page">
    <group-add-form @addGroup="onClickAddGroup" />

    <v-row justify="center" align="center">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">번호</th>
              <th class="text-left">그룹 명</th>
              <th class="text-left">멤버 수</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody v-if="groups">
            <group-list-view
              v-for="(group, index) in groups.groupList"
              :key="group.id"
              :group="group"
              :index="groups.totalItems - index - (page - 1) * 10"
              :page="page"
            />
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
    <br />
    <template>
      <div class="text-center" v-if="groups">
        <v-pagination v-model="page" :length="groups.totalPages" :total-visible="15"></v-pagination>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import GroupListView from "./GroupListView";
import GroupAddForm from "./GroupAddForm";

export default {
  name: "GroupPage",
  components: {
    GroupListView,
    GroupAddForm,
  },
  data() {
    return {
      page: 1,
    };
  },
  watch: {
    page: {
      deep: true,
      async handler() {
        await this.getGroups(this);
      },
    },
  },
  created() {
    this.getGroups(this);
  },
  methods: {
    async onClickAddGroup(payload) {
      await this.addGroup(payload);
      await this.getGroups(this);
    },
    ...mapActions(["getGroups", "addGroup"]),
  },
  computed: {
    ...mapState(["groups"]),
  },
};
</script>

<style scoped>
.group-page {
  margin: 10px;
}
</style>
