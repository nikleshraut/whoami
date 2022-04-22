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
        const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        setInterval(() => {
            this.count = alphabet[Math.floor(Math.random() * 25) + 1];
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
