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
    <el-row class="mt-4">
        <el-col :span="8" class="h-100">
            <input id="answer" type="text" @keyup.enter="inputAnswer(true)" @keyup.space="inputAnswer(false)" />
        </el-col>
    </el-row>
    <el-row class="mt-4">
        <!-- <el-col :span="8" class="h-100"> -->
            <el-table :data="summary" style="width: 100%">
                <el-table-column prop="key" label="Word" width="180" />
                <el-table-column prop="correct" label="Correct Count" width="180" />
                <el-table-column label="Incorrect Count"><template #default="scope"><div class="text-danger">{{scope.row.incorrect}}</div></template></el-table-column>
            </el-table>
        <!-- </el-col> -->
    </el-row>

</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const randomString = ref('-');
        const baseAlphabets = ref(["What", "Where", "Which", "How", "This", "There"]);
        const baseVowels = ref(["'s"]);
        const alphabets = ref([]);
        const vowels = ref([]);
        const randomColor = ref(0);
        const summary = ref([]);
        return {
            randomString,
            baseAlphabets,
            baseVowels,
            alphabets,
            vowels,
            randomColor,
            summary,
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
            document.querySelector("#answer").focus();
            
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
            
        },
        inputAnswer(answer){
            const index = this.summary.findIndex(e=>e.key === this.randomString);
            if(index === -1){
                this.summary.push({key: this.randomString, correct: answer ? 1 : 0, incorrect: !answer ? 1 : 0});
            }
            if(answer) this.summary[index].correct += 1;
            else this.summary[index].incorrect += 1;
        }
    }
};
</script>
<style scoped>
.random-number {
    text-align: center;
    font-size: 100px;
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
.mt-4 {
    margin-top: 16px;
}
.text-danger {
    color: red;
}
</style>
