<template>
  <nav
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      scrolled
        ? 'glass border-b border-white/10 shadow-2xl shadow-black/30'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-3 group" id="nav-logo">
        <div class="relative">
          <div class="absolute inset-0 rounded-full bg-orange-500/30 blur-md group-hover:bg-orange-500/50 transition-all duration-300"></div>
          <img
            src="/logo_siagakita_transparant.png"
            alt="SiagaKita Logo"
            class="relative h-10 w-10 object-contain"
          />
        </div>
        <div class="flex flex-col leading-tight">
          <span class="text-lg font-bold tracking-wide text-white">SiagaKita</span>
          <span class="text-[10px] font-mono text-orange-400/80 tracking-widest uppercase">Safety Ecosystem</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-8">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          :id="`nav-${item.id}`"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click="activeSection = item.id"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- CTA -->
      <a
        href="#install"
        id="nav-cta-download"
        class="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
        style="background: linear-gradient(135deg, #FF5722, #E64A19);"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.31.07 2.2.74 2.96.8 1.12-.24 2.19-.93 3.39-.84 1.44.12 2.53.72 3.24 1.8-2.96 1.77-2.52 5.66.42 6.72-.5 1.35-1.16 2.69-2.01 4.4zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
        Download APK
      </a>

      <!-- Mobile Hamburger -->
      <button
        id="nav-mobile-menu"
        class="lg:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="lg:hidden glass border-t border-white/10 px-6 py-4 flex flex-col gap-3"
      >
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          :id="`nav-mobile-${item.id}`"
          class="text-sm font-medium text-white/70 hover:text-orange-400 transition-colors py-2 border-b border-white/5"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </a>
        <a
          href="#install"
          id="nav-mobile-cta"
          class="mt-2 text-center px-5 py-3 rounded-xl font-semibold text-sm text-white"
          style="background: linear-gradient(135deg, #FF5722, #E64A19);"
          @click="mobileOpen = false"
        >
          Download APK
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('home')
const navRef = ref(null)

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'Documentation', href: '#about' },
  { id: 'paper', label: 'Submit Paper', href: '#paper' },
  { id: 'hki', label: 'HKI Certificate', href: '#hki' },
  { id: 'poster', label: 'Poster', href: '#poster' },
  { id: 'install', label: 'Android APK', href: '#install' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50

  // Active section detection
  const sections = ['home', 'about', 'paper', 'hki', 'poster', 'install']
  for (const id of sections.reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
  sections.reverse()
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
