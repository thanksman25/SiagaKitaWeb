<template>
  <section id="tabs" class="relative py-24 overflow-hidden">
    <div class="absolute inset-0 tactical-grid opacity-10"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Section header -->
      <div ref="headerRef" class="text-center mb-12 opacity-0 translate-y-8">
        <div class="pill-badge mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
          {{ t('tabs.badge') }}
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white">
          {{ t('tabs.title1') }} <span class="text-gradient">{{ t('tabs.title2') }}</span>
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
          <span>{{ t(`tabs.${tab.id}`) }}</span>
        </button>
      </div>

      <!-- Tab content container -->
      <div class="relative min-h-[500px]">
        <Transition name="tab-fade" mode="out-in">
          <!-- Paper Tab -->
          <div v-if="activeTab === 'paper'" key="paper" id="paper" class="scroll-mt-24">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <!-- PDF Viewer -->
              <div class="lg:col-span-3 flex flex-col gap-4">
                <div class="pill-badge w-fit">{{ t('tabs.paperSection.badge') }}</div>
                <h3 class="text-xl font-black text-white leading-tight">{{ t('tabs.paperSection.title') }}</h3>
                <!-- Status badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold w-fit" style="background:rgba(234,179,8,0.12);border:1px solid rgba(234,179,8,0.3);color:#FBBF24">
                  <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
                  {{ t('tabs.paperSection.statusBadge') }}
                </div>
                <!-- Embedded PDF -->
                <div class="rounded-2xl overflow-hidden border border-orange-500/20 shadow-xl shadow-black/40" style="height:680px">
                  <iframe
                    src="/SiagaKita_JSIGN_Paper_Fix%20ini.pdf#toolbar=1&navpanes=0&scrollbar=1"
                    class="w-full h-full"
                    type="application/pdf"
                    title="SiagaKita Research Paper"
                  ></iframe>
                </div>
                <!-- Download -->
                <a
                  href="/SiagaKita_JSIGN_Paper_Fix%20ini.pdf"
                  download="SiagaKita_Paper.pdf"
                  id="paper-download-btn"
                  class="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl font-semibold text-sm text-white w-fit transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
                  style="background:linear-gradient(135deg,#FF5722,#E64A19)"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  {{ t('tabs.paperSection.downloadBtn') }}
                </a>
              </div>

              <!-- Sidebar -->
              <div class="lg:col-span-2 space-y-6">
                <div class="glass-card p-6">
                  <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{{ t('tabs.paperSection.infoLabel') }}</div>
                  <div class="space-y-3">
                    <div v-for="meta in paperMeta" :key="meta.key" class="flex flex-col gap-0.5">
                      <div class="text-[10px] font-mono text-white/30 uppercase tracking-widest">{{ meta.label }}</div>
                      <div class="text-sm font-semibold" :class="meta.pending ? 'text-yellow-400' : 'text-white/80'">{{ t(`tabs.paperSection.meta.${meta.key}`) }}</div>
                    </div>
                  </div>
                </div>

                <div class="glass-card p-6">
                  <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{{ t('tabs.paperSection.keywordsLabel') }}</div>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="kw in keywords" :key="kw" class="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-white/60 border border-white/10">{{ kw }}</span>
                  </div>
                </div>

                <div class="glass-card p-6">
                  <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{{ t('tabs.paperSection.techLabel') }}</div>
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
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <!-- PDF Viewer -->
              <div class="lg:col-span-3 flex flex-col gap-4">
                <div class="pill-badge w-fit">{{ t('tabs.hkiSection.badge') }}</div>
                <h3 class="text-xl font-black text-white leading-tight">{{ t('tabs.hkiSection.title') }}</h3>
                <p class="text-white/50 text-sm">{{ t('tabs.hkiSection.subtitle') }}</p>
                <!-- Status badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold w-fit" style="background:rgba(234,179,8,0.12);border:1px solid rgba(234,179,8,0.3);color:#FBBF24">
                  <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
                  {{ t('tabs.hkiSection.statusBadge') }}
                </div>
                <!-- Embedded PDF -->
                <div class="rounded-2xl overflow-hidden border border-orange-500/20 shadow-xl shadow-black/40" style="height:680px">
                  <iframe
                    src="/HKI%20SiagaKita.pdf#toolbar=1&navpanes=0&scrollbar=1"
                    class="w-full h-full"
                    type="application/pdf"
                    title="SiagaKita HKI Certificate"
                  ></iframe>
                </div>
                <!-- Download -->
                <a
                  href="/HKI%20SiagaKita.pdf"
                  download="HKI_SiagaKita.pdf"
                  id="hki-download-btn"
                  class="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl font-semibold text-sm border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-0.5 w-fit"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  {{ t('tabs.hkiSection.downloadBtn') }}
                </a>
              </div>

              <!-- Sidebar -->
              <div class="lg:col-span-2 space-y-6">
                <!-- Progress steps -->
                <div class="glass-card p-6">
                  <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-5">{{ t('tabs.hkiSection.progressLabel') }}</div>
                  <div class="space-y-3">
                    <div v-for="(step, i) in hkiSteps" :key="i" class="flex items-center gap-3">
                      <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 transition-all"
                        :class="step.done ? 'bg-yellow-500 text-[#0A192F]' : 'border border-white/20 text-white/30'">
                        <svg v-if="step.done" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                        <span v-else class="text-[10px]">{{ i + 1 }}</span>
                      </div>
                      <span class="text-sm font-mono" :class="step.done ? 'text-yellow-400' : 'text-white/25'">{{ t('tabs.hkiSection.steps')[i] }}</span>
                    </div>
                  </div>
                </div>

                <!-- Info fields -->
                <div class="glass-card p-6">
                  <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{{ t('tabs.hkiSection.infoLabel') }}</div>
                  <div class="space-y-3">
                    <div v-for="field in hkiFields" :key="field.key" class="flex flex-col gap-0.5">
                      <div class="text-[10px] font-mono text-white/30 uppercase tracking-widest">{{ field.label }}</div>
                      <div class="text-sm text-white/70">{{ t(`tabs.hkiSection.fields.${field.key}`) }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Poster Tab -->
          <div v-else-if="activeTab === 'poster'" key="poster" id="poster" class="scroll-mt-24">
            <div class="max-w-3xl mx-auto">
              <div class="pill-badge mb-6 mx-auto w-fit">{{ t('tabs.posterSection.badge') }}</div>

              <!-- Poster image frame -->
              <div
                class="relative rounded-2xl overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/10 cursor-zoom-in group"
                @click="posterZoomed = true"
              >
                <img
                  src="/Poster_SiagaKita.png"
                  alt="SiagaKita Research Poster"
                  class="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-medium text-white">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                    {{ t('tabs.posterSection.hoverHint') }}
                  </div>
                </div>
              </div>

              <!-- Lightbox / Zoom modal -->
              <Transition name="zoom-fade">
                <div
                  v-if="posterZoomed"
                  class="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
                  @click.self="posterZoomed = false"
                >
                  <div class="relative max-w-5xl w-full my-4">
                    <!-- Close button -->
                    <button
                      @click="posterZoomed = false"
                      class="sticky top-2 float-right z-10 mb-2 w-9 h-9 rounded-full bg-white/10 hover:bg-orange-500/80 border border-white/20 flex items-center justify-center transition-all duration-200"
                    >
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>

                    <img
                      src="/Poster_SiagaKita.png"
                      alt="SiagaKita Research Poster — Full Size"
                      class="w-full h-auto rounded-xl shadow-2xl"
                    />

                    <p class="text-center text-white/30 text-xs font-mono mt-3">{{ t('tabs.posterSection.closeHint') }}</p>
                  </div>
                </div>
              </Transition>

              <!-- Download button -->
              <div class="flex justify-center mt-6">
                <a
                  href="/Poster_SiagaKita.png"
                  download="Poster_SiagaKita.png"
                  id="poster-download-btn"
                  class="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  {{ t('tabs.posterSection.downloadBtn') }}
                </a>
              </div>
            </div>
          </div>


          <!-- Install Tab -->
          <div v-else-if="activeTab === 'install'" key="install" id="install" class="scroll-mt-24">
            <div class="max-w-3xl mx-auto text-center">
              <div class="pill-badge mb-8 mx-auto w-fit">{{ t('tabs.installSection.badge') }}</div>

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

              <h3 class="text-3xl font-black text-white mb-3">{{ t('tabs.installSection.title') }}</h3>
              <p class="text-white/50 mb-8 max-w-md mx-auto">{{ t('tabs.installSection.desc') }}</p>

              <!-- App info grid -->
              <div class="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-10">
                <div v-for="info in appInfo" :key="info.label" class="glass-card p-4">
                  <div class="text-lg font-black text-gradient">{{ info.value }}</div>
                  <div class="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">{{ info.label }}</div>
                </div>
              </div>

              <!-- Download button -->
              <a
                href="https://github.com/thanksman25/SiagaKitaWeb/releases/download/V1.0/SiagaKita.apk"
                download="SiagaKita.apk"
                id="apk-download-btn"
                class="btn-download inline-flex items-center gap-3 text-lg"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m-11.046 0a.998.998 0 01-.999-.999.998.998 0 01.999-.999.998.998 0 01.999.999.998.998 0 01-.999.999m11.405-6.02l1.997-3.459a.416.416 0 00-.152-.568.416.416 0 00-.568.152l-2.022 3.503A11.306 11.306 0 0012 7.851a11.306 11.306 0 00-5.137 1.099L4.841 5.447a.416.416 0 00-.568-.152.416.416 0 00-.152.568l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.344-4.102-2.689-7.574-6.118-9.44"/>
                </svg>
                {{ t('tabs.installSection.downloadBtn') }}
              </a>

              <p class="text-xs font-mono text-white/30 mt-4">{{ t('tabs.installSection.buildInfo') }}</p>

              <!-- Install steps -->
              <div class="mt-12 text-left glass-card p-6 max-w-md mx-auto">
                <div class="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{{ t('tabs.installSection.guideLabel') }}</div>
                <div class="space-y-3">
                  <div v-for="(step, i) in installSteps" :key="i" class="flex items-start gap-3">
                    <div class="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0 text-xs font-mono text-orange-400">{{ i + 1 }}</div>
                    <span class="text-sm text-white/60">{{ t('tabs.installSection.steps')[i] }}</span>
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

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

const TAB_IDS = ['paper', 'hki', 'poster', 'install']

const activateFromHash = () => {
  const hash = window.location.hash.replace('#', '')
  if (TAB_IDS.includes(hash)) {
    activeTab.value = hash
    // Scroll the tabs section into view
    const section = document.getElementById('tabs')
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const setTab = (id) => {
  activeTab.value = id
  history.replaceState(null, '', `#${id}`)
}

const paperMeta = [
  { key: 'authors',  label: 'Authors',  pending: false },
  { key: 'category', label: 'Category', pending: false },
  { key: 'platform', label: 'Platform', pending: false },
  { key: 'status',   label: 'Status',   pending: true  },
]

const keywords = [
  'Emergency Response', 'Tourism Safety', 'Real-Time Tracking',
  'Flutter', 'Golang', 'WebSocket', 'GPS', 'SOS System', 'Biometric'
]

const techStack = [
  { name: 'Flutter', role: 'Mobile', color: '#42A5F5' },
  { name: 'Golang', role: 'Backend', color: '#00ACD7' },
  { name: 'PostgreSQL', role: 'Database', color: '#AB47BC' },
  { name: 'WebSocket', role: 'Realtime', color: '#FF7043' },
  { name: 'Firebase', role: 'Notifications', color: '#FFA726' },
]

const hkiFields = [
  { key: 'programName', label: 'Program Name' },
  { key: 'type',        label: 'Type' },
  { key: 'year',        label: 'Year First Published' },
  { key: 'creator',     label: 'Creator' },
  { key: 'holder',      label: 'Copyright Holder' },
  { key: 'status',      label: 'Status' },
]

const hkiSteps = [
  { label: 'Draft', done: true },
  { label: 'Submitted', done: true },
  { label: 'Verified', done: true },
  { label: 'Review', done: false },
  { label: 'Issued', done: false },
]

const posterFeatures = [
  { title: 'SOS in 10 Seconds', desc: '1-tap emergency trigger' },
  { title: 'Biometric Ledger', desc: 'Victim ID system' },
  { title: 'GPS Tracking', desc: 'Real-time location' },
  { title: 'Multi-Agency', desc: 'Coordinated response' },
]

const archLayers = ['Flutter App', 'Golang API', 'WebSocket', 'PostgreSQL', 'Firebase']
const archColors = ['#42A5F5', '#00ACD7', '#FF7043', '#AB47BC', '#FFA726']

const appInfo = [
  { value: 'v2.0', label: 'Version' },
  { value: '~58MB', label: 'Size' },
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
  // Activate tab from URL hash on page load
  activateFromHash()
  window.addEventListener('hashchange', activateFromHash)

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

onUnmounted(() => {
  window.removeEventListener('hashchange', activateFromHash)
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
