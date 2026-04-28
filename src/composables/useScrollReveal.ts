import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useScrollReveal(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const elementsToReveal: Ref<HTMLElement[]> = ref([])
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95')
          observer?.unobserve(entry.target)
        }
      })
    }, options)

    elementsToReveal.value.forEach(el => observer?.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  const vReveal = {
    mounted(el: HTMLElement) {
      // Set initial classes before the element is observed
      el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-out', 'will-change-transform')
      elementsToReveal.value.push(el)
      if (observer) {
        observer.observe(el)
      }
    }
  }

  return { vReveal }
}
