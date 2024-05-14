import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 1. state
  const count = ref(0)

  // 2. getter
  const doubleCount = computed(() => count.value * 2)

  // 3. action
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useHouseStore = defineStore('house', () => {

  const houses = ref([
    {
      name: "아파트1",
      floor: "10층",
      area: "10평",
    },
  ])

  return { houses }
})