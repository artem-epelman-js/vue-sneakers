<script setup lang="ts">
import DrawerHead from "@/components/DrawerHead.vue";
import CartItemList from "@/components/CartItemList.vue";
import {useSneakers} from "@/lists/sneakerLists";
import {useSneakersStore} from "@/stores/sneakers.store";
import {ref} from "vue";

const {addedSneakers, sumSneakerInCart, addToPurchased, removeAddedSneakers} = useSneakers()
const store = useSneakersStore()
const buy = ref<boolean>(false)
</script>

<template>
  <div class="fixed inset-0 z-[9999] flex justify-end pointer-events-none">
    <div class="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"></div>
    <div
        class="relative z-10 bg-white flex flex-col w-[90vw] md:w-[35vw] h-full p-8
             shadow-2xl transition-transform duration-300 translate-x-0 pointer-events-auto">
      <DrawerHead :label="'Кошик'" />
      <div class="overflow-y-auto flex-1">
        <CartItemList />
      </div>
        <div v-if="addedSneakers.length" class="flex w-[28vw] bottom-10 flex-col gap-4 mt-6 p-5  rounded-xl  bg-slate-200 pt-4">
          <div class="flex gap-2">
            <span>Всього</span>
            <div class="flex-1 border-b border-dashed"></div>
            <p>{{ sumSneakerInCart }} ₴</p>
          </div>
          <div class="flex gap-2">
            <span>Доставка</span>
            <div class="flex-1 border-b border-dashed"></div>
            <p>{{sumSneakerInCart > 3000 ? 'Безкоштовно' : '100 ₴'}}</p>
          </div>
          <div>
            <button
                @click="buy = !buy; removeAddedSneakers(); addToPurchased()"
                class="bg-lime-500 w-full disabled:bg-slate-300 font-sans rounded-xl py-3 mt-2
                 text-white cursor-pointer hover:bg-lime-600 active:bg-lime-700 transition">
              Оформити замовлення
            </button>
          </div>
          <span class="text-xs text-slate-600">Доставка замовлень від 3000 ₴ - за наш рахунок :3</span>
        </div>
      <div v-else-if="!addedSneakers.length && !buy"  class="flex gap-y-4 mb-30 items-center flex-col">
        <img class="w-30" src="/package-icon.png" alt="package-icon">
        <p class="text-slate-400 text-center">Додайте хоча б одну пару кросівок щоб зробити замовлення.</p>
        <button @click="store.isOpenCartDrawer = false"
            class="bg-lime-500  w-full disabled:bg-slate-300 font-sans rounded-xl py-3 mt-2
                 text-white cursor-pointer hover:bg-lime-600 active:bg-lime-700 transition"
        >
          Повернутись до покупок
        </button>
      </div>
      <div v-else-if="buy"  class="flex gap-y-4 mb-30 items-center flex-col">
        <img class="w-30" src="/order-success-icon.png" alt="order-success-icon.png">
        <p class="text-slate-400 text-center">Ваше замовлення прийняте та вже готується до відправки!</p>
        <div class="flex gap-5 px-5 flex-col md:flex-row">
          <router-link
              to="/orders"><button
              @click="store.isOpenCartDrawer = false; buy = false"
              class="bg-lime-500 h-20 p-2 w-full md:w-[18vw] disabled:bg-slate-300 font-sans rounded-xl py-3 mt-2
                 text-white cursor-pointer hover:bg-lime-600 active:bg-lime-700 transition">
            Перейти до замовлень
          </button></router-link>
          <button @click="store.isOpenCartDrawer = false; buy = false"
                  class="bg-lime-500  w-full md:w-30 p-2 h-20 disabled:bg-slate-300 font-sans rounded-xl py-3 mt-2
                 text-white cursor-pointer hover:bg-lime-600 active:bg-lime-700 transition">
            Повернутись на головну
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
