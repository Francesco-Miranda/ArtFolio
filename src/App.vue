<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import LanguageSwitcher from '@/components/debug/LanguageSwitcher.vue'
</script>

<template>
  <main class="min-h-screen bg-brand-bg font-main selection:bg-zinc-700 selection:text-white">
    <!-- Debug UI -->
    <LanguageSwitcher />

    <HeroSection />
    <AboutSection />

    <!-- Works section -->
    <section class="w-full min-h-screen bg-brand-bg flex items-center justify-center border-t border-brand-border">
      <div class="text-center text-zinc-600" v-reveal>
        <p class="uppercase tracking-widest text-sm">{{ $t('works.title') }}</p>
        <p class="text-xs mt-2 opacity-50">{{ $t('works.status') }}</p>
      </div>
    </section>
  </main>
</template>
