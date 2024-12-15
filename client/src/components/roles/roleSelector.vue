
<template>
    <Card class="flex flex-col items-center p-2">
        <RoleCard :role="role" />
        <NumberInput />
    </Card>
</template>

<script lang="ts" setup>
import { type typeRole } from "@/components/roles/roles"
import RoleCard from "@/components/roles/roleCard.vue"
import NumberInput from "@/components/form/numberInput.vue"
import { Card } from "@/components/ui/card"

defineProps<{
    role: typeRole
}>()
</script>