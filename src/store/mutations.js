import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO,
  SET_MEMBERS,
  SET_GROUPS,
  SET_GROUP_NAMES,
  SET_GROUP_MEMBERS,
  SET_MANSE,
} from "./mutations-types";
import api from "@/api";
import Cookies from "js-cookie";

export default {
  [SET_ACCESS_TOKEN](state, accessToken) {
    if (accessToken) {
      state.accessToken = accessToken;
      api.defaults.headers.common["Authorization"] = `bearer ${accessToken}`;

      Cookies.set("accessToken", accessToken, { expires: 100000 });
    }
  },
  [SET_MY_INFO](state, me) {
    if (me) {
      state.me = me;
    }
  },
  [DESTROY_ACCESS_TOKEN](state) {
    state.accessToken = "";
    delete api.defaults.headers.common["Authorization"];
    Cookies.remove("accessToken");
  },
  [DESTROY_MY_INFO](state) {
    state.me = null;
  },
  [SET_MEMBERS](state, members) {
    if (members) {
      state.members = members;
    }
  },
  [SET_GROUPS](state, groups) {
    if (groups) {
      state.groups = groups;
    }
  },
  [SET_GROUP_NAMES](state, groupNames) {
    if (groupNames) {
      state.groupNames = groupNames;
    }
  },
  [SET_GROUP_MEMBERS](state, groupMembers) {
    if (groupMembers) {
      state.groupMembers = groupMembers;
    }
  },
  [SET_MANSE](state, manse) {
    if (manse) {
      state.manse = manse;
    }
  },
};
