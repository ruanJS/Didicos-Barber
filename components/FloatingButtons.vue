<template>
  <div class="fixed bottom-6 right-6 flex flex-row gap-4 z-50">
    <UButton
      v-if="showBackToTop"
      variant="solid"
      class="w-12 h-12 rounded-full shadow-lg bg-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center"
      @click="scrollToTop"
    >
      <ArrowUp class="h-6 w-6" />
    </UButton>

    <div
      class="group flex items-center overflow-hidden bg-green-500 hover:bg-white hover:text-green-500 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out pr-4 pl-3 py-3 max-w-[48px] hover:max-w-xs cursor-pointer"
    >
      <a 
        href="https://wa.me/message/O3W3ST3HA272K1" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex items-center gap-2 w-full h-full"
      >
        <div class="flex items-center justify-center relative">
          <MessageCircle class="flex-shrink-0 transition-opacity duration-200 group-hover:opacity-0" />
        </div>
        <span
          class="ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
        >
          Olá, posso te ajudar?
        </span>
      </a>
    </div>
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
