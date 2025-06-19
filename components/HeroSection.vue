<template>
  <section id="inicio" class="relative h-screen overflow-hidden -mt-20 pt-20">
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
    <div class="relative z-5 h-full flex items-center">
      <div class="w-full px-6 md:px-25 lg:px-24 xl:px-32">
        <div class="max-w-2xl">
          <h1 class="text-4xl lg:text-6xl font-extralight text-white mb-6 font-source leading-tight">
            SÓ QUEM SE ARRISCA MERECE VIVER O EXTRAORDINÁRIO
          </h1>
          <p class="text-lg lg:text-xl text-gray-300 mb-2 font-extralight">
            Horário de funcionamento: 09:00 às 19:00
          </p>
          <UButton
            color="gray"
            variant="outline"
            size="lg"
            class="border border-gray-300 cursor-pointer text-gray-200 hover:text-gray-100 hover:bg-[#808080] transition-colors duration-200 px-12 py-3 "
            @click="abrirAgendar"
          >
            <span class="font-extralight">Agendar horário</span>
          </UButton>

          <teleport to="body">
            <AgendarModal :show="showAgendar" @update:show="showAgendar = $event" @next="abrirEditar" />
            <EditarModal :show="showEditar" :data="formData" @update:show="showEditar = $event" @next="abrirConcluido" @edit="voltarParaAgendar"/>
            <ModalConcluido :show="showConcluido" :formData="formData" @update:show="showConcluido = $event" />
          </teleport>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AgendarModal from '@/components/modals/AgendarModal.vue'
import EditarModal from '@/components/modals/EditarModal.vue'
import ModalConcluido from '@/components/modals/ModalConcluido.vue'

const showAgendar = ref(false)
const showEditar = ref(false)
const showConcluido = ref(false)
const formData = ref({})

const abrirAgendar = (_event) => { showAgendar.value = true }
const abrirEditar = (data) => {
  formData.value = data
  showEditar.value = true
}

const abrirConcluido = () => {
  showEditar.value = false
  showConcluido.value = true
  resetForm()
}

const voltarParaAgendar = () => {
  showEditar.value = false
  showAgendar.value = true
}

const resetForm = () => {
  formData.value = {}
}

const currentSlide = ref(0)

const slides = [
  { image: '/img/img-style-1.png', alt: 'Slide 1' },
  { image: '/img/img-style-2.png', alt: 'Slide 2' },
  { image: '/img/img-style-3.png', alt: 'Slide 3' }
]

watch([showAgendar, showEditar, showConcluido], ([ag, ed, co]) => {
  const body = document.body
  if (ag || ed || co) {
    body.classList.add('overflow-hidden')
  } else {
    body.classList.remove('overflow-hidden')
  }
})

onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})

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