

<script setup lang="ts">
import type {SneakerType} from "@/types.ts";
import {useSneakersStore} from "@/stores/sneakers.store";

defineProps<{
  Sneaker?: SneakerType
}>()
const store = useSneakersStore()
</script>

<template>
<div v-if="Sneaker">
  <div class="flex h-80 flex-col m-4 p-8 border-slate-100 transition shadow-xl hover:shadow-[0_0_20px_theme(colors.green.300)] hover:-translate-y-2 relative border rounded-3xl">
    <button class="rounded-2 p-0 border-none outline-none cursor-pointer" @click="store.update(Sneaker.id, !Sneaker.is_favorite, 'is_favorite')">
      <img class="absolute top-4 left-4" :src="Sneaker.is_favorite ? '/like-2.svg' : '/like-1.svg'" alt="like-icon">
    </button>
    <img class="w-40"
         :src="Sneaker.image"
         :alt="Sneaker.label">
    <span class="">{{Sneaker.label}}</span>
    <div class="flex items-end justify-between mt-auto">
      <div class="flex flex-col">
        <span class="text-slate-400">Ціна</span>
        <b>{{ Sneaker.price }} ₴</b>
      </div>
      <button
          class="rounded-2 p-0 border-none cursor-pointer outline-none"
          @click="store.update(Sneaker.id, !Sneaker.is_added, 'is_added')">
        <img
            class="w-8 shadow-2xl "
            :src="Sneaker.is_added ? '/checked.svg' : '/plus.svg'"
            alt="plus"
        >
      </button>
    </div>
  </div>
</div>
</template>
