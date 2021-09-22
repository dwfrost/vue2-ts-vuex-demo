import { State, UserInfo } from './state';

const mutation = {
  modifyUserInfo(state: State, payload: UserInfo):void {
    state.userInfo = { ...state.userInfo, ...payload };
  },
};

export default mutation;
