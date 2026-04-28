<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
</script>

<template>
  <main class="min-h-screen bg-[#0a0a0a] font-sans selection:bg-zinc-700 selection:text-white">
    <HeroSection />
    <AboutSection />

    <!-- Works section -->
    <section class="w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center border-t border-zinc-800/50">
      <div class="text-center text-zinc-600">
        <!-- Works -->
      </div>
    </section>
  </main>
</template>
