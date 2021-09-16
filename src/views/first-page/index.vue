<template>
    <div class="first-page-wrap">
        <div>计数：{{ count }}</div>
        <div>计算属性：{{ computedCount }}</div>
        <Count :count="count" @change="countChange" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Count from './Count.vue';

@Component({
    name: 'FirstPage',
    components: {
        Count,
    },
})
export default class FirstPage extends Vue {
    count = 0;

    @Watch('count')
    onCountChange(newVal: number, oldVal: number) {
        console.log(newVal, oldVal);
    }

    get computedCount() {
        return 'computed' + this.count;
    }

    created() {
        console.log('created');
    }
    mounted() {
        console.log('mounted');
    }

    countChange(count: number) {
        this.count = count;
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
