<script setup lang="ts">
import { useSneakersStore } from "@/stores/sneakers.store";

const store = useSneakersStore();

defineProps({
  id: Number,
  label: String,
  image: String,
  price: Number,
  is_added: Boolean,
  is_favorite: Boolean,
  icon:String
});

const { update } = store;
</script>

<template>
  <div class="flex justify-between w-[27vw] gap-4 items-center border opacity-100 border-slate-200 p-4 rounded-xl">
    <img class="w-20" :src="image" :alt="label" />
    <div class="flex flex-col">
      <p class="whitespace-normal break-words">{{ label }}</p>
      <div class="flex justify-between mt-2 items-center">
        <b>{{ price }} ₴</b>
        <button @click="update(id, is_added, 'is_added');">
          <img
              class="w-8 opacity-40 hover:opacity-100 cursor-pointer transition duration-300"
              :src="icon"
              alt="Remove"
          />
        </button>
      </div>
    </div>
  </div>
</template>
