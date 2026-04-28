<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <div
    class="fixed top-6 right-6 z-9999 flex gap-2 p-2 bg-zinc-900/80 border border-zinc-800 rounded-full backdrop-blur-md shadow-2xl">
    <button @click="toggleLanguage('it')" :class="[
      'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300',
      locale === 'it' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-400 hover:text-zinc-200'
    ]">
      IT
    </button>
    <button @click="toggleLanguage('en')" :class="[
      'px-3 py-1 rounded-full text-xs font-medium transition-all duration-300',
      locale === 'en' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-400 hover:text-zinc-200'
    ]">
      EN
    </button>
  </div>
</template>
