<template>
     <div>
            <h1>Roles en jeu :</h1>
            <div class="flex flex-wrap gap-1">
                <RoleCard :role="roles[0]" />
                <RoleCard :role="roles[2]" />
                <RoleCard :role="roles[10]" />
            </div>
        </div>
</template>

<script setup lang="ts">
import RoleCard from "@/components/roles/roleCard.vue"
import { roles } from "@/components/roles/roles"
</script>