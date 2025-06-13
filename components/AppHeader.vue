<!-- AppHeader.vue -->
<template>
  <header class="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-600 shadow-sm backdrop-blur-md bg-white dark:bg-gray-800">
    <div class="relative container mx-auto px-4 py-4 flex items-center justify-between min-h-[80px]">
      <!-- Botão de menu lateral -->
      <UButton 
        icon="i-lucide-menu" 
        class="cursor-pointer text-xs" 
        color="neutral" 
        variant="ghost" 
        size="sm"
        @click="$emit('toggle-sidebar')" 
      />

      <!-- Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <img src="/img/logo.png" alt="Logo" class="h-20 w-auto" />
      </div>

      <!-- Botão agendar - apenas em desktop -->
      <UButton 
        v-if="screenWidth >= 768"
        variant="ghost" 
        class="border border-gray-400 cursor-pointer w-32 h-8 flex items-center justify-center text-xs bg-transparent text-gray-200 hover:text-gray-100 hover:bg-gray-700/20 transition-colors duration-200"
        @click="$emit('open-booking-modal')">
        <span class="font-extralight">Agendar horário</span>
      </UButton>
      
      <!-- Espaço vazio para manter o logo centralizado em mobile -->
      <div v-else class="w-8"></div>
    </div>
  </header>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width: screenWidth } = useWindowSize()
</script>