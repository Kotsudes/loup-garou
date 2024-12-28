<template>
    <div class="flex flex-col gap-4">
        <div>
            <h1 class="font-bold text-lg">Roles en jeu :</h1>
            <div class="flex flex-wrap gap-1">
                <template v-for="role in game.roles" :key="role.role.name">
                    <RoleCard :role="role.role" v-if="role.quantity > 0" :quantity="role.quantity" />
                </template>
            </div>
        </div>
        <div>
            <h1 class="font-bold text-lg">Joueurs :</h1>
            <ul id="players">
                <li>Player 1</li>
                <li>Player 2</li>
                <li>Player 3</li>
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

const { game } = useGameStore()
</script>
