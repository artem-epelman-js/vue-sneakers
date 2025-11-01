<script setup lang="ts">
import CartItem from "@/components/CartItem.vue";
import {useSneakers} from "@/lists/sneakerLists";

const {addedSneakers} = useSneakers()
</script>

<template>
  <div v-for="sneaker of addedSneakers" class="flex flex-col mt-5">
    <CartItem
        :key="sneaker.id"
        :id="sneaker.id"
        :label="sneaker.label"
        :image="sneaker.image"
        :price="sneaker.price"
        :icon="'/close.svg'"
    />
  </div>
</template>

