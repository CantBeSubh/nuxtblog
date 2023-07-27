<template>
    <div class="flex items-center justify-center p-4 space-x-4">
        <h1 class="text-6xl font-bold">NUXT BLOGS</h1>
        <ClientOnly>
            <UButton
                size="lg"
                :icon="
                    isDark
                        ? 'i-heroicons-moon-20-solid'
                        : 'i-heroicons-sun-20-solid'
                "
                color="gray"
                variant="ghost"
                @click="isDark = !isDark"
                class="w-10 h-10"
            />
        </ClientOnly>
    </div>
</template>

<script setup>
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});
</script>
