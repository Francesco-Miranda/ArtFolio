<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import WorkCard from '@/components/WorkCard.vue'

const focusedId = ref<string | number | null>(null)

const works = [
  { id: 1, index: '01', title: 'Shattered Silence', image: '/private/work_1.png', fallback: '/placeholders/work_1.png', category: 'Oil on Canvas' }, // No aspect -> automatic
  { id: 2, index: '02', title: 'Golden Echoes', image: '/private/work_2.png', fallback: '/placeholders/work_1.png', category: 'Digital Study', aspect: 'wide' },
  { id: 3, index: '03', title: 'Deep Resonance', image: '/private/work_3.png', fallback: '/placeholders/work_1.png', category: 'Abstract Series', aspect: '21/9' }, // Custom aspect
  { id: 4, index: '04', title: 'Eternal Flow', image: '/private/work_4.png', fallback: '/placeholders/work_1.png', category: 'Multimedia', aspect: 'landscape' },
  { id: 5, index: '05', title: 'Abstract Void', image: '/private/work_1.png', fallback: '/placeholders/work_1.png', category: 'Modern Art' }, // No aspect -> automatic
  { id: 6, index: '06', title: 'Urban Echo', image: '/private/work_2.png', fallback: '/placeholders/work_1.png', category: 'Photography', aspect: 'square' },
]

const columns = computed(() => {
  const cols: any[][] = [[], [], []]
  works.forEach((work, i) => {
    cols[i % 3].push(work)
  })
  return cols
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeroSection />
    <AboutSection />

    <!-- Works section -->
    <section class="w-full pt-16 pb-32 px-6 bg-brand-bg border-t border-brand-border">
      <div class="max-w-7xl mx-auto">
        <div class="mb-24 text-center" v-reveal>
          <h2 class="text-sm uppercase tracking-[0.4em] text-brand-text font-bold mb-4 opacity-90">{{ $t('works.title')
            }}</h2>
          <div class="w-px h-12 bg-brand-border mx-auto"></div>
        </div>

        <!-- Works  Grid -->
        <div class="flex flex-col md:flex-row gap-8 px-4 md:px-0">

          <div v-for="(col, colIndex) in columns" :key="colIndex" class="flex-1 flex flex-col gap-12 md:gap-20"
            :class="{ 'md:pt-16': colIndex === 1, 'md:pt-32': colIndex === 2 }">

            <div v-for="work in col" :key="work.id" class="transition-all duration-700"
              :class="[focusedId !== null && focusedId !== work.id ? 'opacity-20 blur-xs' : 'opacity-100 blur-0']"
              v-reveal>
              <WorkCard v-bind="work" @focus="focusedId = $event" @blur="focusedId = null" />
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
