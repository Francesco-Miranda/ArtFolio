<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal'

const { vReveal } = useScrollReveal()
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center">

    <!-- Artist name behind the image -->
    <div class="absolute inset-0 flex items-center justify-center z-0 select-none overflow-hidden" v-reveal>
      <h1 class="text-[15vw] font-black tracking-tighter text-zinc-800/80 whitespace-nowrap uppercase">
      </h1>
    </div>

    <!-- Subject image container -->
    <div class="relative z-10 w-full h-full max-w-5xl mx-auto flex items-end justify-center pb-0" v-reveal>
      <div class="w-2/3 h-3/4 bg-transparent flex items-center justify-center">
        <!-- TODO: Add artist pic here -->
      </div>
    </div>

    <!-- Bottom gradient to blend with the next section -->
    <div class="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20"></div>
  </section>
</template>
