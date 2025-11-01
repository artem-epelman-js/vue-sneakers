<script setup lang="ts">
import HeaderLi from "@/components/HeaderLi.vue";
import {useSneakersStore} from "@/stores/sneakers.store";

const store = useSneakersStore();
function toggleDrawer() {
  store.isOpenCartDrawer = !store.isOpenCartDrawer;
  console.log(store.isOpenCartDrawer);
}
</script>

<template>
  <header class="flex items-end sm:flex-row justify-between px-8 py-8 border-b border-slate-300">
    <router-link to="/">
    <div class="flex translate-x-[-20px] items-center gap-4">
      <img class="w-10" src="/logo.png" alt="Logo"/>
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-400">Магазин найкращих кросівок</p>
      </div>
    </div>
    </router-link>

    <ul class="flex gap-y-4 flex-col md:flex-row items-center justify-center gap-y-3 gap-x-5">
      <HeaderLi
          @click="toggleDrawer"
          alternative="cart-icon"
          description="Кошик"
          source="/cart.svg"/>

      <router-link to="/favorites">
        <HeaderLi alternative="heart-icon"
                  description="Обране"
                  source="/heart.svg"/>
      </router-link>

      <router-link to="/orders">
        <HeaderLi alternative="profile-icon"
                  description="Замовлення"
                  source="/profile.svg"/>
      </router-link>
    </ul>
  </header>
</template>
