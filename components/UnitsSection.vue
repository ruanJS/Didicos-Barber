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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <div
          v-for="unit in units"
          :key="unit.id"
          class="relative rounded-xl overflow-hidden shadow-lg max-w-xl "
        >
          <img
            :src="unit.image"
            :alt="unit.name"
            class="w-full h-130 object-cover"
          />
          <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-10 py-3 rounded text-center"
          >
            <p class="font-semibold">{{ unit.address }}</p>
            <p class="text-xs">{{ unit.name }}</p>
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
