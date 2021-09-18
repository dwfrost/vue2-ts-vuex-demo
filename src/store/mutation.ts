import { State, UserInfo } from "./state";
const mutation = {
  modifyUserInfo(state: State, payload: UserInfo) {
    state.userInfo = { ...state.userInfo, ...payload }
  },
};

export default mutation;
