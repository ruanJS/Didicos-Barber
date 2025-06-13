<template>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <MapsSection />
    <FloatingButtons />
    <AppFooter />

</template>
<script lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import FloatingButtons from '~/components/FloatingButtons.vue';
import MapsSection from '~/components/MapsSection.vue';
import AppFooter from '~/components/AppFooter.vue';

useSeoMeta({
  title: "Didico's Barber - Barbearia Premium",
  ogTitle: "Didico's Barber - Barbearia Premium",
  description: "Agende seu horário e venha conhecer o melhor corte de cabelo da região.",
  ogDescription: "Agende seu horário e venha conhecer o melhor corte de cabelo da região.",
  ogImage: '/img/logo.png',
  twitterCard: 'summary_large_image',
})

</script>