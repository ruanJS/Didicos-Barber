<template>
  <div class="fixed bottom-6 right-6 flex flex-row gap-4 z-50">
    <!-- Back to Top -->
    <UButton
      v-if="showBackToTop"
      variant="solid"
      class="rounded-full shadow-lg bg-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
      @click="scrollToTop"
    >
      <ArrowUp class="h-6 w-6" />
    </UButton>

    <!-- WhatsApp -->
    <UButton
      variant="solid"
      color="white"
      class="w-12 h-12 rounded-full shadow-lg bg-green-500 hover:bg-white hover:text-green-500 transition-colors duration-300"
    >
      <a 
        href="https://wa.me/message/O3W3ST3HA272K1" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex items-center justify-center w-full h-full"
      >
        <MessageCircle class="h-6 w-6" />
      </a>
    </UButton>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp, MessageCircle } from 'lucide-vue-next'

const showBackToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300
  }

  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
