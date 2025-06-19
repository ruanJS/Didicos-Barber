<template>
  <footer id="contato" class="bg-black text-white py-12 text-center text-sm">
    <div class="container mx-auto px-4 space-y-8">
      
      <div class="flex justify-center gap-6">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-transform duration-300 hover:scale-110"
          :class="social.hoverColor"
        >
          <component :is="social.icon" class="h-6 w-6" />
        </a>
      </div>

      <div>
        <img 
          src="/img/logo-didicos.png" 
          alt="Logo Didico´s Barber" 
          class="mx-auto h-auto w-auto"
        />
      </div>

      <p class="text-gray-400 text-xls">
        © {{ currentYear }} Didico´s Barber. Todos os direitos reservados.
      </p>

      <p class="text-xls text-gray-300">
        Desenvolvido por 
        <a 
          href="https://devguedess.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="ml-1 font-light hover:underline"
        >
          <span class="text-blue-500">Dev</span><span class="text-red-500">guedess</span>
        </a>
      </p>
      
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Instagram, Facebook } from 'lucide-vue-next'
import { computed } from 'vue'

// Ano dinâmico
const currentYear = computed(() => new Date().getFullYear())

// Ícones sociais
const socialLinks = [
  { 
    name: 'Twitter', 
    icon: Twitter, 
    url: 'https://twitter.com', 
    hoverColor: 'hover:text-blue-400' 
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    url: 'https://www.instagram.com/didicosbarber/', 
    hoverColor: 'hover:text-pink-500' 
  },
  { 
    name: 'Facebook', 
    icon: Facebook, 
    url: 'https://facebook.com', 
    hoverColor: 'hover:text-blue-600' 
  }
]
</script>
