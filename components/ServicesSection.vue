<template>
  <section id="servicos" class="bg-[#D9D9D9] py-30">
    <div class="container mx-auto px-4 lg:px-48">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-6xl lg:text-8xl font-anton font-bold uppercase text-black mb-6">
          SERVIÇOS
        </h2>
        <p class="text-black text-lg max-w-2xl mx-auto">
          Conheça nossos serviços e agende seu horário para um atendimento exclusivo.
        </p>
      </div>

      <!-- Services Carousel -->
      <div class="relative">
        <!-- Navigation Buttons -->
        <UButton
          v-if="canScrollLeft"
          variant="ghost"
          color="gray"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-5 bg-white/70 hover:bg-white text-black rounded-full w-12 h-12 shadow-md flex items-center justify-center cursor-pointer"
          @click="scrollLeft"
        >
          <ChevronLeft class="h-6 w-6" />
        </UButton>

        <UButton
          v-if="canScrollRight"
          variant="ghost"
          color="gray"
          class="absolute right-5 top-1/2 -translate-y-1/2 z-5 bg-white/70 hover:bg-white text-black rounded-full w-12 h-12 shadow-md flex items-center justify-center cursor-pointer"
          @click="scrollRight"
        >
          <ChevronRight class="h-6 w-6" />
        </UButton>

        <!-- Services Scrollable Area -->
        <div
          ref="servicesContainer"
          class="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-1"
          @scroll="updateScrollButtons"
        >
          <div
            v-for="service in services"
            :key="service.id"
            class="flex-shrink-0 w-[280px] sm:w-[350px] bg-white rounded-b-lg shadow-md overflow-hidden transition hover:scale-[1.01]"
          >
            <img
              :src="service.image"
              :alt="service.name"
              class="w-full h-auto object-cover"
            />
            <div class="flex justify-between items-center px-4 py-3">
              <h3 class="text-base font-semibold text-black">{{ service.name }}</h3>
              <span class="bg-[#1E1E1E] text-white text-sm font-medium px-3 py-1 rounded-md">
                {{ service.price }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const servicesContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const services = [
  { id: 1, name: 'Corte de cabelo', price: 'R$ 55,90', image: '/img/cabelo.png' },
  { id: 2, name: 'Corte completo', price: 'R$ 75,90', image: '/img/corte-completo.png' },
  { id: 3, name: 'Corte & Barba', price: 'R$ 85,90', image: '/img/corte&barba.png' },
  { id: 4, name: 'Barba', price: 'R$ 45,90', image: '/img/barba.png' },
  { id: 5, name: 'Platinado', price: 'R$ 150,00', image: '/img/barba.png' },
  { id: 6, name: 'Luzes', price: 'R$ 100,00', image: '/img/barba.png' },
  { id: 7, name: 'Barboterapia', price: 'R$ 100,00', image: '/img/barba.png' },
  { id: 8, name: 'Limpeza de Pele', price: 'R$ 30,00', image: '/img/barba.png' }
]

const scrollLeft = () => {
  servicesContainer.value?.scrollBy({ left: -320, behavior: 'smooth' })
}
const scrollRight = () => {
  servicesContainer.value?.scrollBy({ left: 320, behavior: 'smooth' })
}
const updateScrollButtons = () => {
  if (!servicesContainer.value) return
  const { scrollLeft, scrollWidth, clientWidth } = servicesContainer.value
  canScrollLeft.value = scrollLeft > 0
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 10
}

onMounted(() => {
  updateScrollButtons()
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>