<template>
  <main class="h-screen bg-white px-6">
    <div class="flex flex-col justify-center items-center h-screen">
      <img src="../assets/imgs/maintenance.png" class="w-[600px]" alt="" />
      <h1
        class="mt-4 text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
      >
        Coming Soon New.!
      </h1>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <p class="text-3xl text-green-500 font-medium">{{ days }}d</p>
        <p class="text-3xl text-green-500 font-medium">{{ hours }}h</p>
        <p class="text-3xl text-green-500 font-medium">{{ minutes }}m</p>
        <p class="text-3xl text-green-500 font-medium">{{ seconds }}s</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCountdown } from "@/composables/useCountdown";

useHead({
  title: "Coming Soon | TradeOne",
  link: [{ rel: "icon", type: "image/png", href: "/assets/imgs/favicon.png" }],
});

definePageMeta({
  layout: "error",
  title: "Coming Soon | TradeOne",
});

const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 3);
const { days, hours, minutes, seconds } = useCountdown(targetDate);
</script>
