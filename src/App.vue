
<template>
  <div class="container font-sans flex items-center justify-center">
    <landingScreen v-if="active_screen==1" @handleClick="updateActiveScreen(2)"/>
    <TestScreen v-else-if="active_screen==2" @handlePrevClick="updateActiveScreen(1)" @handleSubmit="submit"/>
    <ResultsScreen v-else-if="active_screen==3  && test_results"  :test_results="test_results" @handleReset="updateActiveScreen(1)"/>
  </div>
</template>

<script setup>
import landingScreen from './Sections/LandingScreen.vue'
import TestScreen from './Sections/TestScreen.vue'
import ResultsScreen from './Sections/ResultsScreen.vue'
import { ref } from 'vue'

const active_screen = ref(1)
const test_results = ref(null)
const submit = (data) => {
  active_screen.value = 3
  test_results.value = data
}
const updateActiveScreen = (screen) => {
  active_screen.value = screen
}

</script>
