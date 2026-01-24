<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <div class="p-6">
    <nav class="mb-6 flex gap-4">
      <RouterLink to="/products" class="underline">Products</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped></style>
