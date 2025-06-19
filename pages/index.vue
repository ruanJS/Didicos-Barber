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
<script lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import FloatingButtons from '~/components/FloatingButtons.vue';
import MapsSection from '~/components/MapsSection.vue';
import Footer from '~/components/Footer.vue';
import TeamSection from '~/components/TeamSection.vue';
import UnitsSection from '~/components/UnitsSection.vue';
import SocialSection from '~/components/SocialSection.vue';

useSeoMeta({
  title: "Didico's Barber - Barbearia Premium",
  ogTitle: "Didico's Barber - Barbearia Premium",
  description: "Agende seu horário e venha conhecer o melhor corte de cabelo da região do Morumbi.",
  ogDescription: "Agende seu horário e venha conhecer o melhor corte de cabelo da região do Morumbi.",
  ogImage: '/img/logo.png',
  twitterCard: 'summary_large_image',
})

</script>