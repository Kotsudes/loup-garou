<template>
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant="outline">Paramètres</Button>
        </AlertDialogTrigger>
        <AlertDialogContent class="max-w-3xl">
            <AlertDialogTitle>Composition</AlertDialogTitle>
            <AlertDialogHeader>
                <AlertDialogDescription>
                    Changer la composition des rôles
                </AlertDialogDescription>
            </AlertDialogHeader>
            <div class="flex flex-wrap gap-2">
                <Card v-for="role in savedGame.roles" :role="role" :key="role.role.name"
                    class="flex flex-col items-center p-2">
                    <RoleCard :role="role.role" :quantity="role.quantity" />
                    <NumberInput v-model="role.quantity" />
                </Card>
            </div>
            <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction :disabled="!hasChanged" @click="sendUpdate">Sauvegarder</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>

</template>

<script lang="ts" setup>

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import RoleCard from "@/components/roles/roleCard.vue"
import NumberInput from "@/components/form/numberInput.vue"
import { Card } from "@/components/ui/card"
import { computed, reactive } from "vue";
import { useGameStore, type Game } from "@/stores/game"
import { cloneDeep, assign, isMatch } from "lodash"
import { useUserStore } from "@/stores/user";
import { discordSdk } from "@/main";

const { game } = useGameStore()
const { isConnected } = useUserStore()


const savedGame = reactive<Game>(cloneDeep(game))

const hasChanged = computed(() => !isMatch(savedGame, game))

async function updateGame() {
    if (!isConnected) {
        return;
    }

    assign(game, savedGame);
    assign(savedGame, cloneDeep(game));
}

const sendUpdate = async () => {
    if (!hasChanged.value) {
        return;
    }

    // Envoie de la mise à jour au serveur par requete api
    const response = await fetch(`/.proxy/api/game/${discordSdk.instanceId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
    });

    if (response.ok) {
        await updateGame();
    }
};



</script>
