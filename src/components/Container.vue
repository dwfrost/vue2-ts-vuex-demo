<template>
  <div class="container-wrap">
    <slot />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Container',
  components: {},
})
export default class Container extends Vue {}
</script>
<style lang="less" scoped>
.container-wrap {
  width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
