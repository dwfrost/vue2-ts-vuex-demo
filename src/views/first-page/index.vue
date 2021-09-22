<template>
  <Container class="first-page-wrap">
    <div>计数：{{ count }}</div>
    <div>计算属性：{{ computedCount }}</div>
    <button @click="showCount">显示子组件</button>
    <Count v-model="show" :count="count" @change="countChange" />
  </Container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import Container from '@/components/Container.vue';
import Count from './Count.vue';

@Component({
  name: 'FirstPage',
  components: {
    Count,
    Container,
  },
})
export default class FirstPage extends Vue {
  count = 0;

  show = true;

  @Watch('count')
  // eslint-disable-next-line class-methods-use-this
  onCountChange(newVal: number, oldVal: number): void {
    console.log(newVal, oldVal);
  }

  get computedCount(): string {
    return `computed${this.count}`;
  }

  created(): void {
    console.log('created', this.count);
  }

  mounted(): void {
    console.log('mounted', this.count);
  }

  countChange(count: number): void {
    this.count = count;
  }

  showCount(): void {
    this.show = true;
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
