<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  src: string
  fallback: string
  alt?: string
}>()

const currentSrc = ref(props.src)
const hasError = ref(false)

// Watch for src changes to reset error state
watch(() => props.src, (newSrc) => {
  currentSrc.value = newSrc
  hasError.value = false
})

const handleError = () => {
  if (!hasError.value) {
    hasError.value = true
    currentSrc.value = props.fallback
  }
}
</script>

<template>
  <img 
    :src="currentSrc" 
    :alt="alt || ''"
    @error="handleError"
    v-bind="$attrs"
  />
</template>
