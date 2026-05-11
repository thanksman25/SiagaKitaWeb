<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Video -->
    <video
      ref="videoRef"
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
      :src="videoSrc"
    ></video>

    <!-- Overlays -->
    <div class="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900"></div>
    <div class="absolute inset-0 tactical-grid opacity-30"></div>

    <!-- Scan line -->
    <div class="scan-overlay"></div>

    <!-- Animated corner brackets -->
    <div class="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-orange-500/40 hidden lg:block"></div>
    <div class="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-orange-500/40 hidden lg:block"></div>
    <div class="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-orange-500/40 hidden lg:block"></div>
    <div class="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-orange-500/40 hidden lg:block"></div>

    <!-- HUD Radar Ping -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10">
      <div class="absolute inset-0 rounded-full border border-orange-500/30 animate-ping-slow" style="animation-duration: 3s;"></div>
      <div class="absolute inset-8 rounded-full border border-orange-500/20 animate-ping-slow" style="animation-duration: 3s; animation-delay: 1s;"></div>
      <div class="absolute inset-16 rounded-full border border-orange-500/10 animate-ping-slow" style="animation-duration: 3s; animation-delay: 2s;"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <!-- Status badge -->
      <div ref="badgeRef" class="inline-flex items-center gap-2 pill-badge mb-8 opacity-0">
        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        <span class="font-mono text-xs tracking-widest">SYSTEM ACTIVE — v2.0.1</span>
      </div>

      <!-- Headline -->
      <h1 ref="titleRef" class="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 opacity-0">
        <span class="text-white">Siaga</span><span class="text-gradient text-glow">Kita</span>
      </h1>

      <p ref="subtitleRef" class="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto mb-4 opacity-0">
        Integrated Tourism Safety Ecosystem
      </p>

      <p ref="descRef" class="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-12 opacity-0 leading-relaxed">
        Bridging the gap between <span class="text-orange-400 font-medium">tourists</span>, 
        <span class="text-orange-400 font-medium">volunteers</span>, and 
        <span class="text-orange-400 font-medium">emergency agencies</span> through real-time technology.
      </p>

      <!-- CTAs -->
      <div ref="ctaRef" class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0">
        <a
          href="#about"
          id="hero-cta-explore"
          class="px-8 py-4 rounded-2xl font-semibold text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:-translate-y-1"
        >
          Explore Ecosystem
        </a>
        <a
          href="#install"
          id="hero-cta-download"
          class="btn-download flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.523 15.341a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m-11.046 0a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m11.405-6.02l1.997-3.459a.416.416 0 00-.152-.568.416.416 0 00-.568.152l-2.022 3.503A11.306 11.306 0 0012 7.851a11.306 11.306 0 00-5.137 1.099L4.841 5.447a.416.416 0 00-.568-.152.416.416 0 00-.152.568l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.344-4.102-2.689-7.574-6.118-9.44"/>
          </svg>
          Download for Android
        </a>
      </div>

      <!-- Stats row -->
      <div ref="statsRef" class="grid grid-cols-3 gap-6 max-w-2xl mx-auto opacity-0">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="glass rounded-xl p-4 hud-border"
        >
          <div class="text-2xl font-black text-gradient">{{ stat.value }}</div>
          <div class="text-xs font-mono text-white/50 mt-1 uppercase tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
      <span class="text-xs font-mono text-white/30 tracking-widest uppercase">Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const videoRef = ref(null)
const badgeRef = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)
const descRef = ref(null)
const ctaRef = ref(null)
const statsRef = ref(null)

const videoSrc = '/IMG_3523.MOV'

const stats = [
  { value: '10s', label: 'SOS Response' },
  { value: '3', label: 'Key Actors' },
  { value: '24/7', label: 'Monitoring' },
]

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.3 })
  tl.to(badgeRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform' })
    .to(titleRef.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.2')
    .to(subtitleRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .to(descRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .to(ctaRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .to(statsRef.value, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')

  // Preload video
  if (videoRef.value) {
    videoRef.value.playbackRate = 0.7
  }
})
</script>
