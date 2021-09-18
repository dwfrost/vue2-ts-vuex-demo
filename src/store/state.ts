export interface State {
  userInfo: UserInfo
}
export interface UserInfo {
  id: number;
  name: string;
}

const state: State = {
  userInfo: {
    id: 0,
    name: 'none'
  }
};
export default state;
