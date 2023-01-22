<template>
    <div v-if="question" class="p-8 w-[50%] bg-slate-50">
        <div class="flex items-center justify-between pb-10">
            <span class="border-2 border-black p-2 rounded-full bg-emerald-200" @click="$emit('handlePrevClick')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg></span>
                <span class="text-[#c12c7e]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.06 69" class="w-8">
          <g id="Layer_2" data-name="Layer 2">
            <g id="OBJECTS">
              <path fill="currentColor" class="cls-1" d="M55.06,25.25q0,12.84-7.49,18.8T24.7,50H17.05a2.05,2.05,0,0,0-2.05,2V67A2.05,2.05,0,0,1,13,69H2.05a2.05,2.05,0,0,1-2-2V58.77c.11-17.11,2.31-32.3,35.33-32.3-16.82,0-31.14-2.2-34.55-26A2,2,0,0,1,2.07,0H24.5q16,0,23.27,6.2T55.06,25.25Z" />
            </g>
          </g>
        </svg></span>
        </div>
        <div class="w-full p-2 border-2 border-black rounded-full mb-6 relative after:absolute after:bg-orange-600 after:left-0 after:p-2 after:top-0 after:rounded-full after:border-r-2 after:border-black" :class="progressPercentageClass"></div>
        <div class="flex items-center justify-between text-gray-700 text-sm mb-6">
            <span>Come onn it's half way</span>
            <span>{{ `${active_question + 1}/5` }} Questions</span>
        </div>
        <div class="border-2 border-gray-600 rounded-3xl p-6 mb-6">
            <h2 class="font-bold text-lg ">{{ question.question }}</h2>
            <ul class="py-4">
                <li v-for="(option, index) in question.options" :key="option.id" class="border-2 border-gray-600 p-4 cursor-pointer rounded-xl flex items-center justify-between mb-4" :class="{ 'bg-blue-50': question.selected_question && option.id == question.selected_question.id }" @click="select(option)">
                    <span class="border-2 border-gray-600 rounded-lg py-1 px-3 font-semibold" :class="{ 'bg-red-400': question.selected_question && option.id == question.selected_question.id }">{{ options_char[index] }}</span>
                    <p class="font-semibold px-2">{{ option.text }}</p>
                    <span class="border-2 border-black p-1 rounded-full " :class="{ 'bg-green-500': question.selected_question && option.id == question.selected_question.id }"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg></span>
                </li>
            </ul>
        </div>
        <div class="flex items-center justify-between ">
            <button v-if="active_question > 0" class="border-2 capitalize border-black rounded-full py-3 bg-gray-200 w-40 text-black font-semibold" @click="prev">previous</button>
            <button class="border-2 capitalize border-black rounded-full py-3  text-white font-semibold" :class="`${active_question > 0 ? 'w-40' : 'w-full lg:py-5 lg:text-xl'} ${question.selected_question ? 'bg-pink-900' : 'bg-gray-400'}`" @click="next" :disabled="!question.selected_question">{{ active_question == questions.length - 1 ? 'Submit' : 'Next question'}}</button>
        </div>

    </div>
</template>
<script setup>
import { ref, onMounted, computed, defineEmits } from 'vue'
import axios from 'axios'

//ref variables
const selected_option = ref(null)
const questions = ref(null)
const active_question = ref(0)
const progressValue = ref(20)
const results = ref({
    introvert: 0,
    extrovert: 0
})
const options_char = ref({
    0: "A",
    1: "B",
    2: "C",
    3: "D",
})
const emit = defineEmits()

onMounted(() => {
    fetchQuestion()
})

//get active question 
const question = computed(() => {
    if (questions.value && questions.value.length > 0) return questions.value[active_question.value]
    return null
})

const progressPercentageClass = computed(()=>{return `after:w-[${progressValue.value}%]`})

//go to next question
const next = () => {
    if (active_question.value < 4) {
        active_question.value++;
        progressValue.value += 20

        //calc personality type score
        const { introvert, extrovert } = selected_option.value
        results.value.introvert += introvert
        results.value.extrovert += extrovert
    }
    else emit('handleSubmit', results.value)
}

//return previous question
const prev = () => {
    active_question.value--
    progressValue.value -= 20

    const { introvert, extrovert } = selected_option.value
    results.value.introvert -= introvert
    results.value.extrovert -= extrovert
}

//get selected answer id and save it
const select = (option) => {
    selected_option.value = option
    questions.value[active_question.value].selected_question = option
}

//fetch all questions from api
const fetchQuestion = async () => {
    const { data } = await axios.get('http://localhost:3333/questions')
    if (data) questions.value = data
}
const reset = () => {
    selected_option.value = null
    questions.value = null
    active_question.value = 0
    progressValue.value = 20
    results.value = {
        introvert: 0,
        extrovert: 0
    }
}

</script>
<style lang="">
    
</style>