<template>
  <div class="lg:w-[50rem] h-full flex flex-col p-8 bg-slate-50">
    <div class="flex items-center justify-between">
      <span class="text-[#c12c7e]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.06 69" class="w-8">
          <g id="Layer_2" data-name="Layer 2">
            <g id="OBJECTS">
              <path fill="currentColor" class="cls-1" d="M55.06,25.25q0,12.84-7.49,18.8T24.7,50H17.05a2.05,2.05,0,0,0-2.05,2V67A2.05,2.05,0,0,1,13,69H2.05a2.05,2.05,0,0,1-2-2V58.77c.11-17.11,2.31-32.3,35.33-32.3-16.82,0-31.14-2.2-34.55-26A2,2,0,0,1,2.07,0H24.5q16,0,23.27,6.2T55.06,25.25Z" />
            </g>
          </g>
        </svg></span>
      <h1 class="text-xl text-center font-bold pb-3 flex-1">Understand your personality</h1>
    </div>
    <small class="italic text-center text-lg pb-3">Self-assesment</small>
    <div class="font-bold text-xl capitalize pb-3">5 questions</div>
    <div class="border-2 border-dashed border-gray-500 rounded-2xl px-4 py-12 bg-emerald-50 my-5 relative z-0">
      <span class="text-xl font-bold mb-3">About assesment</span>
      <p class="pt-3 font-medium text-lg">It is a potential analysis framework specially designed to identify identification or personality type or persona someone's archetype</p>
      <span class="p-2 rounded-full bg-black absolute bottom-2 left-12 z-10"></span>
      <span class="p-2 rounded-full bg-black absolute bottom-2 right-12 z-10"></span>
    </div>
    <div class="border-2 border-dashed border-gray-500 rounded-2xl px-4 py-12 bg-orange-50 my-5 relative">
      <span class="text-xl font-bold mb-3">Instruction</span>
      <p class="pt-3 font-medium text-lg">
        <span>There is no right or wrong answer choose the answer according to you</span>
        <span>Answer questions as you are</span>
      </p>
      <span class="p-2 rounded-full bg-black absolute top-2 left-14 z-10"></span>
      <span class="p-2 rounded-full bg-black absolute top-2 right-14 z-10"></span>
      <span class="linked__line linked__right_line rounded-full absolute z-10"></span>
      <span class=" linked__line linked__left_line rounded-full absolute z-10"></span>

    </div>
    <button class="text-center rounded-full bg-pink-900 py-4 lg:py-6 text-white text-lg lg:text-2xl lg:font-semibold capitalize font-medium border-4 border-black my-6" @click="$emit('handleClick')">Start test</button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.linked__line {
  height: 4.7rem;
  background: #fff;
  border: 1px solid;
  padding: 0 0.2rem;
}

.linked__right_line {
  transform: rotate(6deg);
  top: -3.75rem;
  right: 3.5rem;
}

.linked__left_line {
  transform: rotate(-6deg);
  top: -3.75rem;
  left: 3.5rem;

}
</style>