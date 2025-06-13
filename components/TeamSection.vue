<template>
  <section id="nossa-equipe" class="bg-barber-background py-20">
    <!-- Banner -->
    <div class="bg-gradient-to-b from-barber-dark-gray to-barber-medium-gray py-6 mb-16">
      <div class="overflow-hidden">
        <div class="flex whitespace-nowrap animate-scroll-left">
          <div class="shine-text text-lg font-medium">
            💈 Seja atendido pelos melhores profissionais, e não esqueça de seguir seu barbeiro nas redes sociais! 💈
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 lg:px-48">
      <div class="flex items-center gap-16">
        <!-- Vertical Title -->
        <div class="hidden lg:block">
          <h2 class="text-8xl font-anton font-bold uppercase gradient-title transform rotate-180 writing-mode-vertical">
            Nossa Equipe
          </h2>
        </div>

        <!-- Mobile Title -->
        <div class="lg:hidden text-center w-full mb-8">
          <h2 class="text-4xl font-anton font-bold uppercase gradient-title">
            Nossa Equipe
          </h2>
        </div>

        <!-- Team Carousel -->
        <div class="flex-1 relative">
          <!-- Navigation Buttons -->
          <UButton
            v-if="canScrollLeft"
            variant="ghost"
            color="gray"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-600/60 hover:bg-white/80 text-white hover:text-black rounded-full w-16 h-16"
            @click="scrollLeft"
          >
            <ChevronLeft class="h-8 w-8" />
          </UButton>

          <UButton
            v-if="canScrollRight"
            variant="ghost"
            color="gray"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-600/60 hover:bg-white/80 text-white hover:text-black rounded-full w-16 h-16"
            @click="scrollRight"
          >
            <ChevronRight class="h-8 w-8" />
          </UButton>

          <!-- Team Members -->
          <div 
            ref="teamContainer"
            class="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            @scroll="updateScrollButtons"
          >
            <div
              v-for="member in teamMembers"
              :key="member.id"
              class="flex-shrink-0 w-64 text-center"
            >
              <div class="relative mb-6">
                <img 
                  :src="member.image" 
                  :alt="member.name"
                  class="w-full h-80 object-cover rounded-lg"
                >
                <h3 class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black/50 px-4 py-2 rounded">
                  {{ member.name }}
                </h3>
              </div>
              
              <div class="flex justify-center space-x-6">
                <a 
                  v-for="social in member.socials"
                  :key="social.platform"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-white hover:scale-110 transition-transform duration-300"
                  :class="social.hoverColor"
                >
                  <component :is="social.icon" class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ChevronLeft, ChevronRight, Twitter, Instagram, Facebook } from 'lucide-vue-next'

const teamContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const teamMembers = [
  {
    id: 1,
    name: 'Thomas',
    image: '/img/Thomas.png',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/thoomasoliveira/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 2,
    name: 'Jimmy',
    image: '/img/Jimmy.png',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/_lucasjimmy/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 3,
    name: 'Gabriel',
    image: '/img/Gabriel.png',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/bi.pedroso/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 4,
    name: 'Will',
    image: '/img/Will.png',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/e.u.s.o.u.w.i.l.l/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 5,
    name: 'Ricardo',
    image: '/img/Ricardo.png',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/ricardoalmirjr/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 6,
    name: 'Marreta',
    image: '/img/Marreta.png',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/tio_marreta/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 7,
    name: 'Leandro',
    image: '/img/Leandro.png',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/leandr0_corts/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  }
]

const scrollLeft = () => {
  if (teamContainer.value) {
    teamContainer.value.scrollBy({ left: -280, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (teamContainer.value) {
    teamContainer.value.scrollBy({ left: 280, behavior: 'smooth' })
  }
}

const updateScrollButtons = () => {
  if (teamContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = teamContainer.value
    canScrollLeft.value = scrollLeft > 0
    canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 10
  }
}

onMounted(() => {
  updateScrollButtons()
})
</script>

<style scoped>
.writing-mode-vertical {
  writing-mode: vertical-rl;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>