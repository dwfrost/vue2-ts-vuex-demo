<template>
    <div class="count-wrap">
        <button @click="add">+</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

import { State as StateCount } from '@/store/modules/count';
const storeCount = namespace('count');

@Component({
    name: 'Count',
    components: {},
})
export default class Count extends Vue {
    @storeCount.Mutation('add') add!: (param: number) => void;
    @storeCount.Action('modifyInfo') modifyInfo!: (param: StateCount) => void;
}
</script>

<style lang="less" scoped>
.count-wrap {
    border-top: 1px solid;
    margin-top: 10px;
    padding-top: 10px;
}
</style>
