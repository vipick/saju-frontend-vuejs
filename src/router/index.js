import Vue from "vue";
import Router from "vue-router";
import SignUpPage from "@/components/user/SignUpPage";
import MyPage from "@/components/user/MyPage";
import MemberPage from "@/components/member/MemberPage";
import GroupPage from "@/components/group/GroupPage";
import GroupMemberPage from "@/components/group-member/GroupMemberPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    //회원가입
    {
      path: "/signup",
      component: SignUpPage,
      name: "SignUpPage",
    },
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
    //시작 페이지 - 토큰이 있는 경우
    { path: "/", component: MyPage },
  ],
});
