<template>
    <div class="hello-world-wrap">
        <div>子组件count：{{ count }}</div>
        <button @click="add">+</button>
    </div>
</template>

<script lang="ts">
// doc https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({
    name: 'FirstPage',
    components: {},
})
export default class FirstPage extends Vue {
    @Prop({ default: 0 }) count!: number;

    created() {}
    mounted() {}

    @Emit('change')
    add() {
        return this.count + 1;
    }
}
</script>

<style lang="less" scoped></style>
