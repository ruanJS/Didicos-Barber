<template>
  <header class="sticky z-10 top-0 shadow-sm backdrop-blur-md bg-[#222222]">
    <div class="relative container mx-auto px-4 py-10 flex items-center justify-between min-h-[80px]">
      <UButton icon="i-lucide-align-left" class="cursor-pointer text-xs" color="neutral" variant="ghost" size="xl"
        @click="$emit('toggle-sidebar')" />

      <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <img src="/img/logo.png" alt="Logo" class="h-30 w-auto" />
      </div>

      <UButton variant="ghost"
        class="hidden-mobile border border-gray-300 cursor-pointer w-40 h-10 flex items-center justify-center bg-transparent text-gray-200 hover:text-gray-100 hover:bg-[#808080] transition-colors duration-200"
        @click="$emit('open-booking-modal')"> 
        <span class="font-extralight">Agendar horário</span>
      </UButton>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 767px) {
  .hidden-mobile {
    display: none !important;
  }
}
</style>