
<script setup lang="ts">
import {useSneakersStore} from "@/stores/sneakers.store";

const store = useSneakersStore();
function toggleDrawer() {
  store.isOpenCartDrawer = !store.isOpenCartDrawer;
}
</script>

<template>
  <div class="flex gap-5 items-center">
      <svg @click="toggleDrawer" class="opacity-30 transition hover:-translate-x-1 cursor-pointer rotate-180 hover:opacity-100" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7H14.7143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    <h2 class="text-2xl font-bold">
      Кошик
    </h2>
  </div>
</template>

