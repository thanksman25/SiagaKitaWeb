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
              <div class="text-[10px] font-mono text-orange-400/70 tracking-widest uppercase">Safety Ecosystem</div>
            </div>
          </div>
          <p class="text-sm text-white/40 leading-relaxed">
            Integrated tourism emergency ecosystem connecting tourists, volunteers, and emergency agencies.
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <div class="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Quick Links</div>
          <div class="space-y-2">
            <a v-for="link in links" :key="link.label" :href="link.href" class="block text-sm text-white/50 hover:text-orange-400 transition-colors">
              {{ link.label }}
            </a>
          </div>
        </div>

        <!-- Status -->
        <div>
          <div class="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">System Status</div>
          <div class="space-y-3">
            <div v-for="status in systemStatus" :key="status.name" class="flex items-center justify-between">
              <span class="text-sm text-white/50">{{ status.name }}</span>
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full" :class="status.online ? 'bg-green-400 animate-pulse' : 'bg-red-400'"></span>
                <span class="text-xs font-mono" :class="status.online ? 'text-green-400' : 'text-red-400'">
                  {{ status.online ? 'Operational' : 'Offline' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs font-mono text-white/20">
          © 2025 SiagaKita. All Rights Reserved — HKI Registered Computer Program.
        </p>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span class="text-xs font-mono text-white/30">All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { label: 'Home', href: '#home' },
  { label: 'Documentation', href: '#about' },
  { label: 'Research Paper', href: '#paper' },
  { label: 'HKI Certificate', href: '#hki' },
  { label: 'Poster', href: '#poster' },
  { label: 'Download APK', href: '#install' },
]

const systemStatus = [
  { name: 'API Server', online: true },
  { name: 'WebSocket', online: true },
  { name: 'Database', online: true },
  { name: 'Push Notifications', online: true },
]
</script>
