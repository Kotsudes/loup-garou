<template>
      <div class="flex gap-3">
            <GameSettings />
            <ThemeToggle />
            <RouterLink to="/">
                <Button class="px-2" variant="outline">
                    <Icon icon="material-symbols:door-open" width="24" height="24" />
                </Button>
            </RouterLink>
        </div>
</template>

<script lang="ts" setup>
import ThemeToggle  from "@/components/themeToggle.vue"
import GameSettings from "@/components/lobby/gameSettings.vue"
import { Button } from "@/components/ui/button"
import { RouterLink } from 'vue-router'
import { Icon } from "@iconify/vue";
</script>