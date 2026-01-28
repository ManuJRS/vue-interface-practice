<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
  <section class="mx-auto max-w-4xl p-6 space-y-6">
    <header class="space-y-2">
      <h1 class="text-3xl font-bold">
        Vue Interface Practice
      </h1>

      <p class="text-gray-600">
        Proyecto de práctica para construir una interfaz en Vue 3 usando
        DTOs, modelos de dominio, servicios y Pinia.
      </p>
    </header>

    <div class="rounded-xl border p-6 space-y-4">
      <h2 class="text-xl font-semibold">
        ¿Qué puedes encontrar aquí?
      </h2>

      <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
        <li>Consumo de APIs externas</li>
        <li>Arquitectura DTO → Model → Store → UI</li>
        <li>Manejo de estado con Pinia</li>
        <li>Persistencia de datos</li>
        <li>Flujo tipo compra / reserva</li>
      </ul>
    </div>

    <div>
      <RouterLink to="/products"
        class="inline-flex items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800">
        Ver productos
      </RouterLink>
    </div>
  </section>
</template>
