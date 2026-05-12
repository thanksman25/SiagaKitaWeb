<template>
  <section id="about" class="relative py-32 overflow-hidden">
    <!-- Background texture -->
    <div class="absolute inset-0 tactical-grid opacity-20"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Section header -->
      <div ref="headerRef" class="text-center mb-20 opacity-0 translate-y-8">
        <div class="pill-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          {{ t('about.badge') }}
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
          {{ t('about.title1') }} <span class="text-gradient">{{ t('about.title2') }}</span>
        </h2>
        <p class="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
          {{ t('about.desc') }}
        </p>
      </div>

      <!-- Ecosystem actors -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <div
          v-for="(actor, i) in actors"
          :key="actor.key"
          ref="actorRefs"
          class="actor-card glass-card p-6 cursor-pointer group opacity-0 translate-y-8"
          :style="{ transitionDelay: `${i * 100}ms` }"
          @mouseenter="hoveredActor = i"
          @mouseleave="hoveredActor = null"
        >
          <!-- HUD corners -->
          <div class="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-orange-500/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-orange-500/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <!-- Initials badge -->
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 font-black text-sm transition-all duration-300 group-hover:scale-110"
            :style="{ background: `${actor.color}20`, border: `1px solid ${actor.color}40`, color: actor.color }"
          >
            {{ actor.initials }}
          </div>

          <!-- Role badge -->
          <div class="text-[10px] font-mono uppercase tracking-widest mb-2" :style="{ color: actor.color }">
            {{ t(`about.actors.${actor.key}.role`) }}
          </div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{{ t(`about.actors.${actor.key}.title`) }}</h3>
          <p class="text-sm text-white/50 leading-relaxed">{{ t(`about.actors.${actor.key}.desc`) }}</p>

          <!-- Hover data reveal -->
          <div class="mt-4 pt-4 border-t border-white/10 overflow-hidden transition-all duration-300" :class="hoveredActor === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'">
            <div v-for="item in actor.data" :key="item" class="flex items-center gap-2 mb-1.5">
              <div class="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
              <span class="text-xs font-mono text-white/60">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Three pillars -->
      <div ref="pillarsRef" class="opacity-0 translate-y-8">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-black text-white">{{ t('about.pillarsTitle1') }} <span class="text-gradient">{{ t('about.pillarsTitle2') }}</span></h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(pillar, i) in pillars"
            :key="pillar.key"
            class="pillar-card relative glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-500"
          >
            <!-- Glow bg -->
            <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              :style="{ background: `radial-gradient(circle at 50% 50%, ${pillar.color}10, transparent 70%)` }">
            </div>

            <!-- Abbr ring -->
            <div class="relative mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center"
              :style="{ background: `${pillar.color}15`, border: `2px solid ${pillar.color}40` }">
              <div class="absolute inset-0 rounded-full animate-ping-slow opacity-30"
                :style="{ background: pillar.color, animationDuration: `${3 + i}s` }">
              </div>
              <span class="text-sm font-black relative z-10 font-mono" :style="{ color: pillar.color }">{{ pillar.abbr }}</span>
            </div>

            <div class="text-xs font-mono tracking-widest uppercase mb-3" :style="{ color: pillar.color }">
              {{ t('about.pillar') }} {{ String(i + 1).padStart(2, '0') }}
            </div>
            <h4 class="text-xl font-bold text-white mb-3">{{ t(`about.pillars.${pillar.key}.title`) }}</h4>
            <p class="text-sm text-white/55 leading-relaxed">{{ t(`about.pillars.${pillar.key}.desc`) }}</p>

            <!-- Technical specs -->
            <div class="mt-6 space-y-2">
              <div v-for="spec in pillar.specs" :key="spec.label" class="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/5">
                <span class="text-xs font-mono text-white/40">{{ spec.label }}</span>
                <span class="text-xs font-mono font-semibold" :style="{ color: pillar.color }">{{ spec.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../composables/useLang.js'

gsap.registerPlugin(ScrollTrigger)

const { t } = useLang()

const headerRef = ref(null)
const actorRefs = ref([])
const pillarsRef = ref(null)
const hoveredActor = ref(null)

const actors = [
  {
    key: 'tourist', initials: 'TUR', color: '#FF5722',
    data: ['SOS 1-tap activation', 'Biometric ID registration', 'Real-time location share', 'Offline-capable reporting'],
  },
  {
    key: 'volunteer', initials: 'VOL', color: '#FF9800',
    data: ['Push alert system', 'Incident assignment', 'Route navigation', 'Status update broadcast'],
  },
  {
    key: 'basarnas', initials: 'SAR', color: '#2196F3',
    data: ['Command dashboard', 'Multi-team dispatch', 'Resource allocation', 'After-action report'],
  },
  {
    key: 'bpbd', initials: 'BPB', color: '#4CAF50',
    data: ['Regional monitoring', 'Risk zone mapping', 'Public alert system', 'Inter-agency coord'],
  },
]

const pillars = [
  {
    key: 'zfr', abbr: 'ZFR', color: '#FF5722',
    specs: [
      { label: 'Response Time', value: '< 10s' },
      { label: 'Offline Mode', value: 'Active' },
      { label: 'Input Steps', value: '1-tap' },
    ],
  },
  {
    key: 'tm', abbr: 'TM', color: '#FF9800',
    specs: [
      { label: 'Dispatch Speed', value: '< 30s' },
      { label: 'GPS Accuracy', value: '±5m' },
      { label: 'Team Coverage', value: 'Regional' },
    ],
  },
  {
    key: 'rtsa', abbr: 'RTSA', color: '#2196F3',
    specs: [
      { label: 'Update Freq', value: '< 2s' },
      { label: 'Data Source', value: 'WebSocket' },
      { label: 'Concurrency', value: 'Multi-agency' },
    ],
  },
]

onMounted(() => {
  ScrollTrigger.create({
    trigger: headerRef.value,
    start: 'top 85%',
    onEnter: () => {
      gsap.to(headerRef.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    },
  })

  const cards = document.querySelectorAll('.actor-card')
  cards.forEach((card, i) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(card, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out' })
      },
    })
  })

  ScrollTrigger.create({
    trigger: pillarsRef.value,
    start: 'top 85%',
    onEnter: () => {
      gsap.to(pillarsRef.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    },
  })
})
</script>
