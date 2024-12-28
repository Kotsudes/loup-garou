<template>
    <TooltipProvider :delayDuration="0">
        <Tooltip>
            <TooltipTrigger asChild class="size-10">
                <img :src="role.image" :width="100" :height="100" :alt="role.name" />
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

defineProps<{ role: Role, quantity: number }>()
</script>
