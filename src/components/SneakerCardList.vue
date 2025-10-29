
<script setup lang="ts">
import {ref} from "vue";
import type {SneakerType} from "@/types.ts";
import SneakerCard from "@/components/SneakerCard.vue";

const sneakerItems = ref<SneakerType[]>([
  {
    label:'Чоловічі кросівки Nike Blazer Mid Suede',
    image:'/sneakers/sneakers-1.jpg',
    alternative:'Чоловічі кросівки Nike Blazer Mid Suede',
    price:1000,
  },
  {
    label:'Чоловічі кросівки Nike Air Max 270',
    image:'/sneakers/sneakers-2.jpg',
    alternative:'Чоловічі кросівки Nike Air Max 270',
    price:890,
  },
  {
    label:'Чоловічі кросівки Nike Blazer Mid Suede',
    image:'/sneakers/sneakers-3.jpg',
    alternative:'Чоловічі кросівки Nike Blazer Mid Suede',
    price:930,
  },
  {
    label:'Кроссовки Puma X Aka Boku Future Rider',
    image:'/sneakers/sneakers-4.jpg',
    alternative:'Кроссовки Puma X Aka Boku Future Rider',
    price:2000,
  },
  {
    label:'Чоловічі кросівки Under Armour Curry 8',
    image:'/sneakers/sneakers-5.jpg',
    alternative:'Чоловічі кросівки Under Armour Curry 8',
    price:1070,
  },
  {
    label:'Чоловічі кросівки Nike Kyrie 7',
    image:'/sneakers/sneakers-6.jpg',
    alternative:'Чоловічі кросівки Nike Kyrie 7',
    price:970,
  },
  {
    label:'Чоловічі кросівки Jordan Air Jordan 11',
    image:'/sneakers/sneakers-7.jpg',
    alternative:'Чоловічі кросівки Jordan Air Jordan 11',
    price:5200,
  },
  {
    label:'Чоловічі кросівки Nike LeBron XVIII',
    image:'/sneakers/sneakers-8.jpg',
    alternative:'Чоловічі кросівки Nike LeBron XVIII',
    price:690,
  },
  {
    label:'Чоловічі кросівки Nike Lebron XVIII Low',
    image:'/sneakers/sneakers-9.jpg',
    alternative:'Чоловічі кросівки Nike Lebron XVIII Low',
    price:2010,
  },
  {
    label:'Чоловічі кросівки Nike Blazer Mid Suede',
    image:'/sneakers/sneakers-10.jpg',
    alternative:'Чоловічі кросівки Nike Blazer Mid Suede',
    price:2000,
  },
  {
    label:'Кроссовки Puma X Aka Boku Future Rider',
    image:'/sneakers/sneakers-11.jpg',
    alternative:'Кроссовки Puma X Aka Boku Future Rider',
    price:1050,
  },
  {
    label:'Чоловічі кросівки Nike Kyrie Flytrap IV',
    image:'/sneakers/sneakers-12.jpg',
    alternative:'Чоловічі кросівки Nike Kyrie Flytrap IV',
    price:2080,
  },
])
</script>

<template>
  <div class="bg-white grid justify-items-center items-center xs:grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
    <SneakerCard
        v-for="(sneaker, i) of sneakerItems"
        :key="i"
        :Sneaker="sneaker"
    />
  </div>

</template>





<style scoped>

</style>