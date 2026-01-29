<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
  <section class="mx-auto max-w-4xl p-6 space-y-4">
    <h1 class="text-3xl font-bold">404</h1>
    <p class="text-gray-600">
      La página que estás buscando no existe.
    </p>

    <RouterLink to="/"
      class="inline-flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800">
      Volver a Home
    </RouterLink>
  </section>
</template>
