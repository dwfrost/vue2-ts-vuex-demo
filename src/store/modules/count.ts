/* eslint-disable no-shadow */

import { Commit, Dispatch } from 'vuex';

export interface State {
  count: number
  color: string
}

const state = {
  count: 0,
  color: 'skyblue',
};
const getters = {
  computedCount: (state: State):number => state.count * 10,
};
const mutations = {
  add(state: State, payload: number):void {
    state.count += payload;
  },
  changeCount(state: State, payload: number):void {
    state.count = payload;
  },
  changeColor(state: State, payload: string):void {
    state.color = payload;
  },
};
const actions = {
  modifyInfo(context: { commit: Commit, dispatch: Dispatch, state: State }, payload: State):void {
    context.dispatch('doSomeAction');
    context.commit('changeCount', payload.count);
    context.commit('changeColor', payload.color);
  },
  doSomeAction(context: { state: State }):void {
    console.log('doSomeAction', context.state);
  },
};
export default {
  /**
 * 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
 * 使用 namespaced: true 可以避免这种情况
 */
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
