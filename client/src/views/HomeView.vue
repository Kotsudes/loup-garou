<template>
    <main>
        <div class="max-w-screen grid h-screen max-h-screen w-screen">
            <div class="absolute justify-self-end">
                <ThemeToggle />
            </div>
            <Card class="w-1/3 place-self-center justify-self-center">
                <CardHeader>
                    <CardTitle>
                        Bienvenu au village de PLACEHOLDER SERVEUR
                    </CardTitle>
                    <CardDescription>
                        Un village où les loups se cachent
                    </CardDescription>
                </CardHeader>
                <CardContent>LES PERSONNES DEJA DANS LE LOBBY</CardContent>
                <CardFooter class="flex justify-around">
                    <RouterLink to="/lobby?role=player">
                        <Button>Rejoindre</Button>
                    </RouterLink>
                    <RouterLink to="/lobby?role=spectator">
                        <Button variant="outline">Spectateur</Button>
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
</script>
