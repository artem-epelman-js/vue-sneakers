<script setup lang="ts">

import SneakerCardList from "@/components/SneakerCardList.vue";
import {ref, watch} from "vue";
import {useSneakersStore} from "@/stores/sneakers.store";

const store = useSneakersStore();
const sortBy = ref("id");
const search = ref("");
const minPrice = ref<number | null>(null);
const maxPrice = ref<number | null>(null);

watch([sortBy, search, minPrice, maxPrice], () => {
  let sortField = "id";
  let ascending = true;

  switch (sortBy.value) {
    case "price_asc": sortField = "price"; ascending = true; break;
    case "price_desc": sortField = "price"; ascending = false; break;
    case "label_asc": sortField = "label"; ascending = true; break;
    case "label_desc": sortField = "label"; ascending = false; break;
  }

  store.getAll({
    sort_by: sortField,
    ascending,
    search: search.value || undefined,
    min_price: minPrice.value || undefined,
    max_price: maxPrice.value || undefined,
  });
}, { immediate: true });
</script>

<template>
    <div class="flex flex-col lg:flex-row justify-end relative">
      <span class="flex flex-1 ml-5 mt-5 text-2xl font-bold">Всi кросівки</span>
      <select v-model="sortBy"
              class="w-100% h-7 px-2 m-5 border border-gray-200 outline-none rounded-lg">
        <option value="id">За замовчуванням (ID)</option>
        <option value="price_asc">Від дешевших до дорожчих</option>
        <option value="price_desc">Від дорожчих до дешевших</option>
        <option value="label_asc">За назвою (A–Z)</option>
        <option value="label_desc">За назвою (Z–A)</option>
      </select>

      <img class="absolute active:hidden right-58 top-6" src="/search.svg" alt="search" />
      <input v-model="search"
             class="border border-gray-200 m-5 rounded-lg px-7 outline-none focus:border-gray-400"
             placeholder="Пошук..." type="text" />
    </div>
    <div>
      <SneakerCardList class="transition-all duration-500 ease-in-out transform" />
    </div>
</template>