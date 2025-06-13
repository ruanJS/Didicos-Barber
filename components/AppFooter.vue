<template>
  <footer class="bg-black text-white py-10 text-center text-sm font-extralight">
    <div class="container mx-auto px-4 space-y-6">
      
      <!-- Social Icons -->
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

      <!-- Logo -->
      <div>
        <img 
          src="/img/logo-didicos.png" 
          alt="Logo Didico´s Barber" 
          class="mx-auto h-14 w-auto"
        />
      </div>

      <!-- Copyright -->
      <p class="text-gray-400 text-xs">
        © 2024 Didico´s Barber. Todos os direitos reservados.
      </p>

      <!-- Developer Credit -->
      <p class="text-xs">
        Desenvolvido por 
        <a 
          href="https://devguedess.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="ml-1 font-semibold"
        >
          <span class="text-blue-500">Dev</span><span class="text-red-500">guedess</span>
        </a>
      </p>
      
    </div>
  </footer>
</template>

<script setup>
import { Twitter, Instagram, Facebook } from 'lucide-vue-next'

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
    hoverColor: 'hover:text-pink-400' 
  },
  { 
    name: 'Facebook', 
    icon: Facebook, 
    url: 'https://facebook.com', 
    hoverColor: 'hover:text-blue-600' 
  }
]
</script>
