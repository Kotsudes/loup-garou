<template>

    <body class="bg-stone-800/75 bg-village/50 bg-cover antialiased dark:bg-stone-50/25">
        <RouterView />
    </body>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { useGameStore } from "@/stores/game";
// import { useConnectionStore } from "@/stores/connection";

//const gameStore = useGameStore();
//const connectionStore = useConnectionStore();


//connectionStore.identify();
</script>


<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
