<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/product.store';

const productStore = useProductStore()

onMounted(() => {
  if (!productStore.hasProducts) {
    productStore.loadProducts()
  }
})
</script>

<template>
  <div class="p-6 space-y-4">
    <h1 class="text-2xl font-bold">Products</h1>

    <div v-if="productStore.isLoading" class="text-sm">
      Cargando productos...
    </div>

    <div v-else-if="productStore.error" class="text-sm text-red-600">
      {{ productStore.error }}
    </div>

    <ul v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="product in productStore.products" :key="product.id" class="rounded-xl border p-4 space-y-3">
        <img :src="product.image" :alt="product.title" class="h-40 w-full object-contain" />

        <div class="space-y-1">
          <h2 class="font-semibold line-clamp-2">{{ product.title }}</h2>
          <p class="text-sm text-gray-600">{{ product.category }}</p>
          <p class="font-bold">{{ product.formattedPrice() }}</p>

          <p class="text-xs text-gray-500">
            Rating: {{ product.ratingRate }} ({{ product.rantingCount }} reviews)
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
