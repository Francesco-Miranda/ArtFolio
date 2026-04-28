<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import LanguageSwitcher from '@/components/debug/LanguageSwitcher.vue'
</script>

<template>
  <main class="min-h-screen bg-[#0a0a0a] font-sans selection:bg-zinc-700 selection:text-white">
    <!-- Debug UI -->
    <LanguageSwitcher />

    <HeroSection />
    <AboutSection />

    <!-- Works section -->
    <section class="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center border-t border-zinc-800/50">
      <div class="text-center text-zinc-600" v-reveal>
        <p class="uppercase tracking-widest text-sm">{{ $t('works.title') }}</p>
        <p class="text-xs mt-2 opacity-50">{{ $t('works.status') }}</p>
      </div>
    </section>
  </main>
</template>
