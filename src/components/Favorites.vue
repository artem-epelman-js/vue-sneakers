<script setup lang="ts">
import {useSneakers} from "@/lists/sneakerLists";
import CartItem from "@/components/CartItem.vue";

const {clearFavorite, favoriteSneakers} = useSneakers()
</script>
<template>
  <div class="overflow-hidden pb-10">
    <div class="flex justify-between gap-5 px-10">
      <span class="flex ml-5 mt-5 mb-5 text-2xl font-bold">Обране</span>
      <button @click="clearFavorite"
              class="bg-lime-500 h-10 w-60 disabled:bg-slate-300 font-sans rounded-xl mt-4
                 text-white cursor-pointer hover:bg-lime-600 active:bg-lime-700 transition"
      >
        Очистити обране
      </button>
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div class="flex justify-between justify-center items-center" v-for="sneaker of favoriteSneakers">
        <CartItem
            :key="sneaker.id"
            :id="sneaker.id"
            :label="sneaker.label"
            :image="sneaker.image"
            :price="sneaker.price"
            :icon="'/plus.svg'"
        />
      </div>
    </div>
  </div>
</template>