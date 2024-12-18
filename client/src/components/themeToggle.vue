<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useColorMode } from '@vueuse/core'
import RadixIconsMoon from '@/assets/icons/RadixIconsMoon.vue'
import RadixIconsSun from '@/assets/icons/RadixIconsSun.vue'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="outline">
                <RadixIconsMoon class="size-7 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <RadixIconsSun class="absolute size-7 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem @click="mode = 'light'">
                Light
            </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'dark'">
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem @click="mode = 'auto'">
                System
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
