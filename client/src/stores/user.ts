import { computed } from 'vue'
import { defineStore } from 'pinia'
import { socket } from '@/main'

export const useUserStore = defineStore('user', () => {
    const isConnected = computed(() => socket.readyState === WebSocket.OPEN)
  return { isConnected }
})
