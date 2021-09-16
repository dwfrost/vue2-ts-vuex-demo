<template>
    <div class="hello-world-wrap">
        <div>子组件count：{{ count }}</div>
        <button @click="add">+</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({
    name: 'FirstPage',
    components: {},
})
export default class Home extends Vue {
    @Prop({ default: 0 }) count!: number;

    created() {}
    mounted() {}

    @Emit()
    add() {
        return this.count++;
    }
}
</script>

<style lang="less" scoped></style>
