import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LobbyView from '@/views/LobbyView.vue'
import gameChat from '@/components/lobby/gameChat.vue'
import gameParams from '@/components/lobby/gameParams.vue'
import gameState from '@/components/lobby/gameState.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
        path: '/lobby',
        name: 'lobby',
        components: {
            default: LobbyView,
            chat: gameChat,
            params: gameParams,
            state: gameState
        }
    }
   
  ],
})

export default router
