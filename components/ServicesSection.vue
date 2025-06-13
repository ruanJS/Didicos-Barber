<template>
  <section id="servicos" class="bg-barber-border-gray py-20">
    <div class="container mx-auto px-4 lg:px-48">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-6xl lg:text-8xl font-anton font-bold uppercase gradient-title-dark mb-6">
          SERVIÇOS
        </h2>
        <p class="text-barber-dark-gray text-lg max-w-2xl mx-auto">
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
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-white/80 text-white hover:text-black rounded-full w-16 h-16"
          @click="scrollLeft"
        >
          <ChevronLeft class="h-8 w-8" />
        </UButton>

        <UButton
          v-if="canScrollRight"
          variant="ghost"
          color="gray"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-white/80 text-white hover:text-black rounded-full w-16 h-16"
          @click="scrollRight"
        >
          <ChevronRight class="h-8 w-8" />
        </UButton>

        <!-- Services Grid -->
        <div 
          ref="servicesContainer"
          class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth lg:grid lg:grid-cols-3 lg:overflow-visible"
          @scroll="updateScrollButtons"
        >
          <div
            v-for="service in services"
            :key="service.id"
            class="flex-shrink-0 w-80 lg:w-auto bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              :src="service.image" 
              :alt="service.name"
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <div class="flex justify-between items-center">
                <h3 class="text-xl font-semibold text-barber-dark-gray">
                  {{ service.name }}
                </h3>
                <UButton
                  color="gray"
                  variant="solid"
                  class="bg-barber-background text-white hover:bg-barber-dark-gray"
                  @click="openBookingModal"
                >
                  {{ service.price }}
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const servicesContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const services = [
  { id: 1, name: 'Corte', price: 'R$ 30,00', image: '/img/cabelo.png' },
  { id: 2, name: 'Corte completo', price: 'R$ 75,90', image: '/img/corte-completo.png' },
  { id: 3, name: 'Corte & Barba', price: 'R$ 85,90', image: '/img/corte&barba.png' },
  { id: 4, name: 'Barba', price: 'R$ 45,90', image: '/img/barba.png' },
  { id: 5, name: 'Platinado', price: 'R$ 150,00', image: '/img/barba.png' },
  { id: 6, name: 'Luzes', price: 'R$ 100,00', image: '/img/barba.png' },
  { id: 7, name: 'Barboterapia', price: 'R$ 100,00', image: '/img/barba.png' },
  { id: 8, name: 'Limpeza de Pele', price: 'R$ 30,00', image: '/img/barba.png' }
]

const scrollLeft = () => {
  if (servicesContainer.value) {
    servicesContainer.value.scrollBy({ left: -320, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (servicesContainer.value) {
    servicesContainer.value.scrollBy({ left: 320, behavior: 'smooth' })
  }
}

const updateScrollButtons = () => {
  if (servicesContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = servicesContainer.value
    canScrollLeft.value = scrollLeft > 0
    canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 10
  }
}

const openBookingModal = () => {
  const event = new CustomEvent('open-booking-modal')
  window.dispatchEvent(event)
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