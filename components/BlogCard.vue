<template>
    <a :href="blog.slug">
        <UCard class="bg-gray-100 cursor-pointer">
            <div class="flex">
                <img
                    class="object-cover object-center w-48 h-48 border-2 border-gray-300 rounded-xl"
                    :src="blog.mainImage"
                    alt="Blog Image"
                />
                <div class="flex flex-col justify-between w-full mx-4">
                    <div class="flex space-x-4">
                        <p class="text-gray-500">
                            {{ new Date(blog._createdAt).toLocaleDateString() }}
                        </p>

                        <UBadge
                            :ui="{ rounded: 'rounded-full' }"
                            v-for="category in blog.categories"
                        >
                            {{ category.title }}
                        </UBadge>
                    </div>
                    <div>
                        <p class="text-2xl font-bold">{{ blog.title }}</p>
                        <p class="text-gray-500 line-clamp-2">
                            {{ blog.description }}
                        </p>
                    </div>
                    <div>
                        <hr class="my-2" />
                        <div class="flex items-center">
                            <UAvatar :src="blog.author.image" alt="Avatar" />
                            <p class="ml-4 text-bold">
                                {{ blog.author.displayName }}
                            </p>
                            <p class="ml-4 text-gray-500">
                                {{ blog.author.jobTitle }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UCard>
    </a>
</template>
<script setup>
defineProps({
    blog: {
        type: Object,
        required: true,
    },
});
</script>
