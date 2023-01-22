<template lang="">
    <div class="p-8 bg-slate-50">
        <h1 class="text-center pb-6 capitalize text-xl font-semibold lg:text-3xl">test results</h1>
        <div class="border-[.2rem] border-gray-600 rounded-3xl p-6 py-8 mb-6 relative">
            <p class="font-semibold text-lg">{{ results_text }}</p>
            <span class="p-2 rounded-full bg-black absolute bottom-2 right-[10.7rem] md:right-[17em]"></span>
        </div>
        <div class="border-[.2rem] border-gray-600 rounded-3xl p-6 py-8 mb-6 relative -rotate-3 flex flex-row-reverse items-center justify-between">
            <div class="single-chart w-[52%] lg:w-[35%]">
                <svg viewBox="0 0 36 36" class="circular-chart green">
                    <path class="circle-bg stroke-green" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle" :stroke-dasharray="`${type_percentage.introvert}, 100`" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <text x="18" y="20.35" class="percentage">{{ type_percentage.introvert }}%</text>
                </svg>
            </div>
            <p class="font-semibold text-xl md:text-3xl capitalize">introvert</p>
            <span class="p-2 rounded-full bg-black absolute top-5 right-[10.5rem] md:right-[16.6rem] z-10"></span>
            <span class="p-2 rounded-full bg-black absolute bottom-2 right-[10.6rem] md:right-[16.9rem]"></span>
            <span class="linked__line linked__center_line left-[9rem] md:left-[15rem] rounded-full absolute z-20 top-[2.8rem]"></span>
        </div>
        <div class="border-[.2rem] border-gray-600 rounded-3xl p-6 py-8 mb-6 relative flex items-center justify-between">
            <div class="single-chart  w-[52%] lg:w-[35%]">
                <svg viewBox="0 0 36 36" class="circular-chart text-orange-300">
                    <path class="circle-bg stroke-orange" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle" stroke="currentColor" :stroke-dasharray="`${type_percentage.extrovert}, 100`" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <text x="18" y="20.35" class="percentage">{{ type_percentage.extrovert }}%</text>
                </svg>
            </div>
            <!-- <div class="border-[.6rem] border-orange-100 p-8 px-9 rounded-full relative after:absolute after:border-[.6rem] after:bg-red-500 after:top-0 after:left-0 after:rounded-full after:w-[30%]">{{type_percentage.extrovert}}</div> -->
            <p class="font-semibold text-xl md:text-3xl capitalize px-2">extrovert</p>
            <span class="p-2 rounded-full bg-black absolute top-4 left-[8.7rem] md:left-[14.7rem] z-10"></span>
            <span class="p-2 rounded-full bg-black absolute bottom-2 left-16 z-10"></span>
            <span class="p-2 rounded-full bg-black absolute bottom-2 right-16 z-10"></span>
            <span class="linked__line linked__center_line left-[9rem] md:left-[15rem] rounded-full absolute z-10"></span>
        </div>
        <div class="flex items-center justify-between border-[.2rem] border-black rounded-full p-2 relative">
            <button class="border-[.2rem] capitalize border-black rounded-full py-5 text-white font-semibold w-full bg-pink-900" @click="$emit('handleReset')">Retake test</button>
            <span class="p-2 rounded-full bg-black absolute top-4 left-10 z-10"></span>
            <span class="p-2 rounded-full bg-black absolute top-4 right-10 z-10"></span>
            <span class="linked__line linked__right_line rounded-full absolute z-10"></span>
            <span class="linked__line linked__left_line rounded-full absolute z-10"></span>
        </div>
    </div>
</template>
<script setup>
import { defineProps, computed, onMounted, ref } from "vue";

//get props
const props = defineProps({ test_results: Object });
const { test_results } = props;
const personality_type = ref(null);
const type_percentage = ref({
    introvert: 0,
    extrovert: 0,
});

onMounted(() => {
    calcTestPercentage();
});

//return readable test to user depending has which personality type has hight percentage
const results_text = computed(() => {
    return `You are more of a public ${personality_type.value} and private ${personality_type.value != "extrovert" ? "extrovert" : "introvert"}`;
});

//calculate results test percentage
const calcTestPercentage = () => {
    personality_type.value = test_results.introvert > test_results.extrovert ? "introvert" : "extrovert";
    type_percentage.value.introvert = (test_results.introvert * 100) / 200;
    type_percentage.value.extrovert = (test_results.extrovert * 100) / 200;
};
</script>
<style scoped>
.linked__line {
    height: 4.7rem;
    background: #fff;
    border: 1px solid;
    padding: 0 0.2rem;
    top: -3rem;
}

.linked__right_line {
    transform: rotate(-18deg);
    right: 3.5rem;
}

.linked__left_line {
    transform: rotate(19deg);
    left: 3.5rem;
}

.linked__center_line {
    transform: rotate(2deg);
}

/* ceercle percentage  */
.flex-wrapper {
    display: flex;
    flex-flow: row nowrap;
}

.single-chart {
    /* width: 52%; */
    justify-content: space-around;
}

.circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
}

.circle-bg {
    fill: none;
    /* stroke: #eee; */
    stroke-width: 3.8;
}
.stroke-green { stroke : #f0fdf4}
.stroke-orange { stroke : #ffedd5}
.circle {
    fill: none;
    stroke-width: 3.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
}

@keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
}

.circular-chart.green .circle {
    stroke: #4cc790;
}

.percentage {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
}
</style>
