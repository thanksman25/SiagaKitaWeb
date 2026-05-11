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
          ECOSYSTEM DOCUMENTATION
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
          Integrated Safety <span class="text-gradient">Ecosystem</span>
        </h2>
        <p class="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
          SiagaKita is an integrated tourism emergency ecosystem that leverages real-time technology
          to connect tourists, volunteers, BASARNAS, and BPBD in a unified response platform.
        </p>
      </div>

      <!-- Ecosystem actors -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        <div
          v-for="(actor, i) in actors"
          :key="actor.title"
          ref="actorRefs"
          class="actor-card glass-card p-6 cursor-pointer group opacity-0 translate-y-8"
          :style="{ transitionDelay: `${i * 100}ms` }"
          @mouseenter="hoveredActor = i"
          @mouseleave="hoveredActor = null"
        >
          <!-- HUD corners -->
          <div class="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-orange-500/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-orange-500/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 font-black text-sm transition-all duration-300 group-hover:scale-110"
            :style="{ background: `${actor.color}20`, border: `1px solid ${actor.color}40`, color: actor.color }"
          >
            {{ actor.initials }}
          </div>

          <!-- Role badge -->
          <div class="text-[10px] font-mono uppercase tracking-widest mb-2" :style="{ color: actor.color }">
            {{ actor.role }}
          </div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{{ actor.title }}</h3>
          <p class="text-sm text-white/50 leading-relaxed">{{ actor.desc }}</p>

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
          <h3 class="text-3xl font-black text-white">Three Core <span class="text-gradient">Pillars</span></h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(pillar, i) in pillars"
            :key="pillar.title"
            class="pillar-card relative glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-500"
          >
            <!-- Glow bg -->
            <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              :style="{ background: `radial-gradient(circle at 50% 50%, ${pillar.color}10, transparent 70%)` }">
            </div>

            <!-- Icon ring -->
            <div class="relative mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center"
              :style="{ background: `${pillar.color}15`, border: `2px solid ${pillar.color}40` }">
              <div class="absolute inset-0 rounded-full animate-ping-slow opacity-30"
                :style="{ background: pillar.color, animationDuration: `${3 + i}s` }">
              </div>
              <span class="text-sm font-black relative z-10 font-mono" :style="{ color: pillar.color }">{{ pillar.abbr }}</span>
            </div>

            <div class="text-xs font-mono tracking-widest uppercase mb-3" :style="{ color: pillar.color }">
              Pillar {{ String(i + 1).padStart(2, '0') }}
            </div>
            <h4 class="text-xl font-bold text-white mb-3">{{ pillar.title }}</h4>
            <p class="text-sm text-white/55 leading-relaxed">{{ pillar.desc }}</p>

            <!-- Technical specs -->
            <div class="mt-6 space-y-2">
              <div v-for="spec in pillar.specs" :key="spec" class="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/5">
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

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref(null)
const actorRefs = ref([])
const pillarsRef = ref(null)
const hoveredActor = ref(null)

const actors = [
  {
    title: 'Tourist',
    role: 'Primary User',
    initials: 'TUR',
    color: '#FF5722',
    desc: 'App users who can report incidents and trigger SOS in under 10 seconds.',
    data: ['SOS 1-tap activation', 'Biometric ID registration', 'Real-time location share', 'Offline-capable reporting'],
  },
  {
    title: 'Volunteer',
    role: 'First Responder',
    initials: 'VOL',
    color: '#FF9800',
    desc: 'Trained volunteer teams who receive tactical push alerts and incident coordinates in real-time.',
    data: ['Push alert system', 'Incident assignment', 'Route navigation', 'Status update broadcast'],
  },
  {
    title: 'BASARNAS',
    role: 'SAR Authority',
    initials: 'SAR',
    color: '#2196F3',
    desc: 'National Search & Rescue Agency managing large-scale search and rescue operations.',
    data: ['Command dashboard', 'Multi-team dispatch', 'Resource allocation', 'After-action report'],
  },
  {
    title: 'BPBD',
    role: 'Disaster Agency',
    initials: 'BPB',
    color: '#4CAF50',
    desc: 'Regional Disaster Management Agency overseeing emergency situations across the area.',
    data: ['Regional monitoring', 'Risk zone mapping', 'Public alert system', 'Inter-agency coord'],
  },
]

const pillars = [
  {
    title: 'Zero-Friction Reporting',
    abbr: 'ZFR',
    color: '#FF5722',
    desc: 'Incident reporting is designed with minimal friction — SOS activates in under 10 seconds even without a stable internet connection.',
    specs: [
      { label: 'Response Time', value: '< 10s' },
      { label: 'Offline Mode', value: 'Active' },
      { label: 'Input Steps', value: '1-tap' },
    ],
  },
  {
    title: 'Tactical Mobilization',
    abbr: 'TM',
    color: '#FF9800',
    desc: 'An intelligent dispatch system automatically assigns the nearest volunteer team based on GPS location and capacity.',
    specs: [
      { label: 'Dispatch Speed', value: '< 30s' },
      { label: 'GPS Accuracy', value: '±5m' },
      { label: 'Team Coverage', value: 'Regional' },
    ],
  },
  {
    title: 'Real-Time Situational Awareness',
    abbr: 'RTSA',
    color: '#2196F3',
    desc: 'A centralized dashboard gives emergency agencies full visibility — all incidents, locations, and team statuses on one screen.',
    specs: [
      { label: 'Update Freq', value: '< 2s' },
      { label: 'Data Source', value: 'WebSocket' },
      { label: 'Concurrency', value: 'Multi-agency' },
    ],
  },
]

onMounted(() => {
  // Header animation
  ScrollTrigger.create({
    trigger: headerRef.value,
    start: 'top 85%',
    onEnter: () => {
      gsap.to(headerRef.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    },
  })

  // Actor cards
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

  // Pillars
  ScrollTrigger.create({
    trigger: pillarsRef.value,
    start: 'top 85%',
    onEnter: () => {
      gsap.to(pillarsRef.value, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    },
  })
})
</script>
