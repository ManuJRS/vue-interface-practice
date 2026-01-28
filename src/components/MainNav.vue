<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
  <nav class="border-b bg-white">
    <div class="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
      <RouterLink to="/">
        <h1 class="text-lg font-bold">Vue Interface Practice</h1>
      </RouterLink>

      <ul class="flex gap-4 text-sm">
        <li>
          <RouterLink to="/products" class="text-gray-600 hover:text-black" active-class="font-semibold text-black">
            Products
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
