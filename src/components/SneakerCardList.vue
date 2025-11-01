
<script setup lang="ts">
import SneakerCard from "@/components/SneakerCard.vue";
import {storeToRefs} from "pinia";
import {useSneakersStore} from "@/stores/sneakers.store";
const { data } = storeToRefs(useSneakersStore())
</script>

<template>
  <div class="bg-white grid justify-items-center xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <SneakerCard
        v-for="sneaker in data"
        :key="sneaker.id"
        :Sneaker="sneaker"
    />
  </div>
</template>