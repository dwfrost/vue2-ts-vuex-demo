<template>
  <div class="count-wrap">
    <button @click="addOne">+</button>
    <button @click="modify">modifyInfo</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { State as StateCount } from '@/store/modules/count';

const storeCount = namespace('count');

@Component({
  name: 'Count',
  components: {},
})
export default class Count extends Vue {
  @storeCount.State('count') count!: 0;

  @storeCount.Mutation('add') add!: (param: number) => void;

  @storeCount.Action('modifyInfo') modifyCountAndColor!: (param: StateCount) => void;

  addOne(): void {
    this.add(1);
  }

  modify(): void {
    const colors = ['red', 'blue', 'yellow', 'green', 'black'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    console.log('colorIndex', colorIndex);
    const color = colors[colorIndex];
    this.modifyCountAndColor({
      color,
      count: this.count + 2,
    });
  }

  reset(): void {
    this.modifyCountAndColor({
      color: 'skyblue',
      count: 0,
    });
  }
}
</script>

<style lang="less" scoped>
.count-wrap {
  border-top: 1px solid;
  margin-top: 10px;
  padding-top: 10px;
}
</style>
