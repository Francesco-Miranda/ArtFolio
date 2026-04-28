<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

const { vReveal } = useScrollReveal()
</script>

<template>
  <section
    class="w-full min-h-screen bg-brand-bg text-brand-text py-32 px-6 flex flex-col items-center justify-center relative z-20">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-5xl font-light mb-8 tracking-tight" v-reveal v-html="$t('about.heading')">
      </h2>

      <p class="text-lg md:text-xl text-brand-muted leading-relaxed font-light mb-12" v-reveal>
        {{ $t('about.description') }}
      </p>

      <!-- Separator -->
      <div class="w-12 h-px bg-brand-accent mx-auto" v-reveal></div>
    </div>
  </section>
</template>
