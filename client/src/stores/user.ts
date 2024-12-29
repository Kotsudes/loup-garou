import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { status } from '@/main'

export const useUserStore = defineStore('user', () => {
    const isConnected = computed(() => status.value === "OPEN")
    const username = ref("");
  return { isConnected }
})
