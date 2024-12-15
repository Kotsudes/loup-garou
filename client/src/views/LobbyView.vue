<template>
    <main>
        <ResizablePanelGroup
            direction="horizontal"
            class="max-w-screen max-h-screen"
        >
            <ResizablePanel :defaultSize="70" class="w-full">
                <div class="flex h-screen w-full items-center justify-center p-6">
                    <RouterView name="gameChat"/>
                </div>
            </ResizablePanel>
            <ResizableHandle class="border-2" />
            <ResizablePanel :defaultSize="30">
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel :defaultSize="10" :minSize="5">
                        <div class="flex h-full p-6">
                            <RouterView name="gameParams"/>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle class="border-2" />
                    <ResizablePanel :defaultSize="90">
                        <div class="flex h-full p-6">
                            <RouterView name="gameState"/>
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
import { RouterView } from 'vue-router'
</script>
