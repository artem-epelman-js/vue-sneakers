

<script setup lang="ts">


import type {SneakerType} from "@/types.ts";

defineProps<{
  Sneaker?: SneakerType
}>()
</script>

<template>
<div v-if="Sneaker">
  <div class="flex w-30vw h-80 flex-col m-4 p-8 cursor-pointer border-slate-100 transition hover:shadow-xl hover:-translate-y-2 relative border rounded-3xl rounded-lg">
    <img class="absolute top-4 left-4" src="/like-2.svg" alt="Like 2">
    <img class="w-40" :src="Sneaker.image" :alt="Sneaker.alternative">
    <span>{{Sneaker.label}}</span>
    <div class="flex items-end justify-between mt-auto">
      <div class="flex flex-col">
        <span class="text-slate-400">Ціна</span>
        <b>{{ Sneaker.price }} ₴</b>
      </div>
      <img class="w-8" src="/plus.svg" alt="plus">
    </div>
  </div>
</div>

</template>


<style scoped>

</style>