<script setup lang="ts">
import { computed } from 'vue'
import AppImage from './common/AppImage.vue'

const props = defineProps<{
  id: string | number
  index: string
  title: string
  image: string
  fallback: string
  category?: string
  aspect?: string
}>()

const emit = defineEmits(['focus', 'blur'])

const aspectClass = computed(() => {
  switch (props.aspect) {
    case 'portrait': return 'aspect-3/4'
    case 'landscape': return 'aspect-4/3'
    case 'square': return 'aspect-square'
    case 'wide': return 'aspect-video'
    default: return ''
  }
})

const customAspectStyle = computed(() => {
  if (!props.aspect || aspectClass.value) return {}
  return { aspectRatio: props.aspect }
})
</script>

<template>
  <div class="group/card relative flex flex-col cursor-pointer transition-all duration-700 isolate" v-reveal>

    <!-- Index Number -->
    <span
      class="absolute -top-6 -left-6 text-6xl font-black text-brand-text/20 select-none z-20 pointer-events-none font-main">
      {{ index }}
    </span>

    <!-- Image Container -->
    <div
      class="relative w-full z-10 transition-transform duration-500 ease-out group-hover/card:scale-105 bg-brand-bg shadow-2xl overflow-hidden"
      :class="aspectClass" :style="customAspectStyle" @mouseenter="emit('focus', id)" @mouseleave="emit('blur')">

      <AppImage :src="image" :fallback="fallback" class="w-full select-none z-10 relative"
        :class="aspect ? 'h-full object-cover' : 'h-auto'" />

      <div
        class="absolute inset-0 z-20 pointer-events-none opacity-0 transition-opacity duration-700 group-hover/card:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15)_0%,transparent_70%)]">
      </div>
    </div>

    <!-- Editorial Info Section -->
    <div class="mt-4 flex flex-col items-start">
      <div class="flex items-center gap-3 mb-2">
        <span class="w-8 h-px bg-brand-accent/30"></span>
        <span class="text-[10px] uppercase tracking-[0.4em] text-brand-muted font-medium">
          {{ category || 'Original Artwork' }}
        </span>
      </div>

      <h3 class="text-3xl md:text-4xl font-light tracking-tighter text-brand-text transition-colors duration-500">
        {{ title }}
      </h3>
    </div>
  </div>
</template>
