<script setup lang="ts">
import Header from "@/components/Header.vue";
import Drawer from "@/components/Drawer.vue";
import { useSneakersStore } from "@/stores/sneakers.store";
import {onMounted} from "vue";

const store = useSneakersStore();
onMounted(async () => {
  await store.getAll()
})

</script>
<template>
  <div :class="{ 'overflow-hidden h-screen': store.isOpenCartDrawer }">
    <Drawer v-if="store.isOpenCartDrawer"/>
  <div class="w-4/5 mt-14 shadow-xl rounded-xl bg-white m-auto relative z-10">
    <Header/>
    <router-view></router-view>
  </div>
  </div>
</template>
