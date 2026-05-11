<template>
  <div class="bg-navy-900 min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <TabsSection />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TabsSection from './components/TabsSection.vue'
import FooterComponent from './components/Footer.vue'
</script>
