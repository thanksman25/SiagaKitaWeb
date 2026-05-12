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
      <a href="#home" class="flex items-center gap-3 group" id="nav-logo" @click.prevent="handleNavClick({ id: 'home', tabId: null })">
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
          <span class="text-[10px] font-mono text-orange-400/80 tracking-widest uppercase">{{ t('footer.tagline') }}</span>
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
          @click.prevent="handleNavClick(item)"
        >
          {{ t(`nav.${item.key}`) }}
        </a>
      </div>

      <!-- Right side: Lang toggle + CTA -->
      <div class="hidden lg:flex items-center gap-3">
        <!-- Language toggle switch -->
        <button
          id="lang-toggle"
          @click="toggleLang"
          aria-label="Toggle language"
          class="relative flex items-center w-[72px] h-8 rounded-full p-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          :style="lang === 'en'
            ? 'background: rgba(255,87,34,0.15); border: 1px solid rgba(255,87,34,0.35);'
            : 'background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.35);'"
        >
          <!-- Sliding pill -->
          <span
            class="absolute top-0.5 h-7 w-8 rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center text-[10px] font-black tracking-wider text-white"
            :class="lang === 'en' ? 'left-0.5 bg-orange-500' : 'left-[calc(100%-2.1rem)] bg-blue-500'"
          >
            {{ lang === 'en' ? 'EN' : 'ID' }}
          </span>
          <!-- Labels -->
          <span class="w-1/2 text-center text-[10px] font-bold z-10 transition-colors duration-300" :class="lang === 'en' ? 'text-transparent' : 'text-blue-300/60'">EN</span>
          <span class="w-1/2 text-center text-[10px] font-bold z-10 transition-colors duration-300" :class="lang === 'id' ? 'text-transparent' : 'text-orange-400/60'">ID</span>
        </button>

        <!-- CTA -->
        <a
          href="https://github.com/thanksman25/SiagaKitaWeb/releases/download/V1.0/SiagaKita.apk"
          download="SiagaKita.apk"
          id="nav-cta-download"
          class="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
          style="background: linear-gradient(135deg, #FF5722, #E64A19);"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.523 15.341a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m-11.046 0a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m11.405-6.02l1.997-3.459a.416.416 0 00-.152-.568.416.416 0 00-.568.152l-2.022 3.503A11.306 11.306 0 0012 7.851a11.306 11.306 0 00-5.137 1.099L4.841 5.447a.416.416 0 00-.568-.152.416.416 0 00-.152.568l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.344-4.102-2.689-7.574-6.118-9.44"/>
          </svg>
          {{ t('nav.download') }}
        </a>
      </div>

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
          @click.prevent="handleNavClick(item); mobileOpen = false"
        >
          {{ t(`nav.${item.key}`) }}
        </a>
        <!-- Mobile lang toggle switch -->
        <div class="flex items-center justify-between py-2 border-b border-white/5">
          <span class="text-xs font-mono text-white/40 uppercase tracking-widest">Language</span>
          <button
            @click="toggleLang"
            aria-label="Toggle language"
            class="relative flex items-center w-[72px] h-8 rounded-full p-0.5 transition-all duration-300 focus:outline-none"
            :style="lang === 'en'
              ? 'background: rgba(255,87,34,0.15); border: 1px solid rgba(255,87,34,0.35);'
              : 'background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.35);'"
          >
            <span
              class="absolute top-0.5 h-7 w-8 rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center text-[10px] font-black text-white"
              :class="lang === 'en' ? 'left-0.5 bg-orange-500' : 'left-[calc(100%-2.1rem)] bg-blue-500'"
            >
              {{ lang === 'en' ? 'EN' : 'ID' }}
            </span>
            <span class="w-1/2 text-center text-[10px] font-bold z-10" :class="lang === 'en' ? 'text-transparent' : 'text-blue-300/60'">EN</span>
            <span class="w-1/2 text-center text-[10px] font-bold z-10" :class="lang === 'id' ? 'text-transparent' : 'text-orange-400/60'">ID</span>
          </button>
        </div>
        <a
          href="https://github.com/thanksman25/SiagaKitaWeb/releases/download/V1.0/SiagaKita.apk"
          download="SiagaKita.apk"
          id="nav-mobile-cta"
          class="mt-2 text-center px-5 py-3 rounded-xl font-semibold text-sm text-white"
          style="background: linear-gradient(135deg, #FF5722, #E64A19);"
          @click="mobileOpen = false"
        >
          {{ t('nav.download') }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '../composables/useLang.js'

const { lang, toggleLang, t } = useLang()

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('home')
const navRef = ref(null)

const navItems = [
  { id: 'home',    key: 'home',          href: '#home',    tabId: null },
  { id: 'about',   key: 'documentation', href: '#about',   tabId: null },
  { id: 'paper',   key: 'paper',         href: '#paper',   tabId: 'paper' },
  { id: 'hki',     key: 'hki',           href: '#hki',     tabId: 'hki' },
  { id: 'poster',  key: 'poster',        href: '#poster',  tabId: 'poster' },
  { id: 'install', key: 'apk',           href: '#install', tabId: 'install' },
]

const handleNavClick = (item) => {
  activeSection.value = item.id
  if (item.tabId) {
    window.location.hash = item.tabId
  } else {
    const el = document.getElementById(item.id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
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
