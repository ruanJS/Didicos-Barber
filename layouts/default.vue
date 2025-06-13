<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useRoute } from 'vue-router'
import AppHeader from '~/components/AppHeader.vue'

const headerItems = [
  { label: 'Início', to: '/', icon: 'i-lucide-home' },
  { label: 'Sobre', to: '#sobre', icon: 'i-lucide-info' },
  { label: 'Serviços', to: '#servicos', icon: 'i-lucide-briefcase' },
  { label: 'Contato', to: '#contato', icon: 'i-lucide-mail' }
]

const isSidebarOpen = ref(true)
const { width: screenWidth } = useWindowSize()
const route = useRoute()
const activeLink = computed(() => route.hash || route.path)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const openBookingModal = () => {
  const event = new CustomEvent('open-booking-modal')
  window.dispatchEvent(event)
}
</script>

<template>
  <div class="flex flex-col min-h-screen relative">
    <AppHeader @toggle-sidebar="toggleSidebar" @open-booking-modal="openBookingModal" />

    <!-- Overlay para mobile -->
    <div 
      v-if="isSidebarOpen && screenWidth < 768"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
      @click="toggleSidebar"
    />

    <!-- Layout principal -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <aside :class="[ 
        'fixed top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-xl',
        'transform transition-transform duration-300 ease-in-out',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]">
        <div class="relative h-full flex flex-col">
          <UButton 
            icon="i-lucide-x" 
            class="absolute top-3 right-3 cursor-pointer text-sm" 
            color="error" 
            variant="ghost"
            size="lg" 
            @click="toggleSidebar" 
          />

          <div class="px-4 pt-6 pb-2 border-b border-gray-700 mt-7">
            <h3 class="text-sm uppercase tracking-wide text-gray-400 font-semibold">Menu de Navegação</h3>
          </div>

          <nav class="flex-1 overflow-y-auto p-4">
            <UNavigationMenu 
              v-model="activeLink"
              orientation="vertical" 
              :items="headerItems" 
              class="space-y-1 text-sm" 
              @update:model-value="() => {
                if (screenWidth < 768) toggleSidebar()
              }"
            />
          </nav>
        </div>
      </aside>

      <!-- Slot principal -->
      <main :class="[ 
        'flex-1 p-4 overflow-auto transition-all duration-300 ease-in-out',
        { 'ml-64': isSidebarOpen && screenWidth >= 768, 'ml-0': !isSidebarOpen || screenWidth < 768 }
      ]">
        <slot />
      </main>
    </div>
  </div>
</template>
