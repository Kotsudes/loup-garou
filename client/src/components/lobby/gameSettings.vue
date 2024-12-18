<template>
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant="outline">Paramètres</Button>
        </AlertDialogTrigger>
        <AlertDialogContent class="max-w-3xl">
            <AlertDialogTitle>Composition</AlertDialogTitle>
            <AlertDialogHeader>
                <AlertDialogDescription>
                    Changer la composition des rôles
                </AlertDialogDescription>
            </AlertDialogHeader>
            <div class="flex flex-wrap gap-2">
                <RoleSelector v-for="(role, index) in roles" :role="role" :key="role.name"
                    :modelValue="gameRoles[index]" />
            </div>
            <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction>Sauvegarder</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>

<script setup lang="ts">
import RoleSelector from "@/components/roles/roleSelector.vue"
import { roles } from "@/components/roles/roles"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { ref, watch } from "vue";

const gameRoles = ref<[]>([])

watch(gameRoles, (newVal) => {
    console.log(newVal)
}, { deep: true })

</script>
