export interface UserInfo {
  id: number;
  name: string;
}
export interface State {
  userInfo: UserInfo
}

const state: State = {
  userInfo: {
    id: 0,
    name: 'none',
  },
};
export default state;
