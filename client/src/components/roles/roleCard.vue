<template>
    <TooltipProvider :delayDuration="0">
        <Tooltip>
            <TooltipTrigger asChild>
                <div class="size-10 relative">
                    <img :src="role.image" :width="100" :height="100" :alt="role.name" />
                    <div v-show="quantity > 1">
                        <FontAwesomeCertificate class="absolute size-5 -right-2 -top-2" />
                        <span class="absolute size-5 text-center text-sm -right-2 -top-2 font-semibold">
                            {{ quantity }}
                        </span>
                    </div>
                </div>
            </TooltipTrigger>
            <TooltipContent class="border-border bg-popover text-primary">
                <p>{{ role.description }}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>

<script lang="ts" setup>
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import type { Role } from "@/stores/game";
import FontAwesomeCertificate from "@/assets/icons/FontAwesomeCertificate.vue"

defineProps<{ role: Role, quantity: number }>()
</script>
