<template>
  <footer class="relative pt-16 pb-8 overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
    <div class="absolute inset-0 tactical-grid opacity-10"></div>

    <div class="relative max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="relative">
              <div class="absolute inset-0 rounded-full bg-orange-500/20 blur-sm"></div>
              <img src="/logo_siagakita_transparant.png" alt="SiagaKita" class="relative h-10 w-10 object-contain" />
            </div>
            <div>
              <div class="text-lg font-bold text-white">SiagaKita</div>
              <div class="text-[10px] font-mono text-orange-400/70 tracking-widest uppercase">{{ t('footer.tagline') }}</div>
            </div>
          </div>
          <p class="text-sm text-white/40 leading-relaxed">{{ t('footer.desc') }}</p>
        </div>

        <!-- Quick links -->
        <div>
          <div class="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">{{ t('footer.quickLinks') }}</div>
          <div class="space-y-2">
            <a v-for="link in links" :key="link.key" :href="link.href" class="block text-sm text-white/50 hover:text-orange-400 transition-colors">
              {{ t(`nav.${link.key}`) }}
            </a>
          </div>
        </div>

        <!-- Status -->
        <div>
          <div class="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">{{ t('footer.systemStatus') }}</div>
          <div class="space-y-3">
            <div v-for="status in systemStatus" :key="status.name" class="flex items-center justify-between">
              <span class="text-sm text-white/50">{{ status.name }}</span>
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full" :class="status.online ? 'bg-green-400 animate-pulse' : 'bg-red-400'"></span>
                <span class="text-xs font-mono" :class="status.online ? 'text-green-400' : 'text-red-400'">
                  {{ status.online ? t('footer.operational') : t('footer.offline') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs font-mono text-white/20">{{ t('footer.copyright') }}</p>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span class="text-xs font-mono text-white/30">{{ t('footer.allSystemsOk') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLang } from '../composables/useLang.js'

const { t } = useLang()

const links = [
  { key: 'home',          href: '#home' },
  { key: 'documentation', href: '#about' },
  { key: 'paper',         href: '#paper' },
  { key: 'hki',           href: '#hki' },
  { key: 'poster',        href: '#poster' },
  { key: 'apk',           href: '#install' },
]

const systemStatus = [
  { name: 'API Server', online: true },
  { name: 'WebSocket', online: true },
  { name: 'Database', online: true },
  { name: 'Push Notifications', online: true },
]
</script>
