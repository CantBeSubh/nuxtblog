<template>
    <UCard v-bind="$attrs" class="relative p-16 overflow-visible h-96">
        <img
            :src="image"
            alt="Author Image"
            class="absolute top-[-100px] right-10 w-56 h-56 rounded-full border-4 border-white object-cover object-center"
        />
        <div class="flex flex-col space-y-6">
            <p class="text-6xl text-green-600 text-bold">
                {{ displayName.toLowerCase() }}
            </p>
            <p class="text-2xl">
                {{ jobTitle }}
            </p>
            <p>
                {{ bio }}
            </p>
        </div>

        <!-- {{ image }} -->
    </UCard>
</template>
<script setup>
defineProps({
    displayName: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
</script>
