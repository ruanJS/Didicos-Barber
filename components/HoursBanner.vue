<template>
  <section class="w-full overflow-hidden bg-gradient-to-b from-[#1C1C1C] to-[#2F2F2F] py-6">
    <!-- Unidade Portal Morumbi -->
    <div class="relative overflow-hidden whitespace-nowrap group">
      <div
        class="flex gap-12 animate-marquee-right-to-left"
      >
        <div v-for="i in 2" :key="'morumbi-' + i" class="flex gap-12">
          <p v-for="(text, index) in horariosMorumbi" :key="'morumbi-item-' + index"
            class="px-6 py-3 rounded-lg border border-[#3a3a3a] bg-[#212121] text-transparent font-medium text-sm md:text-base bg-gradient-to-r from-[#9f9f9f] via-white to-[#868686] bg-[length:200%_auto] bg-clip-text animate-shine whitespace-nowrap">
            {{ text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Unidade Embu-Guaçu -->
    <div class="relative overflow-hidden whitespace-nowrap group mt-4">
      <div
        class="flex gap-12 animate-marquee-left-to-right"
      >
        <div v-for="i in 2" :key="'embu-' + i" class="flex gap-12">
          <p v-for="(text, index) in horariosEmbu" :key="'embu-item-' + index"
            class="px-6 py-3 rounded-lg border border-[#3a3a3a] bg-[#212121] text-transparent font-medium text-sm md:text-base bg-gradient-to-r from-[#9f9f9f] via-white to-[#868686] bg-[length:200%_auto] bg-clip-text animate-shine whitespace-nowrap">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const horariosMorumbi = [
  'Unidade Portal Morumbi:',
  'Segunda a quarta: das 10h às 19h',
  'Quinta a sexta: das 10h às 20h',
  'Sábado: das 9h às 17h',
  'Domingo: Fechado'
]

const horariosEmbu = [
  'Unidade Embu-Guaçu:',
  'Segunda a sexta: das 9h às 19h',
  'Sábado: das 9h às 17h',
  'Domingo: Fechado'
]
</script>

<style scoped>
@keyframes marquee-right-to-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-left-to-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes shine {
  0% {
    background-position: -250px;
  }
  100% {
    background-position: 250px;
  }
}

/* Mais rápido e contínuo */
.animate-marquee-right-to-left {
  animation: marquee-right-to-left 25s linear infinite;
}

.animate-marquee-left-to-right {
  animation: marquee-left-to-right 25s linear infinite;
}

.animate-shine {
  animation: shine 4s linear infinite;
}

</style>
