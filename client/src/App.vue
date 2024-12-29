<template>

    <body class="bg-stone-800/75 bg-village/50 bg-cover antialiased dark:bg-stone-50/25">
        <RouterView />
    </body>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>


<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
