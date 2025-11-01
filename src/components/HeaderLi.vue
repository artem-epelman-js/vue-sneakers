<script setup lang="ts">

import {ref} from "vue";

defineProps({
  source:String,
  alternative:String,
  description:String,
})
</script>

<template>
  <li class="flex items-center text-gray-500 hover:text-black cursor-pointer gap-3">
    <img :src=source :alt=alternative>
    <b>{{description}}</b>
  </li>
</template>
