<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Welcome!</h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p class="font-semibold text-lg mt-1">Counter: {{ counter }}</p>
    <button
      @click="counter++"
      class="font-medium text-lg bg-green-700 p-3 rounded-full cursor-pointer mt-1"
    >
      +1
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
</script>
