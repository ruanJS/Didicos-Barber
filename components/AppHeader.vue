<!-- AppHeader.vue -->
<template>
  <header class="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-600 shadow-sm backdrop-blur-md bg-white dark:bg-gray-800">
    <div class="relative container mx-auto px-4 py-6 flex items-center justify-between min-h-[100px]">
      <!-- Botão de menu lateral -->
      <UButton 
        icon="i-lucide-menu" 
        class="cursor-pointer text-sm" 
        color="neutral" 
        variant="ghost" 
        size="lg"
        @click="$emit('toggle-sidebar')" 
      />

      <!-- Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <img src="/img/logo.png" alt="Logo" class="h-32 w-auto" />
      </div>

      <!-- Botão agendar -->
      <UButton 
        variant="ghost" 
        class="border border-gray-400 cursor-pointer w-40 h-10 flex items-center justify-center text-sm bg-transparent text-gray-200 hover:text-gray-100 hover:bg-gray-700/20 transition-colors duration-200"
        @click="$emit('open-booking-modal')">
        <span class="font-extralight">Agendar horário</span>
      </UButton>
    </div>
  </header>
</template>
