<script setup lang="ts">
import LanguageSwitcher from '@/components/debug/LanguageSwitcher.vue'
</script>

<template>
  <main class="min-h-screen bg-brand-bg font-main selection:bg-zinc-700 selection:text-white">
    <!-- Debug UI -->
    <LanguageSwitcher />

    <router-view />
  </main>
</template>
