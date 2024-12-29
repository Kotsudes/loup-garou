<template>
    <div class="flex flex-col gap-4">
        <div>
            <h1 class="font-bold text-lg mb-2">Roles en jeu :</h1>
            <div class="flex flex-wrap gap-1">
                <template v-for="role in game.roles" :key="role.role.name">
                    <RoleCard :role="role.role" v-if="role.quantity > 0" :quantity="role.quantity" />
                </template>
            </div>
        </div>
        <div>
            <h1 class="font-bold text-lg">Joueurs :</h1>
            <ul id="players">
                <li v-for="player in lobby" :key="player.username">
                    <span>{{ player.username }} - {{ player.isReady ? "Prêt" : "Pas prêt" }}</span>
                </li>
            </ul>
        </div>
        <div>
            <h1 class="font-bold text-lg">Spectateurs :</h1>
            <ul id="spectators">
                <li>Spec 1</li>
                <li>Spec 2</li>
                <li>Spec 3</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import RoleCard from "@/components/roles/roleCard.vue"
import { useGameStore } from "@/stores/game"
import { data } from "@/main"
import { onMounted } from "vue"

const { game, lobby, updateLobby } = useGameStore()


onMounted(() => {
    const response = JSON.parse(data.value)
    switch (response.type) {
        case "lobbyInfo":
            updateLobby(response.data)
            console.log(lobby)
            break
    }
})

</script>
