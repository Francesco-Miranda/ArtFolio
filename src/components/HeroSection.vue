<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '@/composables/useScrollReveal'
import AppImage from '@/components/common/AppImage.vue'

const { t } = useI18n()
const { vReveal } = useScrollReveal()

const name = computed(() => t('hero.name'))

// Calculate ideal font size based on the longest word to prevent overflow
const dynamicFontSize = computed(() => {
  if (!name.value) return '15vw'
  const words = name.value.split(' ')
  const longestWord = Math.max(...words.map(w => w.length))
  const size = 100 / (longestWord * 0.75)

  return Math.min(Math.max(size, 8), 20) + 'vw'
})
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden bg-brand-bg flex items-center justify-center">

    <div class="absolute inset-0 flex items-center justify-center z-0 select-none overflow-hidden" v-reveal>
      <h1 class="font-black tracking-wide text-brand-text/5 text-center uppercase leading-[0.8] px-2"
        :style="{ fontSize: dynamicFontSize }">
        {{ name }}
      </h1>
    </div>

    <!-- Subject image container -->
    <div class="relative z-10 w-full h-full max-w-5xl mx-auto flex items-end justify-center pb-0" v-reveal>
      <div class="w-2/3 h-3/4 bg-transparent flex items-center justify-center">
        <AppImage src="/private/artist.png" fallback="/placeholders/artist.png"
          class="max-h-full w-auto object-contain select-none" />
      </div>
    </div>

    <!-- Bottom gradient to blend with the next section -->
    <div class="absolute bottom-0 w-full h-32 bg-linear-to-t from-brand-bg to-transparent z-20"></div>
  </section>
</template>
