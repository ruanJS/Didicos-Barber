<template>
  <section id="localização" class="bg-[#090909] py-35">
    <div class="container mx-auto px-4 lg:px-48">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-5xl lg:text-8xl font-anton font-bold uppercase gradient-title">
          AONDE ESTAMOS LOCALIZADOS
        </h2>
      </div>

      <!-- Maps Grid -->
      <div class="grid lg:grid-cols-2 gap-12">
        <div
          v-for="location in locations"
          :key="location.id"
          class="text-center"
        >
          <div class="mb-6">
            <MapPin class="h-8 w-8 text-white mx-auto mb-4" />
            <h3 class="shine-text text-xl font-medium">{{ location.address }}</h3>
          </div>
          
          <div class="rounded-lg overflow-hidden shadow-lg">
            <iframe
              :src="location.embedUrl"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin } from 'lucide-vue-next'

const locations = [
  {
    id: 1,
    address: 'Rua Independência, 90',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.2078566759221!2d-46.817454249687756!3d-23.83058502186041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4bf3e5ea46f9%3A0xd2fd0b7fe801917!2sDidico%E2%80%99s%20Barber!5e0!3m2!1spt-BR!2sus!4v1739383455428!5m2!1spt-BR!2sus'
  },
  {
    id: 2,
    address: 'Avenida Doutor Guilherme Dumont Vilares, 1147',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.753330832223!2d-46.7434587237583!3d-23.613177863499555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57599507095d%3A0x443d97037f8748e8!2sDidico%E2%80%99s%20Barber%20Portal!5e0!3m2!1spt-BR!2sbr!4v1739383767466!5m2!1spt-BR!2sbr'
  }
]
</script>