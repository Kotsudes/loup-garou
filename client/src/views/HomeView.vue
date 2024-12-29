<template>
    <main>
        <div class="max-w-screen grid h-screen max-h-screen w-screen">
            <div class="absolute justify-self-end">
                <ThemeToggle />
            </div>
            <Card class="w-1/3 place-self-center justify-self-center">
                <CardHeader>
                    <CardTitle>
                        Bienvenu au village de {{ voiceChannelName }}
                    </CardTitle>
                    <CardDescription>
                        Un village où les loups se cachent
                    </CardDescription>
                </CardHeader>
                <CardContent>LES PERSONNES DEJA DANS LE LOBBY</CardContent>
                <CardFooter class="flex justify-around">
                    <RouterLink :to="isActivityReady ? '/lobby?role=player' : '#'">
                        <Button :disabled="!isActivityReady" @click="join('player')">Rejoindre</Button>
                    </RouterLink>
                    <RouterLink :to="isActivityReady ? '/lobby?role=spectator' : '#'">
                        <Button :disabled="!isActivityReady" variant="outline"
                            @click="join('spectator')">Spectateur</Button>
                    </RouterLink>
                </CardFooter>
            </Card>
        </div>
    </main>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { RouterLink } from 'vue-router'
import ThemeToggle from "@/components/themeToggle.vue"
import { auth, socket, discordSdk, send } from "@/main"
import { computedAsync } from '@vueuse/core'
import { createEvent, waitForValue } from "@/lib/utils"
import { ref } from "vue"


const isActivityReady = ref(false)

const voiceChannelName = computedAsync(
    async () => {
        if (!discordSdk.channelId) {
            return 'Unknown'
        }

        await waitForValue(() => auth?.access_token)

        const channel = await discordSdk.commands.getChannel({
            channel_id: discordSdk.channelId as string,
        });

        if (channel.name != null) {
            isActivityReady.value = true
            return channel.name
        }
    },
    "Thiercelieux"
)

async function join(type: "player" | "spectator") {
    send(createEvent("join", { type: type, instance: discordSdk.instanceId, access_token: auth?.access_token }))
}

</script>
