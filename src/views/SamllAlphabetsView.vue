<template>

    <el-row :gutter="20" class="mb-4">
        <el-col><span class="p-2 mr-1 border" :class="{'selected': alphabets.includes(i)}" v-for="i in baseAlphabets" @click="addAlphabet(i)">{{ i }}</span></el-col>
    </el-row>
    <el-row :gutter="20" class="mb-4">
        <el-col><span class="p-2 mr-1 border" :class="{'selected': vowels.includes(i)}" v-for="i in baseVowels" @click="addVowel(i)">{{ i }}</span></el-col>
    </el-row>

    <el-row :gutter="20" class="h-80">
        <el-col :span="8" class="h-100" @click="getRandomString"
            ><div class="grid-content bg-purple h-100"
        /></el-col>
        <el-col :span="8" class="h-100">
            <div class="random-number" :class="'random-number-color-' + randomColor">{{ randomString }}</div>
        </el-col>
        <el-col :span="8" class="h-100" @click="getRandomString"
            ><div class="grid-content bg-purple h-100"
        /></el-col>
    </el-row>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const randomString = ref('-');
        const baseAlphabets = ref(["क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","प","फ","ब","भ","म","य","र","ल","व","श","ष","स","ह"]);
        const baseVowels = ref(["ा","ि","ी","ु","ू","े","ै","ो","ौ"]);
        const alphabets = ref([]);
        const vowels = ref([]);
        const randomColor = ref(0);
        return {
            randomString,
            baseAlphabets,
            baseVowels,
            alphabets,
            vowels,
            randomColor,
        };
    },
    mounted() {
        // setInterval(() => {
        //     this.getRandomString();
        // }, 3000);
    },
    methods: {
        getRandomString() {
            let str = "";
            if(this.alphabets.length){
                const randomNumber = Math.floor(Math.random() * (this.alphabets.length));
                console.log({randomNumber});
                const alphabet = this.alphabets[randomNumber];
                // const index = this.alphabets.findIndex(e=>e==alphabet);
                // this.alphabets.splice(index,1);
                str = alphabet;
            }
            if(this.vowels.length){
                const randomNumber = Math.floor(Math.random() * (this.vowels.length));
                console.log({randomNumber});
                const vowel = this.vowels[randomNumber];
                str += vowel;
            }
            if(str == this.randomString){
                console.log(`duplicate found${str} == ${this.randomString}`);
                this.getRandomString();
            }else{
                this.randomString = str;
            }
            if(this.randomColor > 3) {
                this.randomColor = 0;
            } else {
                this.randomColor +=1;
            }
            
            
        },
        addAlphabet(str) {
            if(this.alphabets.includes(str)){
                const index = this.alphabets.findIndex(e=>e==str);
                this.alphabets.splice(index,1);
            }else{
                this.alphabets.push(str);
            }
        },
        addVowel(str) {
            if(this.vowels.includes(str)){
                const index = this.vowels.findIndex(e=>e==str);
                this.vowels.splice(index,1);
            }else{
                this.vowels.push(str);
            }
            
        }
    }
};
</script>
<style scoped>
.random-number {
    text-align: center;
    font-size: 200px;
    --un-bg-opacity: 1;
    color: rgb(192, 132, 252);
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-duration: 2s;
    animation-delay: 2s;
    transition-duration: 2s;
}
.random-number-color-0 {
    color: rgb(192, 132, 252);
}
.random-number-color-1 {
    color: rgb(132, 192, 252);
}
.random-number-color-2 {
    color: rgb(252, 192, 132);
}
.random-number-color-3 {
    color: rgb(132, 252, 192);
}
.random-number-color-4 {
    color: rgb(252, 132, 192);
}
.selected {
    background-color: rgb(192, 132, 252);
    color: #fff;
}
.p-2 {
    padding: 8px;
}
.mr-1 {
    margin-right: 4px;
}
.mb-4 {
    margin-bottom: 16px;
}
.border {
    border: 1px solid;
}
</style>
