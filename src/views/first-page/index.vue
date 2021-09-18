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
    showCount() {
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
