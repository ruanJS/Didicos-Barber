<template>
  <section id="unidade" class="relative bg-[#E0E0E0] py-35 overflow-hidden">
    <!-- Conteúdo -->
    <div class="relative container mx-auto px-4">
      <!-- Título -->
      <div class="text-center mb-12">
        <h2 class="text-6xl lg:text-8xl md:text-5xl font-anton font-bold uppercase text-black font-anton">
          CONHEÇA NOSSAS UNIDADES
        </h2>
      </div>

      <!-- Grid de Unidades -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 place-items-center">
        <div
          v-for="unit in units"
          :key="unit.id"
          class="relative rounded-xl overflow-hidden shadow-lg w-full max-w-md"
        >
          <img
            :src="unit.image"
            :alt="unit.name"
            class="w-full h-120 object-cover"
          />
          <div
            class="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-6 text-center"
          >
            <p class="font-semibold text-sm md:text-base">{{ unit.address }}</p>
            <p class="text-xs md:text-sm opacity-80">{{ unit.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const units = [
  {
    id: 1,
    name: 'Embu Guaçu - Centro',
    image: '/img/unidade-embu.png',
    address: 'Rua Independência, 90',
  },
  {
    id: 2,
    name: 'Portal Morumbi - São Paulo',
    image: '/img/unidade-morumbi.png',
    address: 'Avenida Doutor Guilherme Dumont Vilares, 1147',
  }
]
</script>
