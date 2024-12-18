<template>
    <main>
        <ResizablePanelGroup direction="horizontal" class="max-w-screen max-h-screen">
            <ResizablePanel :defaultSize="70" class="w-full">
                <div class="flex h-screen w-full items-center justify-center p-6">
                    <GameChat />
                </div>
            </ResizablePanel>
            <ResizableHandle class="border-2" />
            <ResizablePanel :defaultSize="30">
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel :defaultSize="10" :minSize="5">
                        <div class="flex h-full p-6">
                            <GameParams />
                        </div>
                    </ResizablePanel>
                    <ResizableHandle class="border-2" />
                    <ResizablePanel :defaultSize="90">
                        <div class="flex h-full p-6">
                            <GameState />
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    </main>
</template>

<script setup lang="ts">
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import GameChat from '@/components/lobby/gameChat.vue'
import GameParams from '@/components/lobby/gameParams.vue'
import GameState from '@/components/lobby/gameState.vue'
</script>
