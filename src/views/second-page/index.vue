<template>
  <Container class="first-page-wrap">
    <div>计数：{{ count }}</div>
    <div :style="{ color }">计算属性：{{ computedCount }}</div>
    <Count />
    <div>用户id：{{ userInfo.id }}</div>
    <div>用户名称：{{ userInfo.name }}</div>
    <button @click="setUserInfo">修改用户信息</button>
  </Container>
</template>

<script lang="ts">
// 本页面使用vuex管理页面状态
import { Component, Vue, Watch } from 'vue-property-decorator';

import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import Container from '@/components/Container.vue';
import Count from './Count.vue';

import { UserInfo } from '@/store/state';

// doc https://github.com/ktsn/vuex-class
const storeCount = namespace('count');

@Component({
  name: 'Second',
  components: {
    Count,
    Container,
  },
})
export default class Second extends Vue {
  @State('userInfo') userInfo!: UserInfo;

  @Action('changeUserInfo') changeUserInfo!: (param: UserInfo) => void;

  @storeCount.State('count') count!: 0;

  @storeCount.State('color') color!: string;

  @storeCount.Getter('computedCount') computedCount!: number;

  @Watch('count')
  // eslint-disable-next-line class-methods-use-this
  onCountChange(newVal: number, oldVal: number): void {
    console.log(newVal, oldVal);
  }

  setUserInfo(): void {
    const users = ['rose', 'jack', 'mike', 'rick', 'frost'];
    const nameIndex = Math.floor(Math.random() * users.length);
    console.log('nameIndex', nameIndex);
    const name = users[nameIndex];

    this.changeUserInfo({
      id: this.userInfo.id + 1,
      name,
    });
  }
}
</script>

<style lang="less" scoped>
.wrap {
  padding-top: 50px;
}
div {
  padding: 10px;
  text-align: center;
}
</style>
