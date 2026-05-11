<template>
  <section id="tabs" class="relative py-24 overflow-hidden">
    <div class="absolute inset-0 tactical-grid opacity-10"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Section header -->
      <div ref="headerRef" class="text-center mb-12 opacity-0 translate-y-8">
        <div class="pill-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          RESEARCH & RESOURCES
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white">
          Explore <span class="text-gradient">SiagaKita</span>
        </h2>
      </div>

      <!-- Tab navigation -->
      <div ref="tabsRef" class="flex flex-wrap justify-center gap-3 mb-12 opacity-0">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :id="`tab-btn-${tab.id}`"
          class="tab-btn flex items-center gap-2"
          :class="{ active: activeTab === tab.id }"
          @click="setTab(tab.id)"
        >
          <component :is="'span'" v-html="tab.iconSvg" class="w-4 h-4 flex-shrink-0"></component>
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- Tab content container -->
      <div class="relative min-h-[500px]">
        <Transition name="tab-fade" mode="out-in">
          <!-- Paper Tab -->
          <div v-if="activeTab === 'paper'" key="paper" id="paper" class="scroll-mt-24">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <!-- Main card -->
              <div class="lg:col-span-3 glass-card p-8 hud-border group">
                <div class="pill-badge mb-6">RESEARCH PAPER</div>
                <h3 class="text-2xl font-black text-white mb-3 leading-tight">
                  SiagaKita: Integrated Tourism Emergency Response &amp; Real-Time Tracking Ecosystem
                </h3>
                <p class="text-sm font-mono text-orange-400/70 mb-6">
                  Journal of Applied Technology and Innovation • 2025
                </p>

                <div class="space-y-4 mb-8">
                  <div>
                    <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Abstract</div>
                    <p class="text-white/70 text-sm leading-relaxed">
                      This paper presents SiagaKita, an integrated tourism emergency response ecosystem that unifies real-time
                      incident reporting, GPS tracking, and multi-agency coordination. Designed to bridge the communication gap
                      between tourists, volunteers, BASARNAS, and BPBD, SiagaKita is built on Flutter (mobile), Django REST
                      (backend), and WebSocket for real-time data. Key features include a 10-second SOS trigger, a Biometric
                      Ledger for victim identification, and a tactical dashboard for emergency agencies.
                    </p>
                  </div>

                  <div class="grid grid-cols-2 gap-4 pt-2">
                    <div v-for="meta in paperMeta" :key="meta.label" class="bg-white/5 rounded-xl p-3">
                      <div class="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">{{ meta.label }}</div>
                      <div class="text-sm font-semibold text-white">{{ meta.value }}</div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  id="paper-download-btn"
                  class="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
                  style="background: linear-gradient(135deg, #FF5722, #E64A19);"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Download Full Paper (PDF)
                </a>
              </div>

              <!-- Keywords & tech stack sidebar -->
              <div class="lg:col-span-2 space-y-6">
                <div class="glass-card p-6">
                  <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Keywords</div>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="kw in keywords" :key="kw" class="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-white/60 border border-white/10">{{ kw }}</span>
                  </div>
                </div>

                <div class="glass-card p-6">
                  <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Tech Stack</div>
                  <div class="space-y-3">
                    <div v-for="tech in techStack" :key="tech.name" class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" :style="{ background: tech.color }"></span>
                        <span class="text-sm text-white/70">{{ tech.name }}</span>
                      </div>
                      <span class="text-xs font-mono px-2 py-0.5 rounded-full" :style="{ background: `${tech.color}20`, color: tech.color }">{{ tech.role }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- HKI Tab -->
          <div v-else-if="activeTab === 'hki'" key="hki" id="hki" class="scroll-mt-24">
            <div class="glass-card p-8 max-w-4xl mx-auto">
              <div class="pill-badge mb-6">INTELLECTUAL PROPERTY CERTIFICATE</div>
              <h3 class="text-2xl font-black text-white mb-2">HKI Certificate</h3>
              <p class="text-white/50 text-sm mb-8">Copyright of Computer Program — Republic of Indonesia</p>

              <!-- Certificate card mockup -->
              <div class="relative rounded-2xl overflow-hidden border border-orange-500/30 bg-gradient-to-br from-navy-700 to-navy-900 p-1 mb-8">
                <div class="rounded-xl bg-gradient-to-br from-[#0D2137] to-[#0A192F] p-8 md:p-12">
                  <!-- Certificate header -->
                  <div class="flex items-start justify-between mb-8">
                    <div>
                      <div class="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Republik Indonesia</div>
                      <div class="text-xs font-mono text-white/30 uppercase tracking-widest">Kementerian Hukum dan HAM</div>
                    </div>
                    <div class="text-right">
                      <div class="text-xs font-mono text-orange-400/70">EC00 2025</div>
                      <div class="text-xs font-mono text-white/30">Registration No.</div>
                    </div>
                  </div>

                  <div class="text-center mb-8">
                    <div class="text-2xl font-black text-white mb-1">SERTIFIKAT PENCATATAN</div>
                    <div class="text-sm font-mono text-orange-400">HAK CIPTA PROGRAM KOMPUTER</div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div v-for="field in hkiFields" :key="field.label" class="border-b border-white/10 pb-3">
                      <div class="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">{{ field.label }}</div>
                      <div class="text-sm text-white/80">{{ field.value }}</div>
                    </div>
                  </div>

                  <div class="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                    <div class="w-16 h-16 rounded-full border-2 border-orange-500/40 flex items-center justify-center animate-float">
                      <svg class="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div>
                      <div class="text-sm font-bold text-white">Registered &amp; Valid</div>
                      <div class="text-xs font-mono text-white/40">Digital Certificate • 2025</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-center">
                <a
                  href="#"
                  id="hki-download-btn"
                  class="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition-all duration-300"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Download HKI Certificate
                </a>
              </div>
            </div>
          </div>

          <!-- Poster Tab -->
          <div v-else-if="activeTab === 'poster'" key="poster" id="poster" class="scroll-mt-24">
            <div class="max-w-4xl mx-auto">
              <div class="pill-badge mb-6 mx-auto w-fit">RESEARCH POSTER</div>

              <!-- Poster frame -->
              <div class="relative rounded-2xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/10 cursor-zoom-in" @click="posterZoomed = !posterZoomed">
                <!-- Poster content as styled div -->
                <div class="bg-gradient-to-br from-navy-900 via-navy-800 to-[#1a0a00] p-8 md:p-12">
                  <!-- Poster header -->
                  <div class="text-center mb-8 border-b border-orange-500/30 pb-8">
                    <div class="flex items-center justify-center gap-3 mb-4">
                      <img src="/logo_siagakita_transparant.png" alt="Logo" class="w-12 h-12 object-contain" />
                      <h2 class="text-3xl font-black text-white">SiagaKita</h2>
                    </div>
                    <p class="text-orange-400 font-semibold text-lg">Integrated Tourism Emergency Response</p>
                    <p class="text-white/50 text-sm">& Real-Time Tracking Ecosystem</p>
                  </div>

                  <!-- Feature grid -->
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div v-for="(feat, fi) in posterFeatures" :key="feat.title" class="glass rounded-xl p-4 text-center">
                      <div class="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center mx-auto mb-2 text-xs font-mono font-bold text-orange-400">{{ String(fi + 1).padStart(2, '0') }}</div>
                      <div class="text-xs font-bold text-white">{{ feat.title }}</div>
                      <div class="text-[10px] text-white/40 mt-1">{{ feat.desc }}</div>
                    </div>
                  </div>

                  <!-- Architecture -->
                  <div class="border border-white/10 rounded-xl p-6">
                    <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 text-center">System Architecture</div>
                    <div class="flex items-center justify-center gap-2 flex-wrap">
                      <div v-for="(layer, i) in archLayers" :key="layer" class="flex items-center gap-2">
                        <div class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold" :style="{ background: `${archColors[i]}20`, color: archColors[i], border: `1px solid ${archColors[i]}40` }">
                          {{ layer }}
                        </div>
                        <span v-if="i < archLayers.length - 1" class="text-orange-500/40 text-xs">→</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Zoom overlay hint -->
                <div class="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div class="opacity-0 hover:opacity-100 transition-opacity duration-300 glass px-4 py-2 rounded-xl text-sm text-white">
                    {{ posterZoomed ? 'Click to zoom out' : 'Click to zoom in' }}
                  </div>
                </div>
              </div>

              <!-- Zoomed modal -->
              <Transition name="zoom-fade">
                <div v-if="posterZoomed" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" @click="posterZoomed = false">
                  <div class="max-w-4xl w-full glass-card p-4">
                    <div class="text-center text-white/50 text-sm mb-4">Click outside to close</div>
                    <div class="bg-gradient-to-br from-navy-900 to-navy-800 p-8 rounded-xl">
                      <p class="text-center text-white/60 text-sm">Full poster visualization would appear here. Replace with actual poster image.</p>
                    </div>
                  </div>
                </div>
              </Transition>

              <div class="flex justify-center mt-6">
                <a href="#" id="poster-download-btn" class="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition-all duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download Poster (High-Res)
                </a>
              </div>
            </div>
          </div>

          <!-- Install Tab -->
          <div v-else-if="activeTab === 'install'" key="install" id="install" class="scroll-mt-24">
            <div class="max-w-3xl mx-auto text-center">
              <div class="pill-badge mb-8 mx-auto w-fit">ANDROID APPLICATION</div>

              <!-- Phone mockup area -->
              <div class="relative inline-block mb-12 animate-float">
                <div class="w-48 h-48 rounded-full mx-auto flex items-center justify-center relative" style="background: radial-gradient(circle, rgba(255,87,34,0.2) 0%, rgba(10,25,47,0) 70%);">
                  <div class="absolute inset-0 rounded-full border border-orange-500/20 animate-ping-slow" style="animation-duration: 2s;"></div>
                  <div class="absolute inset-4 rounded-full border border-orange-500/10 animate-ping-slow" style="animation-duration: 2s; animation-delay: 0.7s;"></div>
                  <div class="w-24 h-24 rounded-3xl glass-card flex items-center justify-center shadow-2xl shadow-orange-500/20">
                    <img src="/logo_siagakita_transparant.png" alt="App Icon" class="w-16 h-16 object-contain" />
                  </div>
                </div>
              </div>

              <h3 class="text-3xl font-black text-white mb-3">SiagaKita for Android</h3>
              <p class="text-white/50 mb-8 max-w-md mx-auto">
                Download SiagaKita for your Android device. Available as a Release APK, ready to install.
              </p>

              <!-- App info grid -->
              <div class="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-10">
                <div v-for="info in appInfo" :key="info.label" class="glass-card p-4">
                  <div class="text-lg font-black text-gradient">{{ info.value }}</div>
                  <div class="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">{{ info.label }}</div>
                </div>
              </div>

              <!-- Download button -->
              <a
                href="#"
                id="apk-download-btn"
                class="btn-download inline-flex items-center gap-3 text-lg"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m-11.046 0a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m11.405-6.02l1.997-3.459a.416.416 0 00-.152-.568.416.416 0 00-.568.152l-2.022 3.503A11.306 11.306 0 0012 7.851a11.306 11.306 0 00-5.137 1.099L4.841 5.447a.416.416 0 00-.568-.152.416.416 0 00-.152.568l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.344-4.102-2.689-7.574-6.118-9.44"/>
                </svg>
                Download APK — Android
              </a>

              <p class="text-xs font-mono text-white/30 mt-4">Flutter Release Build • Requires Android 8.0+</p>

              <!-- Install steps -->
              <div class="mt-12 text-left glass-card p-6 max-w-md mx-auto">
                <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Installation Guide</div>
                <div class="space-y-3">
                  <div v-for="(step, i) in installSteps" :key="i" class="flex items-start gap-3">
                    <div class="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0 text-xs font-mono text-orange-400">{{ i + 1 }}</div>
                    <span class="text-sm text-white/60">{{ step }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
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
const tabsRef = ref(null)
const activeTab = ref('paper')
const posterZoomed = ref(false)

const tabs = [
  {
    id: 'paper', label: 'Submit Paper',
    iconSvg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
  },
  {
    id: 'hki', label: 'HKI Certificate',
    iconSvg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>',
  },
  {
    id: 'poster', label: 'Poster',
    iconSvg: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
  },
  {
    id: 'install', label: 'Install App',
    iconSvg: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.341a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m-11.046 0a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m11.405-6.02l1.997-3.459a.416.416 0 00-.152-.568.416.416 0 00-.568.152l-2.022 3.503A11.306 11.306 0 0012 7.851a11.306 11.306 0 00-5.137 1.099L4.841 5.447a.416.416 0 00-.568-.152.416.416 0 00-.152.568l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.344-4.102-2.689-7.574-6.118-9.44"/></svg>',
  },
]

const setTab = (id) => {
  activeTab.value = id
  // Scroll to section if needed
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const paperMeta = [
  { label: 'Authors', value: 'SiagaKita Team, 2025' },
  { label: 'Category', value: 'Applied Technology' },
  { label: 'Platform', value: 'Flutter + Django' },
  { label: 'Status', value: 'Published' },
]

const keywords = [
  'Emergency Response', 'Tourism Safety', 'Real-Time Tracking',
  'Flutter', 'Django REST', 'WebSocket', 'GPS', 'SOS System', 'Biometric'
]

const techStack = [
  { name: 'Flutter', role: 'Mobile', color: '#42A5F5' },
  { name: 'Django', role: 'Backend', color: '#66BB6A' },
  { name: 'PostgreSQL', role: 'Database', color: '#AB47BC' },
  { name: 'WebSocket', role: 'Realtime', color: '#FF7043' },
  { name: 'Firebase', role: 'Notifications', color: '#FFA726' },
]

const hkiFields = [
  { label: 'Program Name', value: 'SiagaKita — Integrated Emergency Response System' },
  { label: 'Type', value: 'Computer Program (Software Application)' },
  { label: 'Year First Published', value: '2025' },
  { label: 'Creator', value: 'SiagaKita Team' },
  { label: 'Copyright Holder', value: 'SiagaKita Team' },
  { label: 'Status', value: 'Registered &amp; Active' },
]

const posterFeatures = [
  { title: 'SOS in 10 Seconds', desc: '1-tap emergency trigger' },
  { title: 'Biometric Ledger', desc: 'Victim ID system' },
  { title: 'GPS Tracking', desc: 'Real-time location' },
  { title: 'Multi-Agency', desc: 'Coordinated response' },
]

const archLayers = ['Flutter App', 'Django API', 'WebSocket', 'PostgreSQL', 'Firebase']
const archColors = ['#42A5F5', '#66BB6A', '#FF7043', '#AB47BC', '#FFA726']

const appInfo = [
  { value: 'v2.0', label: 'Version' },
  { value: '~28MB', label: 'Size' },
  { value: 'Free', label: 'Price' },
]

const installSteps = [
  'Download the APK file using the button above',
  'Open Settings → Security → Enable "Unknown Sources"',
  'Locate the APK file in your Downloads folder',
  'Tap the APK file and follow the installation prompts',
  'Open SiagaKita and create your account',
]

onMounted(() => {
  ScrollTrigger.create({
    trigger: headerRef.value,
    start: 'top 85%',
    onEnter: () => {
      gsap.to(headerRef.value, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    },
  })
  ScrollTrigger.create({
    trigger: tabsRef.value,
    start: 'top 90%',
    onEnter: () => {
      gsap.to(tabsRef.value, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.2 })
    },
  })
})
</script>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: all 0.3s ease;
}
.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}
</style>
