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
          <span>{{ tab.icon }}</span>
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
                <div class="pill-badge mb-6">📄 RESEARCH PAPER</div>
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
                      Penelitian ini mempresentasikan SiagaKita, sebuah ekosistem respons darurat pariwisata yang mengintegrasikan 
                      pelaporan insiden real-time, pelacakan GPS, dan koordinasi multi-agensi. Sistem ini dirancang untuk menjembatani 
                      kesenjangan komunikasi antara wisatawan, relawan, BASARNAS, dan BPBD. Menggunakan arsitektur Flutter (mobile), 
                      Django REST (backend), dan WebSocket untuk komunikasi real-time, SiagaKita menghadirkan SOS 10-detik, 
                      Biometric Ledger untuk identifikasi korban, dan dashboard taktis untuk agen darurat.
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
                        <span class="text-lg">{{ tech.icon }}</span>
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
              <div class="pill-badge mb-6">🏅 HAK KEKAYAAN INTELEKTUAL</div>
              <h3 class="text-2xl font-black text-white mb-2">Sertifikat HKI</h3>
              <p class="text-white/50 text-sm mb-8">Hak Cipta Jenis Program Komputer — Republik Indonesia</p>

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
                      <div class="text-xs font-mono text-white/30">No. Pencatatan</div>
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
                    <div class="w-16 h-16 rounded-full border-2 border-orange-500/40 flex items-center justify-center text-3xl animate-float">
                      🔏
                    </div>
                    <div>
                      <div class="text-sm font-bold text-white">Terdaftar & Sah</div>
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
                  Unduh Sertifikat HKI
                </a>
              </div>
            </div>
          </div>

          <!-- Poster Tab -->
          <div v-else-if="activeTab === 'poster'" key="poster" id="poster" class="scroll-mt-24">
            <div class="max-w-4xl mx-auto">
              <div class="pill-badge mb-6 mx-auto w-fit">🖼️ RESEARCH POSTER</div>

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
                    <div v-for="feat in posterFeatures" :key="feat.title" class="glass rounded-xl p-4 text-center">
                      <div class="text-3xl mb-2">{{ feat.icon }}</div>
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
                    {{ posterZoomed ? 'Klik untuk zoom out' : 'Klik untuk zoom in' }}
                  </div>
                </div>
              </div>

              <!-- Zoomed modal -->
              <Transition name="zoom-fade">
                <div v-if="posterZoomed" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" @click="posterZoomed = false">
                  <div class="max-w-4xl w-full glass-card p-4">
                    <div class="text-center text-white/50 text-sm mb-4">Klik di luar untuk menutup</div>
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
              <div class="pill-badge mb-8 mx-auto w-fit">📱 ANDROID APPLICATION</div>

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
                Unduh aplikasi SiagaKita untuk perangkat Android. Tersedia sebagai APK Release yang siap diinstal.
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
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.31.07 2.2.74 2.96.8 1.12-.24 2.19-.93 3.39-.84 1.44.12 2.53.72 3.24 1.8-2.96 1.77-2.52 5.66.42 6.72-.5 1.35-1.16 2.69-2.01 4.4zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download APK — Android
              </a>

              <p class="text-xs font-mono text-white/30 mt-4">Flutter Release Build • Requires Android 8.0+</p>

              <!-- Install steps -->
              <div class="mt-12 text-left glass-card p-6 max-w-md mx-auto">
                <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Cara Install</div>
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
  { id: 'paper', label: 'Submit Paper', icon: '📄' },
  { id: 'hki', label: 'HKI Certificate', icon: '🏅' },
  { id: 'poster', label: 'Poster', icon: '🖼️' },
  { id: 'install', label: 'Install App', icon: '📱' },
]

const setTab = (id) => {
  activeTab.value = id
  // Scroll to section if needed
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const paperMeta = [
  { label: 'Authors', value: 'Tim SiagaKita, 2025' },
  { label: 'Category', value: 'Applied Technology' },
  { label: 'Platform', value: 'Flutter + Django' },
  { label: 'Status', value: 'Published' },
]

const keywords = [
  'Emergency Response', 'Tourism Safety', 'Real-Time Tracking',
  'Flutter', 'Django REST', 'WebSocket', 'GPS', 'SOS System', 'Biometric'
]

const techStack = [
  { name: 'Flutter', icon: '📱', role: 'Mobile', color: '#42A5F5' },
  { name: 'Django', icon: '🐍', role: 'Backend', color: '#66BB6A' },
  { name: 'PostgreSQL', icon: '🐘', role: 'Database', color: '#AB47BC' },
  { name: 'WebSocket', icon: '⚡', role: 'Realtime', color: '#FF7043' },
  { name: 'Firebase', icon: '🔥', role: 'Notifications', color: '#FFA726' },
]

const hkiFields = [
  { label: 'Nama Program', value: 'SiagaKita — Integrated Emergency Response System' },
  { label: 'Jenis', value: 'Program Komputer (Software Application)' },
  { label: 'Tahun Pertama Kali Diumumkan', value: '2025' },
  { label: 'Pencipta', value: 'Tim SiagaKita' },
  { label: 'Pemegang Hak Cipta', value: 'Tim SiagaKita' },
  { label: 'Status', value: 'Terdaftar & Berlaku' },
]

const posterFeatures = [
  { icon: '🆘', title: 'SOS 10 Detik', desc: '1-tap emergency' },
  { icon: '🧬', title: 'Biometric Ledger', desc: 'Victim ID system' },
  { icon: '📍', title: 'GPS Tracking', desc: 'Real-time location' },
  { icon: '📡', title: 'Multi-Agency', desc: 'Coordinated response' },
]

const archLayers = ['Flutter App', 'Django API', 'WebSocket', 'PostgreSQL', 'Firebase']
const archColors = ['#42A5F5', '#66BB6A', '#FF7043', '#AB47BC', '#FFA726']

const appInfo = [
  { value: 'v2.0', label: 'Version' },
  { value: '~28MB', label: 'Size' },
  { value: 'Free', label: 'Price' },
]

const installSteps = [
  'Unduh file APK dari tombol di atas',
  'Buka Pengaturan → Keamanan → Aktifkan "Sumber Tidak Dikenal"',
  'Temukan file APK di folder Downloads',
  'Ketuk file APK dan ikuti petunjuk instalasi',
  'Buka SiagaKita dan daftarkan akun Anda',
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
