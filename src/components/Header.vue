
<script setup>

import HeaderLi from "@/components/HeaderLi.vue";
</script>

<template>

    <header class="flex items-end sm:flex-row sm:justify-between px-8 py-8 border-b border-slate-300">
      <!--     header left side-->
      <div class="flex items-center gap-4">
        <img class="w-10" src="/logo.png" alt="Logo"/>
        <div>
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-400">Магазин найкращих кросівок</p>
        </div>
      </div>
      <!--     header right side-->
      <ul class="flex gap-y-4 flex-col md:flex-row items-center justify-center gap-y-3 gap-x-5">
        <HeaderLi alternative="cart-icon" description="1000₴" source="/cart.svg"/>
        <HeaderLi alternative="heart-icon" description="Обране" source="/heart.svg"/>
        <HeaderLi alternative="profile-icon" description="Профіль" source="/profile.svg"/>
      </ul>
    </header>

</template>





<style scoped>

</style>