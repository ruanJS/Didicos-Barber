<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'
import AppHeader from '~/components/Header.vue'
import AgendarModal from '~/components/modals/AgendarModal.vue'
import EditarModal from '~/components/modals/EditarModal.vue'
import ModalConcluido from '~/components/modals/ModalConcluido.vue'

const headerItems = [
  { label: 'Início', to: '/', icon: 'i-lucide-home' },
  { label: 'Sobre', to: '#sobre', icon: 'i-lucide-badge-info' },
  { label: 'Serviços', to: '#servicos', icon: 'i-lucide-handshake' },
  { label: 'Nossa equipe', to: '#equipe', icon: 'i-lucide-users-round' },
  { label: 'Unidades', to: '#unidade', icon: 'i-lucide-building-2' },
  { label: 'Localização', to: '#localização', icon: 'i-lucide-map-pin' },
  { label: 'Redes Sociais', to: '#redes-sociais', icon: 'i-lucide-instagram' },
  { label: 'Contato', to: '#contato', icon: 'i-lucide-mail' }
];

const isSidebarOpen = ref(false)
const { width: screenWidth } = useWindowSize()
const route = useRoute()
const router = useRouter()
const activeLink = ref(route.hash || route.path)

const showAgendar = ref(false)
const showEditar = ref(false)
const showConcluido = ref(false)
const formData = ref({
  nome: '',
  telefone: '',
  data: '',
  tipoServico: '',
  unidade: '',
  horario: ''
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const openBookingModal = () => {
  showAgendar.value = true
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (hash: string) => {
  const el = document.querySelector(hash)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`
          activeLink.value = id
          break
        }
      }
    },
    { threshold: 0.6 }
  )
  const sections = document.querySelectorAll('section[id]')
  sections.forEach((section) => observer.observe(section))
  return () => observer.disconnect()
}

const abrirEditar = (data: any) => {
  formData.value = data
  showEditar.value = true
}

const abrirConcluido = async () => {
  showEditar.value = false
  showConcluido.value = true
}

const resetForm = () => {
  formData.value = {
    nome: '',
    telefone: '',
    data: '',
    tipoServico: '',
    unidade: '',
    horario: ''
  }
}

const voltarParaAgendar = () => {
  showEditar.value = false
  showAgendar.value = true
}

onMounted(() => {
  const stop = observeSections()
  router.afterEach((to) => {
    activeLink.value = to.hash || to.path
  })
  onUnmounted(stop)
})
</script>

<template>
    <div class="flex flex-col min-h-screen relative">
      <!-- Cabeçalho -->
      <AppHeader @toggle-sidebar="toggleSidebar" @open-booking-modal="openBookingModal" />

    <!-- Overlay para mobile -->
    <div
    v-if="isSidebarOpen && screenWidth < 768"
    class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
    @click="toggleSidebar"
    />

    <!-- Sidebar + Conteúdo -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar -->
      <aside :class="[
        'fixed top-0 left-0 z-50 h-screen w-64 bg-[#222222] shadow-xl',
        'transform transition-transform duration-300 ease-in-out',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]">
        <div class="relative h-full flex flex-col">
          <UButton icon="i-lucide-x" class="absolute top-10 right-3 cursor-pointer" color="error" variant="ghost" size="lg" @click="toggleSidebar" />

          <div class="px-6 pt-16 pb-2 border-b border-gray-700 mt-7">
            <h3 class="text-xs uppercase tracking-wide text-gray-400 font-semibold">Menu de Navegação</h3>
          </div>

          <nav class="flex-1 overflow-y-auto p-4">
            <ul class="space-y-1 text-xs">
              <li v-for="item in headerItems" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  :class="[
                    'flex items-center px-3 py-3 rounded transition-colors duration-200',
                    activeLink === item.to ? 'bg-barber-medium-gray text-white' : 'text-gray-400 hover:bg-barber-dark-gray hover:text-white'
                  ]"
                  @click.prevent="() => {
                    if (item.to === '/') {
                      if (route.path === '/') scrollToTop()
                      else router.push('/').then(() => scrollToTop())
                    } else if (item.to.startsWith('#')) {
                      scrollToSection(item.to)
                    } else {
                      router.push(item.to)
                    }
                    if (screenWidth < 768) toggleSidebar()
                  }"
                >
                  <UIcon :name="item.icon" class="mr-2 w-4 h-4" />
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>

            <div v-if="screenWidth < 768" class="mt-6 pt-4 border-t border-gray-700">
              <UButton
                variant="ghost"
                class="w-full border border-gray-400 cursor-pointer h-10 flex items-center justify-center text-xs bg-transparent text-gray-200 hover:text-white"
                @click="openBookingModal"
              >
                <span class="font-extralight">Agendar horário</span>
              </UButton>
            </div>
          </nav>
        </div>
      </aside>

      <!-- Conteúdo principal -->
      <main class="flex-1 overflow-auto">
        <slot />
      </main>
    </div>

    <!-- ✅ Modais globalmente fora do header -->
    <AgendarModal :show="showAgendar" @update:show="showAgendar = $event" @next="abrirEditar" />
    <EditarModal :show="showEditar" :data="formData" @update:show="showEditar = $event" @next="abrirConcluido" @edit="voltarParaAgendar" />
    <ModalConcluido :show="showConcluido" :formData="formData" @update:show="showConcluido = $event" @clear-form="resetForm" />
  </div>
</template>
