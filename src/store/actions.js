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

export default {
  /**
   * [인증]
   */
  //회원가입
  async signup({ commit }, payload) {
    commit(DESTROY_MY_INFO);
    commit(DESTROY_ACCESS_TOKEN);

    const { email, password, nickname, birthday, birthdayType, gender, time } = payload;
    const object = time
      ? {
          email,
          password,
          nickname,
          gender,
          birthdayType,
          birthday,
          time,
        }
      : {
          email,
          password,
          nickname,
          gender,
          birthdayType,
          birthday,
        };
    try {
      const res = await api.post("/users/signup", object);
      if (res) {
        const { accessToken } = res.data.data;
        await commit(SET_ACCESS_TOKEN, accessToken);
        alert("회원가입 성공");
      }
    } catch (err) {
      if (err.response.status === 409) {
        return alert(err.response.data.message);
      } else {
        return alert("회원가입 에러");
      }
    }

    try {
      const res = await api.get("/users/me");
      if (res) {
        return commit(SET_MY_INFO, res.data.data);
      }
    } catch (err) {
      return alert("내정보보기 에러");
    }
  },

  //로그인
  async signin({ commit }, payload) {
    commit(DESTROY_MY_INFO);
    commit(DESTROY_ACCESS_TOKEN);

    const { email, password } = payload;
    try {
      const res = await api.post("/users/signin", { email, password });

      const { accessToken } = res.data.data;
      commit(SET_ACCESS_TOKEN, accessToken);
    } catch (err) {
      if (err.response.status === 401) {
        return alert(err.response.data.message);
      } else {
        return alert("로그인 에러 ");
      }
    }

    try {
      const res = await api.get("/users/me");
      if (res) {
        return commit(SET_MY_INFO, res.data.data);
      }
    } catch (err) {
      return alert("내정보보기 에러");
    }
  },

  //토큰이 있는 경우 내정보 가져오기
  async signinByToken({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token);

    try {
      if (token) {
        const res = await api.get("/users/me");
        if (res) {
          return commit(SET_MY_INFO, res.data.data);
        }
      } else {
        this.$router.push({ name: "SignUpPage" });
      }
    } catch (err) {
      this.$router.push({ name: "SignUpPage" });
    }
  },

  //로그아웃
  signout({ commit }) {
    commit(DESTROY_MY_INFO);
    commit(DESTROY_ACCESS_TOKEN);
  },

  /**
   * [멤버 관리]
   */
  //멤버 리스트
  async getMembers({ commit }, payload) {
    try {
      let { page } = payload;
      page -= 1;
      const res = await api.get(`/members?page=${page}&size=10`);
      if (res) {
        return commit(SET_MEMBERS, res.data.data);
      }
    } catch (err) {
      return alert("멤버 리스트 에러");
    }
  },

  //멤버 추가
  async addMember({ commit }, payload) {
    commit;
    const { nickname, gender, birthdayType, birthday, time } = payload;
    const object = time
      ? {
          nickname,
          gender,
          birthdayType,
          birthday,
          time,
        }
      : {
          nickname,
          gender,
          birthdayType,
          birthday,
        };
    try {
      await api.post("/members", object);
    } catch (err) {
      return alert("멤버 추가 에러");
    }
  },

  //멤버 삭제
  async deleteMember({ commit }, id) {
    commit;
    try {
      return api.delete(`/members/${id}`);
    } catch (err) {
      if (err.response.status === 403) {
        return alert(err.response.data.message);
      } else {
        return alert("멤버 삭제 에러");
      }
    }
  },

  /**
   * [그룹 관리]
   */
  //그룹 리스트
  async getGroups({ commit }, payload) {
    try {
      let { page } = payload;
      page -= 1;
      const res = await api.get(`/groups?page=${page}&size=10`);
      if (res) {
        return commit(SET_GROUPS, res.data.data);
      }
    } catch (err) {
      return alert("그룹 리스트 에러");
    }
  },

  //그룹 추가
  async addGroup({ commit }, payload) {
    commit;
    const { name } = payload;
    try {
      return await api.post("/groups", { name });
    } catch (err) {
      return alert("그룹 추가 에러");
    }
  },

  //그룹 수정
  async updateGroup({ commit }, payload) {
    commit;
    const { id, name } = payload;
    try {
      return await api.patch(`/groups/${id}`, {
        name,
      });
    } catch (err) {
      if (err.response.status === 403) {
        return alert(err.response.data.message);
      } else {
        return alert("그룹 수정 에러");
      }
    }
  },

  //그룹 삭제
  async deleteGroup({ commit }, id) {
    commit;
    try {
      return api.delete(`/groups/${id}`);
    } catch (err) {
      if (err.response.status === 403) {
        return alert(err.response.data.message);
      } else {
        return alert("그룹 삭제 에러");
      }
    }
  },

  //그룹명 리스트
  async getGroupNames({ commit }) {
    try {
      const res = await api.get(`/groups/names`);
      if (res) {
        return commit(SET_GROUP_NAMES, res.data.data);
      }
    } catch (err) {
      return alert("그룹명 리스트 에러");
    }
  },

  /**
   * [그룹-멤버 관리]
   */
  //그룹 별 멤버 리스트
  async getGroupMembers({ commit }, payload) {
    let { groupId, page } = payload;
    page -= 1;
    try {
      const res = await api.get(`/groups/${groupId}/members?page=${page}&size=10`);

      if (res) {
        return commit(SET_GROUP_MEMBERS, res.data.data);
      }
    } catch (err) {
      if (err.response.status === 403) {
        return alert(err.response.data.message);
      } else {
        return alert("그룹 별 멤버리스트 에러");
      }
    }
  },

  //그룹에 멤버 추가
  async addMemberToGroup({ commit }, payload) {
    commit;
    const { memberId, groupId } = payload;

    try {
      await api.post(`/groups/${groupId}/members/${memberId}`, {
        memberId,
        groupId,
      });
      return alert("그룹에 멤버 추가 성공");
    } catch (err) {
      if (err.response.status === 403) {
        return alert(err.response.data.message);
      } else if (err.response.status === 409) {
        return alert(err.response.data.message);
      } else {
        return alert("그룹에 멤버 추가 에러");
      }
    }
  },

  //그룹에서 멤버 제거
  async removeMemberFromGroup({ commit }, payload) {
    commit;
    const { memberId, groupId } = payload;
    try {
      return await api.delete(`/groups/${groupId}/members/${memberId}`);
    } catch (err) {
      if (err.response.status === 403) {
        return alert(err.response.data.message);
      } else {
        return alert("그룹에서 멤버 제거 에러");
      }
    }
  },

  /**
   * [만세력]
   */
  //만세력 가져오기 : number 대운수, number2 년도
  async getManse({ commit }, payload) {
    try {
      const { memberId, number, number2 } = payload;
      let res = null;

      if (number && number2) {
        res = await api.get(`/manse/members/${memberId}/fortune/${number}/${number2}`);
      } else if (number) {
        res = await api.get(`/manse/members/${memberId}/fortune/${number}`);
      } else {
        res = await api.get(`/manse/members/${memberId}/fortune`);
      }
      if (res) {
        return commit(SET_MANSE, res.data.data);
      }
    } catch (err) {
      if (err.response.status === 403) {
        return alert(err.response.data.message);
      } else {
        return alert("만세력 가져오기 에러");
      }
    }
  },
};
