import Vue from "vue";
import Router from "vue-router";
import MyPage from "@/components/user/MyPage";
import MemberPage from "@/components/member/MemberPage";
import GroupPage from "@/components/group/GroupPage";
import GroupMemberPage from "@/components/group-member/GroupMemberPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //마이페이지
    {
      path: "/mypage",
      component: MyPage,
      name: "MyPage",
    },
    //멤버
    {
      path: "/member",
      component: MemberPage,
      name: "MemberPage",
    },
    //그룹
    {
      path: "/group",
      component: GroupPage,
      name: "GroupPage",
    },
    //그룹-멤버
    {
      path: "/group-member/:groupId",
      component: GroupMemberPage,
      name: "GroupMemberPage",
      props: true,
    },
  ],
});
