<template>
    <div v-if="blog">
        <div class="grid grid-cols-2 px-48">
            <div class="my-auto">
                <p class="text-6xl text-left text-bold">{{ blog.title }}</p>
                <p class="mt-12 text-xl text-left text-gray-500">
                    {{ blog.description }}
                </p>
            </div>
            <div>
                <img
                    :src="blog.mainImage"
                    alt="Blog Image"
                    class="object-cover object-center w-full h-[700px] rounded-xl border-2 border-gray-300"
                />
            </div>
        </div>
        <div
            class="max-w-xl mx-auto prose prose-gray mt-14 dark:prose-invert prose-headings:no-underline prose-a:text-primary-600 prose-blockquote:border-primary-500 prose-blockquote:font-light prose-blockquote:text-gray-500 prose-img:w-full prose-img:rounded-3xl"
        >
            <SanityContent :blocks="blog.content" />
        </div>
        <AuthorCard
            :displayName="blog.author.displayName"
            :jobTitle="blog.author.jobTitle"
            :bio="blog.author.bio"
            :image="blog.author.image"
            class="mx-56 mt-44"
        />
    </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const query = groq`
*[_type=="article" && slug.current==$slug][0]{
    title,
    description,
    content,
    "mainImage":mainImage.asset->url ,
    author->{
        displayName,
        jobTitle,
        bio,
        "image":image.asset->url
    },
    categories[]->{
        title
    }
}`;
let blog = ref({});
const { data, refresh } = useSanityQuery(query, { slug });
blog.value = data._rawValue;
</script>
