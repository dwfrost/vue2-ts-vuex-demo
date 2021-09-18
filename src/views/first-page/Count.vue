<template>
  <div class="count-wrap" v-show="show">
    <button @click="hide">
      隐藏子组件
    </button>
    <div>子组件count：{{ count }}</div>
    <button
      @click="add"
      @tap="tap"
      @listen="listen"
      @onreadystatechange="onreadystatechange"
      @onshowitagain="onshowitagain"
      @haha="haha"
      @heihei="heihei"
    >
      +
    </button>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
// doc https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Emit, VModel, Vue } from 'vue-property-decorator';

@Component({
  name: 'Count',
  components: {},
})
export default class Count extends Vue {
  @Prop({
    default: 0,
  })
  count!: number;

  @VModel({
    default: false,
  })
  show!: boolean;

  @Emit('change')
  add(): number {
    return this.count + 1;
  }

  hide(jsonData: any): void {
    console.log(1);
    this.show = false;
    const foo =
      jsonData &&
      jsonData.foo &&
      jsonData.foo.bar &&
      jsonData.foo.bar.baz &&
      jsonData.foo.bar.baz.quux &&
      jsonData.foo.bar.baz.quux.xyzzy;
    // const a = '123354535435' + '2342423153';
  }
}
</script>

<style lang="less" scoped>
.count-wrap {
  border-top: 1px solid;
  margin-top: 10px;
  padding-top: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
</style>
