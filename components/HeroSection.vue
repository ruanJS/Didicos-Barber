<template>
  <section id="inicio" class="relative h-screen overflow-hidden">
    <!-- Carousel Background -->
    <div class="absolute inset-0">
      <Transition name="carousel-fade" mode="out-in">
        <img
          :key="currentSlide"
          :src="slides[currentSlide].image"
          :alt="slides[currentSlide].alt"
          class="w-full h-full object-cover"
        />
      </Transition>
      <!-- Overlay escura -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Conteúdo -->
    <div class="relative z-10 h-full flex items-center">
      <div class="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        <div class="max-w-2xl">
          <h1 class="text-3xl lg:text-6xl font-light text-white mb-6 font-source leading-tight">
            SÓ QUEM SE ARRISCA MERECE VIVER O EXTRAORDINÁRIO
          </h1>
          <p class="text-lg lg:text-xl text-white mb-8 font-light">
            Horário de funcionamento: 09:00 às 19:00
          </p>
          <UButton
            color="gray"
            variant="outline"
            size="lg"
            class="border border-gray-400 hover:bg-gray-700 px-12 py-3 cursor-pointer"
            @click="openBookingModal"
          >
            Agendar horário
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentSlide = ref(0)

const slides = [
  { image: '/img/img-style-1.png', alt: 'Slide 1' },
  { image: '/img/img-style-2.png', alt: 'Slide 2' },
  { image: '/img/img-style-3.png', alt: 'Slide 3' }
]

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})

const openBookingModal = () => {
  const event = new CustomEvent('open-booking-modal')
  window.dispatchEvent(event)
}
</script>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 1s ease;
}
.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}
</style>
