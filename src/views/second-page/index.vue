<template>
  <Container class="first-page-wrap">
    <div>计数：{{ count }}</div>
    <div>计算属性：{{ computedCount }}</div>
    <Count />
  </Container>
</template>

<script lang="ts">
// 本页面使用vuex管理页面状态
import { Component, Vue, Watch } from "vue-property-decorator";

import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import Container from "@/components/Container.vue";
import Count from "./Count.vue";

// doc https://github.com/ktsn/vuex-class
const storeCount = namespace("count");

@Component({
  name: "Second",
  components: {
    Count,
    Container
  }
})
export default class Second extends Vue {
  @storeCount.State("count") count;

  @storeCount.State("color") color;

  @storeCount.Getter("computedCount") computedCount;

  @Watch("count")
  onCountChange(newVal: number, oldVal: number) {
    console.log(newVal, oldVal);
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
