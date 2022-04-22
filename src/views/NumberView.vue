<template>
    <el-row :gutter="20" class="h-100">
        <el-col :span="8" class="h-100"
            ><div class="grid-content bg-purple h-100"
        /></el-col>
        <el-col :span="8" class="h-100">
            <div class="random-number">{{ count }}</div>
        </el-col>
        <el-col :span="8" class="h-100"
            ><div class="grid-content bg-purple h-100"
        /></el-col>
    </el-row>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const count = ref('-');

        // expose to template and other options API hooks
        return {
            count,
        };
    },

    mounted() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        setInterval(() => {
            this.count = numbers[Math.floor(Math.random() * 9) + 1];
        }, 3000);
    },
};
</script>
<style scoped>
.random-number {
    text-align: center;
    font-size: 300px;
    --un-bg-opacity: 1;
    color: rgba(192, 132, 252, var(--un-bg-opacity));
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
