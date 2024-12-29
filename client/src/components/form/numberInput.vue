<template>
    <Card class="flex items-center border-none px-2 py-0">
        <Button type="button" class="h-2 px-1 text-2xl" aria-label="Decrease" @click="handleChange(model - 1)">
            <RadixIconsMinus width="24" height="24" />
        </Button>
        <Input
            class="w-6 border-0 bg-transparent p-0 text-center text-gray-800 focus:ring-0 dark:text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number" :style="{ appearance: 'textfield' }" aria-roledescription="Number field" :min="0"
            v-model="model" readonly />
        <Button type="button" class="h-2 px-1 text-2xl" aria-label="Increase" @click="handleChange(model + 1)">
            <RadixIconsPlus width="24" height="24" />
        </Button>
    </Card>
</template>

<script setup lang="ts">

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import RadixIconsMinus from "@/assets/icons/RadixIconsMinus.vue";
import RadixIconsPlus from "@/assets/icons/RadixIconsPlus.vue";

const model = defineModel<number>({ required: true })

function handleChange(newValue: number) {
    if (newValue < 0) {
        return
    } else {
        model.value = newValue
    }
}

</script>
