import createPersistedState from 'vuex-persistedstate';

export default [
  createPersistedState({
    paths: ['count'],
    // storage: {
    //     getItem: key => uni.getStorageSync(key),
    //     setItem: (key, value) => uni.setStorageSync(key, value),
    //     removeItem: key => uni.removeStorageSync(key),
    // },
  }),
];
