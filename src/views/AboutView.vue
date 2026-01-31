<template>
  <section class="mx-auto max-w-4xl p-6 space-y-6">
    <header class="space-y-2">
      <h1 class="text-3xl font-bold">About</h1>
      <p class="text-gray-600">
        Este proyecto es una práctica para construir una interfaz en Vue 3 aplicando DTOs,
        modelos de dominio, servicios y Pinia con persistencia.
      </p>
    </header>

    <div class="rounded-xl border p-6 space-y-3">
      <h2 class="text-xl font-semibold">Características actuales</h2>
      <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
        <li>Vue 3 + Vite + TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Vue Router (Home / Products / About / 404)</li>
        <li>Pinia con persistencia</li>
        <li>Consumo de API externa (Fake Store API)</li>
        <li>Arquitectura DTO → Model → Store → UI</li>
      </ul>
    </div>

    <div class="rounded-xl border p-6 space-y-3">
      <h2 class="text-xl font-semibold">API</h2>
      <p class="text-sm text-gray-700">
        Se utiliza la Fake Store API para simular un flujo de e-commerce (listado de productos y
        posteriormente POST de compra/carrito).
      </p>

      <div class="text-sm text-gray-700 space-y-1">
        <div><span class="font-semibold">GET</span> /products</div>
        <div><span class="font-semibold">POST</span> /carts</div>
      </div>
    </div>
  </section>
</template>
