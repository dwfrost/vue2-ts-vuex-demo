<template>
  <div class="count-wrap" v-show="show">
    <button @click="hide">隐藏子组件</button>
    <div>子组件count：{{ count }}</div>
    <button @click="add">+</button>
  </div>
</template>

<script lang="ts">
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

  hide(): void {
    this.show = false;
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
