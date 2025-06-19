<template>
  <HeroSection />
  <AboutSection />
  <ServicesSection />
  <TeamSection />
  <UnitsSection />
  <MapsSection />
  <SocialSection />
  <FloatingButtons />
  <Footer />
</template>

<script lang="ts" setup>
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import FloatingButtons from '~/components/FloatingButtons.vue'
import MapsSection from '~/components/MapsSection.vue'
import Footer from '~/components/Footer.vue'
import TeamSection from '~/components/TeamSection.vue'
import UnitsSection from '~/components/UnitsSection.vue'
import SocialSection from '~/components/SocialSection.vue'

useSeoMeta({
  title: "Didico's Barber - Barbearia Premium",
  description: "Agende seu horário e venha conhecer o melhor corte de cabelo da região do Morumbi.",
  keywords: 'barbearia, corte de cabelo, fade, barba, cabelo masculino, barbearia no Morumbi',
  author: "Didico's Barber",
  viewport: 'width=device-width, initial-scale=1',

  ogTitle: "Didico's Barber - Barbearia Premium",
  ogDescription: "O melhor corte da região do Morumbi. Agende seu horário.",
  ogImage: '/public/img/logo.png',
  ogUrl: 'https://didicosbarber.vercel.app',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterSite: '@didicosbarber',
  twitterCreator: '@devguedess_'
})
</script>