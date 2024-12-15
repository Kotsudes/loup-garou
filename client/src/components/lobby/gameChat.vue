<template>
    <div class="grid h-full max-h-screen w-full">
            <Card class="flex h-full w-full flex-col place-self-center justify-self-center bg-card/90">
                <CardHeader class="w-full">
                    <CardTitle class="self-center align-middle">
                        Chat - ETAT DE LA PARTIE
                    </CardTitle>
                </CardHeader>
                <Separator class="mb-4" />

                <CardContent class="flex-grow">
                    <ul>
                        <li>a</li>
                    </ul>
                </CardContent>
                <CardFooter class="mt-auto flex justify-around gap-2 bg-card/100 pt-4">
                    <Input placeholder="Message" />
                    <Button variant="secondary">Envoyer</Button>
                </CardFooter>
            </Card>
        </div>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
</script>