
import { Commit } from 'vuex'
import { State, UserInfo } from "./state";
const action = {
  changeUserInfo(context: { commit: Commit, state: State }, payload: UserInfo) {
    console.log(context.state.userInfo)
    context.commit('modifyUserInfo', payload)
  }
};
export default action;
