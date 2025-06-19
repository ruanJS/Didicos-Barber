<template>
  <section
    :class="[activeTab === tabs[0] ? 'bg-[#090909]' : 'bg-[#222222]', 'py-20 text-white transition-colors duration-500']"
    id="equipe"
  >
    <!-- Banner com efeito shine e profundidade -->
    <div class="relative overflow-hidden mb-16">
      <div class="flex w-max animate-banner-shine items-center gap-20">
        <div
          v-for="n in 2"
          :key="n"
          class="shine-text inline-flex items-center gap-2 px-127 whitespace-nowrap"
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/emoji/48/barber-pole-emoji.png"
            alt="barber-pole-emoji"
          />
          <span>Seja atendido pelos melhores profissionais, e não esqueça de seguir seu barbeiro nas redes sociais!</span>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center mb-12">
      <div class="inline-flex rounded-full bg-white/10 p-1 space-x-1">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="[
            'px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer',
            activeTab === tab ? 'bg-white text-black shadow' : 'text-white hover:bg-white/20'
          ]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <div class="container mx-auto px-4 lg:px-48">
      <div class="flex items-center gap-10">
        <!-- Título vertical -->
        <div class="hidden lg:block">
          <h2
            class="text-8xl font-anton font-bold uppercase writing-mode-vertical rotate-180 transition-all duration-500"
            :class="activeTab === tabs[0] ? 'text-[#FFD700]' : 'text-[#C0C0C0]'"
          >
            Nossa Equipe
          </h2>
        </div>

        <!-- Título mobile -->
        <div class="lg:hidden text-center w-full mb-8">
          <h2
            class="text-4xl font-anton font-bold uppercase transition-all duration-500"
            :class="activeTab === tabs[0] ? 'text-[#FFD700]' : 'text-[#C0C0C0]'"
          >
            Nossa Equipe
          </h2>
        </div>

        <!-- Carrossel com transição -->
        <div class="flex-1 relative">
          <!-- Botões laterais (mobile e desktop) -->
          <UButton
            v-if="canScrollLeft"
            variant="ghost"
            color="gray"
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white text-black rounded-full w-10 h-10 md:w-12 md:h-12"
            @click="scrollLeft"
          >
            <ChevronLeft class="w-5 h-5 md:w-6 md:h-6" />
          </UButton>

          <UButton
            v-if="canScrollRight"
            variant="ghost"
            color="gray"
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white text-black rounded-full w-10 h-10 md:w-12 md:h-12"
            @click="scrollRight"
          >
            <ChevronRight class="w-5 h-5 md:w-6 md:h-6" />
          </UButton>

          <!-- Lista de barbeiros -->
          <transition name="fade" mode="out-in">
            <div
              :key="activeTab"
              ref="teamContainer"
              class="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-1"
              @scroll="updateScrollButtons"
            >
              <div
                v-for="member in filteredTeam"
                :key="member.id"
                class="flex-shrink-0 w-64 text-center"
              >
                <div class="relative mb-4">
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="w-full h-80 object-cover rounded-xl"
                  />
                  <h3 class="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold bg-black/60 px-4 py-1 rounded">
                    {{ member.name }}
                  </h3>
                </div>
                <div class="flex justify-center space-x-4">
                  <a
                    v-for="social in member.socials"
                    :key="social.platform"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:scale-110 transition"
                    :class="social.hoverColor"
                  >
                    <component :is="social.icon" class="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ChevronLeft, ChevronRight, Twitter, Instagram, Facebook } from 'lucide-vue-next'

const tabs = ['Barbeiros - Morumbi', 'Barbeiros - Embu Guaçu']
const activeTab = ref(tabs[0])

const teamContainer = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const allTeam = [
  {
    id: 1,
    name: 'Thomas',
    image: '/img/Thomas.png',
    unit: 'Morumbi',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/thoomasoliveira/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 2,
    name: 'Gabriel',
    image: '/img/Gabriel.png',
    unit: 'Morumbi',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/bi.pedroso/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 3,
    name: 'Will',
    image: '/img/Will.png',
    unit: 'Morumbi',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/e.u.s.o.u.w.i.l.l/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 4,
    name: 'Jimmy',
    image: '/img/Jimmy.png',
    unit: 'Morumbi',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/_lucasjimmy/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  },
  {
    id: 5,
    name: 'Ricardo',
    image: '/img/Ricardo.png',
    unit: 'Embu Guaçu',
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
    unit: 'Embu Guaçu',
    socials: [
      { platform: 'twitter', icon: Twitter, url: 'https://twitter.com', hoverColor: 'hover:text-blue-400' },
      { platform: 'instagram', icon: Instagram, url: 'https://www.instagram.com/tio_marreta/', hoverColor: 'hover:text-pink-400' },
      { platform: 'facebook', icon: Facebook, url: 'https://facebook.com', hoverColor: 'hover:text-blue-600' }
    ]
  }
]

const filteredTeam = computed(() => {
  return allTeam.filter(member => {
    return activeTab.value.includes(member.unit)
  })
})

const scrollLeft = () => {
  teamContainer.value?.scrollBy({ left: -280, behavior: 'smooth' })
}
const scrollRight = () => {
  teamContainer.value?.scrollBy({ left: 280, behavior: 'smooth' })
}
const updateScrollButtons = () => {
  if (!teamContainer.value) return
  const { scrollLeft, scrollWidth, clientWidth } = teamContainer.value
  canScrollLeft.value = scrollLeft > 0
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 10
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@keyframes banner-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-banner-shine {
  animation: banner-scroll 25s linear infinite;
}
.shine-text {
  background: linear-gradient(to right, #ffffff 20%, #7d7d7c 40%, #ffffff 60%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine-loop 10s linear infinite;
}
@keyframes shine-loop {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}
</style>